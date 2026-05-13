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


export const CampusWideWiFiRolloutPage = async () => {

    const filter = "Campus Wide WiFi Rollout";

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
                    Seamless Campus{" "}<span className="text-secondary">Wireless Connectivity</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    High-performance WiFi solutions designed to deliver reliable coverage, secure access, and uninterrupted connectivity.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Proven Expertise in @ Enterprise WiFi Deployments"
                description="From educational institutions to enterprise campuses, we build high-performance wireless networks designed @ for seamless connectivity and user experience."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Surveillance Deployment @ Done Right"
                description="We design and implement CCTV systems that provide continuous visibility, reliable @ monitoring, and long-term operational performance."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Surveillance Solutions @ That Protect at Scale"
                description="From smart monitoring to centralized surveillance infrastructure, we deliver security @ solutions designed for continuous protection and operational control."
            />

            <ContactCta title="WiFi That Keeps Every Corner Connected" description="Our wireless specialists design and deploy scalable campus WiFi solutions built for performance, reliability, and growth." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







