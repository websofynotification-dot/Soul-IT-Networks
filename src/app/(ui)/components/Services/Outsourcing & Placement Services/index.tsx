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


export const OutsourcingAndPlacementServicesPage = async () => {

    const filter = "Outsourcing & Placement Services";
    
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
                    Workforce Solutions{" "}<span className="text-secondary">for Modern Businesses</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Helping organizations build high-performing IT teams through trusted staffing and outsourcing services.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Trusted IT @ Staffing Expertise"
                description="Backed by a strong talent pool and proven recruitment processes, we help organizations deploy skilled @ IT professionals quickly and efficiently."
            />

            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="End-to-End IT @ Staffing Delivery"
                description="Integrating recruitment, technical evaluation, onboarding, and workforce management into @ scalable staffing solutions."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Workforce Solutions @ That Drive Results"
                description="From contract staffing to permanent recruitment, we provide qualified IT professionals who support @ business continuity and long-term growth."
            />

            <ContactCta title="Scale Your IT Workforce with Confidence" description="From short-term projects to enterprise staffing needs, we provide qualified IT talent quickly, efficiently, and at scale." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>


    );
};







