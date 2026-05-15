import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const ProfessionalAndConsultingServicesPage = async () => {

    const filter = "Professional & Consulting Services";

    const [
        overviewData,
        usecaseData,
    ] = await Promise.all([
        getData(Overview, filter),
        getData(UseCase, filter)
    ]);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Strategic IT{" "}<span className="text-secondary">Services & Consulting</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Helping organizations design, deploy, and manage technology solutions with confidence and efficiency.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="IT Decisions Through @ Expert Consulting"
                description="From infrastructure planning to implementation and optimization, discover how our @ consulting expertise helps organizations modernize and scale efficiently."
            />
            <ContactCta title="Transform Your IT Strategy" description="Build scalable and future-ready IT environments with our professional consulting services." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







