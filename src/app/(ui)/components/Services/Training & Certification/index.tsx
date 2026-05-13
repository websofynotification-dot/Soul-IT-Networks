import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { Overviews } from "../../Shared Component/Overviews";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";


export const TrainingAndCertificationPage = async () => {

    const filter = "Training & Certification";

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
                    Empowering Talent{" "}<span className="text-secondary">Through Technology</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Helping students and organizations grow with hands-on IT training and certification programs.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Training That Builds @ Real-World IT Skills"
                description="Our expert trainers, advanced labs, and practical learning approach help professionals gain @ job-ready technical expertise and certifications."
            />

            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Training Designed for @ Real-World Success"
                description="We combine expert instructors, hands-on labs, and industry-focused curriculum to create @ impactful learning experiences that deliver measurable results."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Delivering More @ Than IT Training"
                description="We equip professionals with real-world technical expertise, industry certifications, and @ practical skills that create measurable career and business impact."
            />

            <ContactCta title="Build a Future-Ready Workforce" description="Empower your teams with hands-on IT training and globally recognized certifications designed for evolving technology challenges." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







