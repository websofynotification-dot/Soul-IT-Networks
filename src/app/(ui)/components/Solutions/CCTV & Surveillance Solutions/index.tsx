import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const CcTvAndSurveillanceSolutionsPage = async () => {

    const filter = "CCTV & Surveillance Solutions";

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
                    Advanced Video{" "}<span className="text-secondary">Surveillance Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Delivering intelligent CCTV systems for real-time monitoring, protection, and operational control.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Advanced Surveillance @ Built for Protection"
                description="Discover how enterprise-grade surveillance technologies help organizations @ safeguard assets and maintain operational control."
            />
            <ContactCta title="Protect Your Infrastructure Today" description="Deploy smart surveillance systems for complete security visibility and control." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







