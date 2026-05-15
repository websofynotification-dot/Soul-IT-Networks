import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const NetworkSecuritySolutionsPage = async () => {

    const filter = "Network Security Solutions";

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
                    Next-Generation{" "}<span className="text-secondary">Network Security</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Advanced network security solutions designed to defend your infrastructure from evolving cyber threats.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Stronger Protection for @ Critical Networks"
                description="Our network security services help organizations secure critical infrastructure, @ improve compliance, and maintain uninterrupted business operations."
            />
            <ContactCta title="Strengthen Your Network Defenses" description="Build a secure and resilient network environment with intelligent threat prevention and monitoring solutions." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







