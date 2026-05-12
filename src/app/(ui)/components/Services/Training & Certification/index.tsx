import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { service } from "@/types/serviceContext";
import { Overviews } from "../../Shared Component/Overviews";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";


export const TrainingAndCertificationPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Training & Certification");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Training & Certification");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Training & Certification");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Training & Certification");

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Empowering Talent{" "}<span className="text-secondary">Through Technology</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Helping students and organizations grow with hands-on IT training and certification programs.
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

            <ContactCta title="Build a Future-Ready Workforce" description="Empower your teams with hands-on IT training and globally recognized certifications designed for evolving technology challenges." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







