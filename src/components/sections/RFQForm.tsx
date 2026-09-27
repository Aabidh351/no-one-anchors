"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryFormValues } from "@/lib/validation";
import type { Port } from "@/lib/api/data";

const fieldClass =
  "w-full rounded-md border border-line bg-foam px-4 py-2.5 text-ink placeholder:text-slate/70 focus:border-harbor focus:outline-none transition-colors";
const labelClass = "block text-sm text-ink/80 mb-1.5";
const errorClass = "mt-1.5 text-sm text-red-700";

export default function RFQForm({ ports }: { ports: Port[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { urgency: "standard" },
  });

  async function onSubmit(values: InquiryFormValues) {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper rounded-xl p-10 text-center">
        <h3 className="font-display font-semibold text-2xl text-ink mb-2">Inquiry sent</h3>
        <p className="text-ink/70">
          The duty desk has your request and will reply to the email you
          provided, usually within a few hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-harbor hover:text-harbor-dark font-medium"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      <fieldset>
        <legend className="font-display font-semibold text-xl text-ink mb-5">Vessel details</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="vesselName">Vessel name</label>
            <input id="vesselName" className={fieldClass} {...register("vesselName")} />
            {errors.vesselName && <p className={errorClass}>{errors.vesselName.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="imoNumber">IMO number (optional)</label>
            <input id="imoNumber" className={fieldClass} placeholder="7 digits" {...register("imoNumber")} />
            {errors.imoNumber && <p className={errorClass}>{errors.imoNumber.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="port">Port of call</label>
            <select id="port" className={fieldClass} {...register("port")} defaultValue="">
              <option value="" disabled>Select a port</option>
              {ports.map((p) => (
                <option key={p.code} value={p.name}>{p.name}, {p.country}</option>
              ))}
            </select>
            {errors.port && <p className={errorClass}>{errors.port.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="eta">Expected arrival</label>
            <input id="eta" type="date" className={fieldClass} {...register("eta")} />
            {errors.eta && <p className={errorClass}>{errors.eta.message}</p>}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display font-semibold text-xl text-ink mb-5">Your contact details</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass} htmlFor="contactName">Name</label>
            <input id="contactName" className={fieldClass} {...register("contactName")} />
            {errors.contactName && <p className={errorClass}>{errors.contactName.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="contactPhone">Phone</label>
            <input id="contactPhone" className={fieldClass} {...register("contactPhone")} />
            {errors.contactPhone && <p className={errorClass}>{errors.contactPhone.message}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="contactEmail">Email</label>
            <input id="contactEmail" type="email" className={fieldClass} {...register("contactEmail")} />
            {errors.contactEmail && <p className={errorClass}>{errors.contactEmail.message}</p>}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="font-display font-semibold text-xl text-ink mb-5">What you need</legend>
        <div>
          <label className={labelClass} htmlFor="itemsNeeded">
            Items or services, with quantities where known
          </label>
          <textarea
            id="itemsNeeded"
            rows={5}
            className={fieldClass}
            placeholder="e.g. 2x life raft servicing, fresh provisions for 22 crew, 200L hydraulic oil"
            {...register("itemsNeeded")}
          />
          {errors.itemsNeeded && <p className={errorClass}>{errors.itemsNeeded.message}</p>}
        </div>

        <div className="mt-5">
          <span className={labelClass}>Urgency</span>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "standard", label: "Standard" },
              { value: "urgent", label: "Urgent — within 24h" },
              { value: "critical", label: "Critical — vessel waiting" },
            ].map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-2 border border-line rounded-md px-4 py-2 text-sm text-ink/80 has-[:checked]:border-harbor has-[:checked]:bg-harbor/5 cursor-pointer transition-colors"
              >
                <input type="radio" value={opt.value} {...register("urgency")} className="accent-harbor" />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      {serverError && (
        <p className="text-sm text-red-700 border border-red-200 bg-red-50 rounded-md px-4 py-3">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center rounded-md bg-harbor px-7 py-3.5 text-white font-medium shadow-lg shadow-harbor/25 hover:bg-harbor-dark transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}