import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { service } from "@/types/serviceContext";
import { Overviews } from "../../Shared Component/Overviews";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";
import { ContactCta } from "../../Cta For Connect/ContactCta";


export const NetworkAndCyberSecurityPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Network & Cyber Security");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Network & Cyber Security");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Network & Cyber Security");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Network & Cyber Security");

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Enterprise Network{" "}<span className="text-secondary">& Cyber Security</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Protecting your business with comprehensive security solutions, strategic consulting, training, and secure implementation.
                </p>
            </div>
            <Overviews serviceData={filterOverviewData} />
            <WhyChoosSoulIt
                serviceData={filterWhyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Security Built @ for Modern Threats"
                description="Powered by leading cybersecurity technologies and certified professionals, we design @ layered security environments that protect critical systems from evolving threats."

            />
            <Approaches
                serviceData={filterApproachData}
                title="Our Approach"
                subtitle="Our Cybersecurity @ Delivery Framework"
                description="Integrating advanced security technologies, threat intelligence, and compliance-focused @ practices to build resilient IT environments."
            />

            <Deliveries
                serviceData={filterDeliveryData}
                title="We Deliver"
                subtitle="Cybersecurity @ That Supports Growth"
                description="We build layered cybersecurity frameworks that protect systems, data, @ and operations against evolving digital threats."
            />

            <ContactCta title="Build a Stronger Security Posture" description="Identify vulnerabilities, reduce risk, and protect critical systems with tailored cybersecurity strategies and expert guidance." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







