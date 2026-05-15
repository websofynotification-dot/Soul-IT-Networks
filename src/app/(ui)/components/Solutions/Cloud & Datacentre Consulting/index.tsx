import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";


export const CloudAndDataCentreConsultingPage = async () => {

    const filter = "Cloud & Data Centre Consulting";

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
                    Smarter Cloud &{" "}<span className="text-secondary">Infrastructure Strategy</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Optimize your cloud and datacentre environment for scalability, reliability, and long-term operational efficiency.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Infrastructure Consulting @ That Drives Transformation"
                description="Our cloud and datacentre consulting services help organizations improve agility, reduce @ complexity, and achieve long-term operational efficiency."
            />
            <ContactCta title="Accelerate Digital Transformation" description="Develop a future-ready cloud and datacentre strategy with our infrastructure experts." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







