import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const CampusWideWiFiSolutionsPage = async () => {

    const filter = "Campus Wide WiFi Solutions";

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
                    WiFi Built for{" "}<span className="text-secondary">Modern Campuses</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Scalable wireless infrastructure delivering seamless roaming, secure access, and uninterrupted connectivity.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="WiFi Solutions That @ Keep Everyone Connected"
                description="Our campus WiFi solutions help organizations ensure stable coverage, seamless roaming, @ and high-capacity connectivity across large environments."
            />
            <ContactCta title="Enhance Wireless Connectivity" description="Build a fast, secure, and centrally managed WiFi ecosystem for your campus." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







