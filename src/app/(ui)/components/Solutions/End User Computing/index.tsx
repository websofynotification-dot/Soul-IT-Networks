import { getData } from "@/lib/getData";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { Overviews } from "../../Shared Component/Overviews";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const EndUserComputingPage = async () => {

    const filter = "End User Computing";

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
                    Smarter Computing{" "}<span className="text-secondary">for Every User</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From desktops to workstations, we deliver secure, high-performance computing environments built for productivity.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Workplace Technology @ That Works Everywhere"
                description="See how organizations improve workforce agility and simplify IT operations with modern @ workspace technologies and virtual computing environments."
            />
            <ContactCta title="Get a Customized EUC Solution" description="From VDI to endpoint management, we deliver tailored solutions that improve productivity and simplify IT operations." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







