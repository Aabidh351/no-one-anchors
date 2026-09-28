"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { Port } from "@/lib/api/data";

// Schematic projection scoped to the region our ports sit in
const BOUNDS = { minLat: -2, maxLat: 26, minLng: 76, maxLng: 108 };
const VIEW = { width: 640, height: 420, pad: 40 };
const LNG_LINES = [76, 80, 84, 88, 92, 96, 100, 104, 108];
const LAT_LINES = [-2, 2, 6, 10, 14, 18, 22, 26];

function project(lat: number, lng: number) {
  const x =
    VIEW.pad +
    ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) *
      (VIEW.width - VIEW.pad * 2);
  const y =
    VIEW.pad +
    (1 - (lat - BOUNDS.minLat) / (BOUNDS.maxLat - BOUNDS.minLat)) *
      (VIEW.height - VIEW.pad * 2);
  return { x, y };
}

export default function PortsExplorer({ ports }: { ports: Port[] }) {
  const [activeCode, setActiveCode] = useState<string>(ports[0].code);

  const hub = ports[0];
  const hubPos = project(hub.lat, hub.lng);

  const active = ports.find((p) => p.code === activeCode) ?? ports[0];
  const activePos = project(active.lat, active.lng);

  // tooltip geometry
  const tipW = Math.max(active.name.length * 7.5 + 28, 130);
  const tipX = Math.min(
    Math.max(activePos.x - tipW / 2, 8),
    VIEW.width - tipW - 8,
  );
  const tipBelow = activePos.y < 100;
  const tipY = tipBelow ? activePos.y + 16 : activePos.y - 58;

  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
      {/* ================= MAP ================= */}
      <div className="border border-line rounded-2xl bg-paper p-3 sm:p-5 shadow-sm h-fit">
        <svg
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          className="w-full h-auto rounded-xl"
          role="img"
          aria-label="Map of ports in our coverage network"
        >
          <rect
            x={0}
            y={0}
            width={VIEW.width}
            height={VIEW.height}
            className="fill-foam"
          />

          {LNG_LINES.map((lng) => {
            const { x } = project(0, lng);
            return (
              <line
                key={`v${lng}`}
                x1={x}
                y1={0}
                x2={x}
                y2={VIEW.height}
                className="stroke-line"
                strokeWidth={1}
              />
            );
          })}
          {LAT_LINES.map((lat) => {
            const { y } = project(lat, 0);
            return (
              <line
                key={`h${lat}`}
                x1={0}
                y1={y}
                x2={VIEW.width}
                y2={y}
                className="stroke-line"
                strokeWidth={1}
              />
            );
          })}

          {/* routes from the hub port to every other port */}
          {ports.slice(1).map((port, i) => {
            const p = project(port.lat, port.lng);
            const cx = (hubPos.x + p.x) / 2;
            const cy = Math.min(hubPos.y, p.y) - 40;
            const isActive = port.code === activeCode;
            return (
              <motion.path
                key={`route-${port.code}`}
                d={`M ${hubPos.x} ${hubPos.y} Q ${cx} ${cy} ${p.x} ${p.y}`}
                fill="none"
                strokeWidth={isActive ? 2 : 1.25}
                strokeDasharray="5 5"
                className={isActive ? "stroke-harbor" : "stroke-harbor/35"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
              />
            );
          })}

          {/* markers */}
          {ports.map((port) => {
            const { x, y } = project(port.lat, port.lng);
            const isActive = port.code === activeCode;
            return (
              <g
                key={port.code}
                className="cursor-pointer"
                onMouseEnter={() => setActiveCode(port.code)}
                onClick={() => setActiveCode(port.code)}
              >
                <circle cx={x} cy={y} r={16} fill="transparent" />
                {isActive && (
                  <motion.circle
                    cx={x}
                    cy={y}
                    className="fill-brass"
                    initial={{ r: 8, opacity: 0.5 }}
                    animate={{ r: 24, opacity: 0 }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 8 : 6}
                  className={isActive ? "fill-brass" : "fill-harbor"}
                  style={{ transition: "all 0.2s" }}
                />
                <circle cx={x} cy={y} r={2.5} className="fill-white" />
              </g>
            );
          })}

          {/* tooltip for the active port */}
          <motion.g
            key={active.code}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <rect
              x={tipX}
              y={tipY}
              width={tipW}
              height={42}
              rx={8}
              className="fill-harbor-dark"
            />
            <text
              x={tipX + 14}
              y={tipY + 18}
              fontSize={12}
              fontWeight={600}
              fill="#fff"
            >
              {active.name}
            </text>
            <text
              x={tipX + 14}
              y={tipY + 33}
              fontSize={10}
              fill="#fff"
              fillOpacity={0.7}
            >
              {active.responseTime} response
            </text>
          </motion.g>
        </svg>

        <p className="mt-3 px-1 text-xs text-slate">
          Schematic map, positions are approximate. Dashed lines show routes
          from our {hub.name} hub.
        </p>
      </div>

      {/* ================= LIST ================= */}
      <ul className="space-y-3">
        {ports.map((port: Port, i: number) => {
          const isActive = port.code === activeCode;
          return (
            <motion.li
              key={port.code}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <button
                type="button"
                onMouseEnter={() => setActiveCode(port.code)}
                onFocus={() => setActiveCode(port.code)}
                onClick={() => setActiveCode(port.code)}
                className={`w-full text-left rounded-xl border p-4 transition-all duration-300 ${
                  isActive
                    ? "border-harbor bg-harbor/5 shadow-md shadow-harbor/10"
                    : "border-line bg-paper hover:border-harbor/30"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display font-semibold text-lg text-ink">
                      {port.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-slate mt-0.5">
                      <MapPin size={13} /> {port.country}
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foam text-slate border border-line">
                    {port.code}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-harbor font-medium mt-3">
                  <Clock size={13} /> {port.responseTime}
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 pt-3">
                        {port.services.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2.5 py-1 rounded-full bg-harbor/10 text-harbor-dark"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-1.5 mt-4 text-sm text-harbor hover:text-harbor-dark font-medium"
                      >
                        Request a quote for {port.name}
                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
