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


export const SoftwareDevelopmentPage = async () => {

    const filter = "Software Development";

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
                    Software Built{" "}<span className="text-secondary">Around Your Business</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Tailored applications that streamline operations, improve efficiency, and support digital growth.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Enterprise Software @ Development Expertise"
                description="Using agile development, DevOps automation, and cloud-native technologies, we create applications @ designed for speed, scalability, and long-term reliability"

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Software Development @ Built for Results"
                description="We combine agile methodologies, modern technologies, and continuous collaboration to @ deliver high-quality software solutions faster and more efficiently."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Software"
                description="We build intelligent digital applications that streamline workflows, improve productivity, @ and accelerate innovation across organizations."
            />

            <ContactCta title="Software Built to Deliver Real Business Impact" description="Our developers create intelligent, scalable applications designed to solve complex challenges and support long-term success" buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







