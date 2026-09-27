import About from "@/components/layout/About";
import Hero from "@/components/layout/Hero";
import Ports from "@/components/layout/Ports";
import Products from "@/components/layout/Products";
import Services from "@/components/layout/Service";
import Why from "@/components/layout/Why";

export default function Home() {
  return <>
  <Hero/>
  <About/>
  <Why/>
  <Services/>
  <Products/>
  <Ports/>

  </>;
}
