import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const AdvancedSecuritySolutionsPage = async () => {

    const filter = "Advanced Security Solutions";

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
                    Security Built for{" "}<span className="text-secondary">Modern Threats</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Advanced cybersecurity architecture that safeguards your systems, data, and operations against emerging risks.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Cybersecurity That Stays @ Ahead of Threats"
                description="Discover how our advanced security services help organizations defend against @ sophisticated attacks and minimize business disruption."
            />
            <ContactCta title="Protect Your Business Today" description="Secure your organization with advanced monitoring, threat prevention, and incident response capabilities." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







