import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const OtherSoftwareServicesPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Software That Powers{" "}<span className="text-secondary">Business Operations</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    We deploy and customize enterprise applications that help organizations operate smarter and scale faster.
                </p>
            </div>
        </div>
    );
};







