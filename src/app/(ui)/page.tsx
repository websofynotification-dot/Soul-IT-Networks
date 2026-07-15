import { Hero } from "./components/Home/Hero";
import { WhyChooseUsSection } from "./components/Home/WhyChooseUs";
import { FlagshipProjects } from "./components/Home/FlagshipProjects";
import {  WhySpits } from "./components/Home/WhySpit";
import { Certifications } from "./components/Home/Certifications";
import { Partners } from "./components/Home/Partners";
import { Services } from "./components/Home/Services";
import { ContactCta } from "./components/Cta For Connect/ContactCta";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUsSection />
      <FlagshipProjects />
      <WhySpits />
      <Certifications />
      <Partners />
      <ContactCta title="Designed Today. Built to Last Tomorrow" description="From modernizing data centres to securing networks and deploying statewide IT systems—we’ve done it before, and we deliver it right."buttonText="Start a Conversation" nevigateUrl="contact-us"/>
    </main>
  )
}
