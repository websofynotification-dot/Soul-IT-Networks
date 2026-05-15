import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const SoftwareDefinedDataCentrePage = async () => {

    const filter = "Software Defined Data Centre";

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
                    Software-Driven{" "}<span className="text-secondary">Infrastructure Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Software-defined infrastructure designed to deliver flexibility, scalability, and simplified datacentre management.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Infrastructure Transformation @ Through Automation"
                description="Our software-defined datacentre solutions help businesses reduce complexity, improve @ flexibility, and accelerate IT modernization."
            />
            <ContactCta title="Build a Software-Defined Infrastructure" description="Deploy flexible and intelligent datacentre technologies designed for future-ready operations." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







