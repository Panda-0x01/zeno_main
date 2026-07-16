import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
