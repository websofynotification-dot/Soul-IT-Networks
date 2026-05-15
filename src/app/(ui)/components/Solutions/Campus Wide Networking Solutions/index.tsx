import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const CampusWideNetworkingSolutionsPage = async () => {

    const filter = "Campus Wide Networking Solutions";

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
                    Seamless Connectivity{" "}<span className="text-secondary">Across Your Campus</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Reliable networking infrastructure designed to deliver secure, high-performance connectivity at scale.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Smarter Campus Connectivity @ for Modern Organizations"
                description="From structured cabling to enterprise routing and switching, discover how organizations @ improve operational efficiency with robust campus networks."
            />
            <ContactCta title="Modernize Your Network Infrastructure" description="Create a resilient and future-ready campus network with expert deployment and management services." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







