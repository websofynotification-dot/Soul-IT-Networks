import { getData } from "@/lib/getData";
import { ContactCta } from "../Cta For Connect/ContactCta";
import WhySpit from "@/models/admin-model/HomePage/WhySpit";
import { CustomersState } from "./CustomersState";
import { ClientSector } from "./ClientSector";
import Sector from "@/models/admin-model/Customer/Sector";

export const CustomersPage = async () => {
    const sectorData = await getData(Sector);
    const customerStateData = await getData(WhySpit)
     
    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Delivering Across{" "}<span className="text-secondary">Critical Sectors</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Serving government, defence, enterprise, and medical institutions with secure, reliable, and scalable IT solutions.
                </p>
            </div>
            <CustomersState cardData={customerStateData} />
            <ClientSector sectorData={sectorData}/>
            <ContactCta title="Join the Organisations That Trust Us" description="Enterprise-grade IT solutions powered by expertise, certifications, and a track record of reliable delivery." buttonText="Get Started" nevigateUrl="contact-us" />
        </div>
    );
};







