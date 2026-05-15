import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const EnterpriseSoftwareServicesPage = async () => {

    const filter = "Enterprise Software Services";

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
                    Integrated Enterprise{" "}<span className="text-secondary">Software Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Delivering scalable business applications tailored to improve productivity and support digital transformation.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Enterprise Software @ Built for Performance"
                description="Discover how our enterprise software expertise helps businesses improve agility, @ streamline operations, and accelerate digital transformation."
            />
            <ContactCta title="upgrade Your Enterprise Applications" description="Build a more connected and efficient organization with modern enterprise software platforms." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







