import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";
import { ContactCta } from "../../Cta For Connect/ContactCta";
import { Usecases } from "../../Shared Component/Usecases";

export const WebsiteDevelopmentSolutionsPage = async () => {

    const filter = "Website Development Solutions";

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
                    Digital Experiences{" "}<span className="text-secondary">That Deliver</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From corporate websites to government portals and e-commerce platforms, we build secure and high-performing web solutions.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
            <Usecases
                serviceData={usecaseData}
                title="Use Cases"
                subtitle="Websites That Drive @ Engagement & Results"
                description="Our website development services help organizations improve online engagement, @ streamline content management, and strengthen digital branding."
            />
            <ContactCta title="Launch a High-Performance Website" description="Deliver faster, smarter, and more engaging digital experiences for your users." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







