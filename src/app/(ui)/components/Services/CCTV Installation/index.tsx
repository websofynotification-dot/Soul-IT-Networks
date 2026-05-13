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


export const CCTVInstallationPage = async () => {
    const filter = "CCTV Installation";

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
                    Surveillance That{" "}<span className="text-secondary">Never Sleeps</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From planning to monitoring, we deliver reliable CCTV solutions for critical environments and large-scale deployments.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Enterprise CCTV & @ Surveillance Expertise"
                description="From smart cities to government infrastructure, we deliver high-performance CCTV solutions @ built for continuous monitoring, security, and operational reliability."

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

            <ContactCta title="Smarter Surveillance for Safer Environments" description="Protect your facilities with intelligent CCTV solutions built for real-time monitoring, centralized control, and scalable security operations." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







