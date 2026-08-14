import { PlanProvider } from "@/components/PlanContext";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Service } from "@/components/sections/Service";
import { Works } from "@/components/sections/Works";
import { Commitment } from "@/components/sections/Commitment";
import { Pricing } from "@/components/sections/Pricing";
import { Flow } from "@/components/sections/Flow";
import { Mission } from "@/components/sections/Mission";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main" className="pb-20 sm:pb-0">
      <Hero />
      <Problem />
      <Service />
      <Works />
      <Commitment />
      <PlanProvider>
        <Pricing />
        <Flow />
        <Mission />
        <Faq />
        <Contact />
      </PlanProvider>
    </main>
  );
}
