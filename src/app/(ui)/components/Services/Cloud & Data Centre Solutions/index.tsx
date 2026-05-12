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


export const CloudAndDataCentreSolutionsPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Cloud & Data Centre Solutions");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Cloud & Data Centre Solutions");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Cloud & Data Centre Solutions");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Cloud & Data Centre Solutions");

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Scalable Cloud &{" "}<span className="text-secondary"> Data centre Infrastructure</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Delivering secure, reliable, and future-ready cloud and data centre solutions tailored to your business needs.
                </p>
            </div>

            <Overviews serviceData={filterOverviewData} />
            <WhyChoosSoulIt
                serviceData={filterWhyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Trusted Cloud & @ Data centre Expertise"
                description="Backed by certified architects and proven enterprise deployments, we create secure, @ scalable cloud and datacentre environments with maximum uptime and reliability."

            />
            <Approaches
                serviceData={filterApproachData}
                title="Our Approach"
                subtitle="Infrastructure Built @ for Scale and Reliability"
                description="A comprehensive methodology combining infrastructure strategy, virtualization, automation, @ security, and business continuity planning."
            />

            <Deliveries
                serviceData={filterDeliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Infrastructure"
                description="We create resilient cloud and datacentre ecosystems that ensure high availability, @ operational efficiency, and long-term scalability."
            />

            <ContactCta title="Build a Smarter Cloud & Data centre Environment" description="Modernize your infrastructure with expert guidance on cloud migration, virtualization, hybrid architecture, and business continuity." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







