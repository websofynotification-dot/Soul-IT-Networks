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


export const OtherSoftwareServicesPage = async () => {

    const filter = "Other Software Services";

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
                    Software That Powers{" "}<span className="text-secondary">Business Operations</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    We deploy and customize enterprise applications that help organizations operate smarter and scale faster.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Advanced Enterprise @ Application Services"
                description="Backed by leading technology partnerships and deep implementation expertise, we deploy scalable @ business applications tailored to organizational needs."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Our Approach to @ Enterprise Software Services"
                description="From planning and implementation to optimization and support, we deliver software solutions that @ improve operational efficiency and business performance."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More Than @ Software Platforms"
                description="We implement intelligent enterprise applications that improve productivity, automate workflows, @ and enable smarter business decisions."
            />

            <ContactCta title="Smarter Software for Better Business Operations" description="We help organizations deploy the right enterprise applications to automate workflows, enhance visibility, and drive productivity." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







