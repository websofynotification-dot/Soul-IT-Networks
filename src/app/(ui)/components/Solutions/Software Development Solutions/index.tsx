import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const SoftwareDevelopmentSolutionsPage = async () => {

    const filter = "Software Development Solutions";

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
                    Enterprise Software{" "}<span className="text-secondary">Development Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    End-to-end software solutions focused on automation, performance optimization, and digital innovation.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Software Solutions @ That Improve Efficiency"
                description="Our software development services help organizations automate processes, @ improve collaboration, and optimize digital workflows."
            />
            <ContactCta title="Optimize Your Business Operations" description="Turn your business ideas into powerful software solutions with our development experts." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







