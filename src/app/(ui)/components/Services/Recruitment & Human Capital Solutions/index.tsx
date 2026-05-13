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

export const RecruitmentAndHumanCapitalSolutionsPage = async () => {

    const filter = "Recruitment & Human Capital Solutions";

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
                    Strategic Recruitment{" "}<span className="text-secondary">& Workforce Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Comprehensive talent acquisition and deployment services designed to support enterprise and government IT operations.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Workforce Solutions @ Built for Scale"
                description="From sourcing top talent to managing large-scale deployments, we deliver reliable human @ capital solutions for mission-critical operations."
            />

            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Recruitment & Staffing @ Done Right"
                description="We combine industry expertise, rigorous screening, and scalable workforce management to @ build high-performing teams for critical operations."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Scalable Workforce @ Solutions, Delivered"
                description="Our services combine recruitment, deployment, training, and workforce management into @ efficient human capital strategies."
            />

            <ContactCta title="Build the Right Team at the Right Scale" description="We provide end-to-end workforce solutions that help organizations scale efficiently while maintaining productivity and operational continuity." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







