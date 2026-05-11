import { CompanyCredentials } from "./CompanyCredentials";
import { WhoWeAreSection } from "./WhoWeAreSection";
import { MissionVision } from "./MissionAndVision";
import { getData } from "@/lib/getData";
import PolicyAndCoreValues from "@/models/admin-model/Customer/Sector";
import WhoWeAre from "@/models/admin-model/AboutUs/WhoWeAre";
import { WeBelieve } from "./WeBelieve";
import Foundation from "@/models/admin-model/AboutUs/Foundation";
import { Certifications } from "../Home/Certifications";
import CompanyCredential from "@/models/admin-model/AboutUs/CompanyCredential";
import { OurJourney } from "./OurJourney";
import Journey from "@/models/admin-model/AboutUs/Journey";
import { ContactCta } from "../Cta For Connect/ContactCta";


export const AboutUs = async () => {

    const achivementData = await getData(CompanyCredential);
    const policyData = await getData(PolicyAndCoreValues);
    const whoWeAreData = await getData(WhoWeAre);
    const foundationData = await getData(Foundation);
    const credentialsData = await getData(CompanyCredential);
    const ourJourneyData = await getData(Journey);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Building Trust{" "}<span className="text-secondary">Through Execution</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    <span className="font-semibold">No jargon. No promises — </span>
                    just proven delivery at government scale since 2017.
                </p>
            </div>
            <WhoWeAreSection cardData={whoWeAreData} />
            <WeBelieve />
            <MissionVision foundationData={foundationData} />
            <OurJourney journeyData={ourJourneyData} />
            <Certifications />
            <CompanyCredentials cardData={credentialsData} />
            <ContactCta title="Start a Meaningful Conversation" description="A consultative approach focused on understanding your IT needs and identifying the right solutions—no sales pressure." buttonText="Start a Conversation" nevigateUrl="contact-us"/>
        </div>
    );
};
