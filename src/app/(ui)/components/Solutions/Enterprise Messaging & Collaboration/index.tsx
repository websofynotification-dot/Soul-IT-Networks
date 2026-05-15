import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";


export const EnterpriseMessagingAndCollaborationPage = async () => {

    const filter = "Enterprise Messaging & Collaboration";

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
                    Smarter Communication{" "}<span className="text-secondary">for Modern Teams</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Unified messaging and collaboration platforms built to improve connectivity, teamwork, and efficiency.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Smarter Communication @ for Modern Workforces"
                description="From enterprise email to video conferencing and document sharing, discover how organizations improve @ collaboration and operational efficiency with integrated communication tools."
            />
            <ContactCta title="Upgrade Your Collaboration Experience" description="Build a connected digital workplace with enterprise-grade communication tools." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







