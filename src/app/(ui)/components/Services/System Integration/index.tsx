import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Overviews } from "../../Shared Component/Overviews";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";

export const SystemIntegrationPage = async () => {
    const filter = "System Integration";

    const [
        overviewData,
        whyChooseData,
        approachData,
        deliveryData,
    ] = await Promise.all([
        getData(Overview, filter),
        getData(WhyChooseSoulIt, filter),
        getData(Approach, filter),
        getData(Delivery, filter),
    ]);


    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Integrated Systems{" "}<span className="text-secondary">That Work Together</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    We connect your technologies into one coordinated platform for smoother operations and better performance.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Proven Integration @ Expertise at Scale"
                description="From government infrastructure to enterprise environments, our certified engineers
                        integrate @ leading technologies  to create seamless, high-performing IT ecosystems."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="How We Deliver @ System Integration"
                description="A structured approach focused on seamless integration, optimized performance, @ and long-term scalability."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Integration"
                description="We create unified IT ecosystems that improve performance, scalability, and reliability by seamlessly @ integrating infrastructure, applications, networks, and cloud environments"
            />

            <ContactCta title="Build a Connected IT Environment" description="Engage our specialists to assess your infrastructure and implement a unified integration strategy tailored to your operational goals." buttonText="Request a Consultation" nevigateUrl="contact-us" />

        </div>
    );
};







