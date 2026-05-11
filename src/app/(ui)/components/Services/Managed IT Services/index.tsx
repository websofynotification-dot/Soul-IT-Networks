import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { service } from "@/types/serviceContext";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Overviews } from "../../Shared Component/Overviews";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";

export const ManageItServicesPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Managed IT Services");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Managed IT Services");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Managed IT Services");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Managed IT Services");

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Comprehensive Managed{" "}<span className="text-secondary">IT Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Supporting organizations with scalable, cost-optimized IT management and long-term operational reliability.
                </p>
            </div>

            <Overviews serviceData={filterOverviewData} />
            <WhyChoosSoulIt
                serviceData={filterWhyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Enterprise-Grade @ Managed IT Expertise"
                description="Backed by 24/7 monitoring, ITIL-driven operations, and experienced engineers, we deliver @ reliable IT support with proven uptime for mission-critical environments."

            />
            <Approaches
                serviceData={filterApproachData}
                title="Our Approach"
                subtitle="Managed IT, @ Delivered Proactively"
                description="Combining monitoring, automation, technical support, and infrastructure optimization @ to maintain secure and efficient IT environments."
            />

            <Deliveries
                serviceData={filterDeliveryData}
                title="We Deliver"
                subtitle="Reliable IT @ Operations, Delivered"
                description="Our managed services ensure secure, scalable, and optimized IT environments @ through continuous monitoring, maintenance, and support."
            />
            
            <ContactCta title="Focus on Business. We’ll Handle IT" description="Our managed IT experts ensure your infrastructure stays secure, reliable, and optimized—so your team can focus on growth and innovation." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







