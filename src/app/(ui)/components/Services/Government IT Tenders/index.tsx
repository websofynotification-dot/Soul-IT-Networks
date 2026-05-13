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


export const GovernmentItTendersPage = async () => {

    const filter = "Government IT Tenders";

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
                    Government Tender &{" "}<span className="text-secondary">Compliance Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Strategic support for state and central government IT tenders, covering documentation, compliance, bid management, and execution.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Government IT Projects @ Delivered with Precision"
                description="From tender participation to successful project delivery, we help organizations execute complex @ government IT initiatives with confidence and compliance."

            />
            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Our Government Tender @ Delivery Framework"
                description="A comprehensive methodology focused on compliance, bid quality, technical evaluation, project execution, @ and operational success."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than Government Projects"
                description="We manage government IT tenders with precision, ensuring timely execution, compliance, @ and scalable technology deployment."
            />

            <ContactCta title="Your Trusted Government IT Project Partner" description="From bid strategy to large-scale deployment, we deliver reliable government IT solutions backed by proven execution experience." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







