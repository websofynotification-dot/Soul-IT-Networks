import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { Overviews } from "../../Shared Component/Overviews";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";
import { ContactCta } from "../../Cta For Connect/ContactCta";


export const CampusWideNetworkingRolloutPage = async () => {

    const filter = "Campus Wide Networking Rollout";

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
                    Enterprise Campus{" "}<span className="text-secondary">Networking Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From cabling to routing, we deliver scalable campus-wide networking solutions that ensure uninterrupted connectivity.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Campus Networks @ Built for Performance"
                description="Combines advanced networking technologies, certified professionals, and structured deployment @ methodologies to deliver resilient campus-wide connectivity solutions."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="SHow We Build @ Campus Networks"
                description="A comprehensive methodology focused on connectivity, scalability, security, @ centralized management, and long-term network performance."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Connectivity"
                description="We create intelligent campus networking environments that improve performance, @ simplify management, and support uninterrupted operations."
            />

            <ContactCta title="Networks Built for Tomorrow’s Campuses" description="We deliver scalable networking infrastructure designed to support growing users, devices, applications, and digital operations." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







