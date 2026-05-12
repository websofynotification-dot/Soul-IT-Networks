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


export const DatabaseAndStorageSolutionsPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Database & Storage Solutions");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Database & Storage Solutions");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Database & Storage Solutions");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Database & Storage Solutions");

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Reliable Storage.{" "}<span className="text-secondary">Smarter Data Management.</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Scalable database, storage, and backup solutions built to protect critical data and support business growth.
                </p>
            </div>
            <Overviews serviceData={filterOverviewData} />
            <WhyChoosSoulIt
                serviceData={filterWhyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Scalable Database & @ Storage Architectures"
                description="Soul IT networks combines strategic OEM partnerships, certified specialists, @
                and scalable architectures to deliver reliable and future-ready data infrastructure solutions."
            />

            <Approaches
                serviceData={filterApproachData}
                title="Our Approach"
                subtitle="How We Manage @ Enterprise Data"
                description="A comprehensive methodology combining storage architecture, backup strategy, disaster recovery, @ and performance optimization."
            />

            <Deliveries
                serviceData={filterDeliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Storage"
                description="We build intelligent database and storage environments that maximize performance, strengthen protection, @ and support mission-critical operations."
            />

            <ContactCta title="Modernize Your Data Infrastructure" description="Delivering high-availability storage architectures and backup strategies designed for enterprise resilience and growth." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







