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


export const WebsiteDevelopmentPage = async () => {

    const filter = "Website Development";

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
                    Websites Built{" "}<span className="text-secondary">for Performance</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Modern, scalable websites designed for businesses, government organizations, and digital commerce.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Websites Designed to @ Perform and Convert"
                description="We build modern digital experiences designed for speed, usability, search visibility, and @ seamless engagement across all devices."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Websites Built @ with Purpose"
                description="We combine creativity, technology, and performance optimization to deliver websites that are fast, @ scalable, and impactful."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Modern Web @ Solutions, Delivered"
                description="Our websites combine responsive design, SEO optimization, CMS integration, and scalable @ architecture for long-term digital success."
            />

            <ContactCta title="Build a Powerful Digital Presence" description="We design and develop modern websites that capture attention, enhance user experience, and deliver measurable results." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







