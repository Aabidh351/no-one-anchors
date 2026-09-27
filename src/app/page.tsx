import About from "@/components/layout/About";
import Certifications from "@/components/layout/Certifications";
import CTASection from "@/components/layout/CTASection";
import Hero from "@/components/layout/Hero";
import Ports from "@/components/layout/Ports";
import Products from "@/components/layout/Products";
import Services from "@/components/layout/Service";
import Testimonials from "@/components/layout/Testimonials";
import TrustBar from "@/components/layout/TrustBar";
import Why from "@/components/layout/Why";

const certifications = [
  { name: "ISO 9001:2015", issuer: "Bureau Veritas" },
  { name: "ISSA Membership", issuer: "International Ship Suppliers & Services Association" },
  { name: "ISO 22000", issuer: "Bureau Veritas" },
  { name: "Flag State Approval", issuer: "Multiple flag administrations" },
];

const testimonials = [
  {
    quote: "Stores were on the quay before we finished berthing.",
    name: "M. Andersen",
    role: "Chief Officer",
    company: "Nordic Bulk Carriers",
  },
  {
    quote: "Same standard every time, which is the whole point of a preferred supplier.",
    name: "R. Fernando",
    role: "Fleet Superintendent",
    company: "Colombo Tanker Group",
  },
];

export default function Home() {
  return <>
  <Hero/>
  <About/>
  <Why/>
  <Services/>
  <Products/>
  <Ports/>
  <Certifications/>
  <TrustBar certifications={certifications} />
      <Testimonials testimonials={testimonials} />
      <CTASection />
  </>;
}
