import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const BusinessContinuityAndDrPage = async () => {

    const filter = "Business Continuity & DR";

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
                    Resilient Recovery &{" "}<span className="text-secondary">Continuity Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Disaster recovery and continuity frameworks designed to ensure availability, resilience, and operational stability.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Business Continuity That @ Keeps You Running"
                description="Our BC/DR services help organizations maintain uptime, secure critical workloads, @ and recover quickly from unexpected incidents."
            />
            <ContactCta title="Improve Recovery Readiness" description="Prepare your organization for disruptions with tested and reliable disaster recovery solutions." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







