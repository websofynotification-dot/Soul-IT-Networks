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


export const RecruitmentAndHumanCapitalSolutionsPage = async () => {

    const oveviewData = await getData(Overview);
    const whyChooseData = await getData(WhyChooseSoulIt);
    const approachData = await getData(Approach);
    const deliveryData = await getData(Delivery);

    const filterOverviewData = oveviewData.filter((item: service) => item.pageName === "Recruitment & Human Capital Solutions");
    const filterWhyChooseData = whyChooseData.filter((item: service) => item.pageName === "Recruitment & Human Capital Solutions");
    const filterApproachData = approachData.filter((item: service) => item.pageName === "Recruitment & Human Capital Solutions");
    const filterDeliveryData = deliveryData.filter((item: service) => item.pageName === "Recruitment & Human Capital Solutions");

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
            <Overviews serviceData={filterOverviewData} />
            <WhyChoosSoulIt
                serviceData={filterWhyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Trusted IT @ Staffing Expertise"
                description="Backed by a strong talent pool and proven recruitment processes, we help organizations deploy skilled @ IT professionals quickly and efficiently."
            />

            <Approaches
                serviceData={filterApproachData}
                title="Our Approach"
                subtitle="End-to-End IT @ Staffing Delivery"
                description="Integrating recruitment, technical evaluation, onboarding, and workforce management into @ scalable staffing solutions."
            />

            <Deliveries
                serviceData={filterDeliveryData}
                title="We Deliver"
                subtitle="Workforce Solutions @ That Drive Results"
                description="From contract staffing to permanent recruitment, we provide qualified IT professionals who support @ business continuity and long-term growth."
            />

            <ContactCta title="Build the Right Team at the Right Scale" description="We provide end-to-end workforce solutions that help organizations scale efficiently while maintaining productivity and operational continuity." nevigateUrl="contact-us" />
        </div>
    );
};







