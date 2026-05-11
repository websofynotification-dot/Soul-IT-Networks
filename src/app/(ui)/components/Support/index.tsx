import { getData } from "@/lib/getData";
import { ContactCta } from "../Cta For Connect/ContactCta";
import WhySpit from "@/models/admin-model/HomePage/WhySpit";
import Sector from "@/models/admin-model/Customer/Sector";
import WhoWeAre from "@/models/admin-model/AboutUs/WhoWeAre";
import { SupportAboutUs } from "./SupportAboutUs";
import { SupportServices } from "./SupportService";
import SupportService from "@/models/admin-model/support/SupportService";
import SupportAddOn from "@/models/admin-model/support/SupportAddOn";
import { SupportAddOns } from "./SupportAddOns";

export const SupportPage = async () => {
    const supportServiceData = await getData(SupportService);
    const supportAddOnData = await getData(SupportAddOn)
    const whoWeAreData = await getData(WhoWeAre);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Support That{" "}<span className="text-secondary">Stays With You</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From deployment to long-term operations, we ensure every device, application, and solution performs reliably.
                </p>
            </div>
            <SupportAboutUs cardData={whoWeAreData} />
            <SupportServices supportServiceData={supportServiceData} />
            <SupportAddOns supportServiceData={supportAddOnData} />
            <ContactCta style={true} title="Get Support That Works" description="From AMC to on-site and remote support, we ensure your deployment runs smoothly." buttonText="Request Support" nevigateUrl="contact-us" />
        </div>
    );
};







