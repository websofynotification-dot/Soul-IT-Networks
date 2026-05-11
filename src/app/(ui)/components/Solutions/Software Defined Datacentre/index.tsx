import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const SoftwareDefinedDataCentrePage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Software-Driven{" "}<span className="text-secondary">Infrastructure Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Software-defined infrastructure designed to deliver flexibility, scalability, and simplified datacentre management.
                </p>
            </div>
        </div>
    );
};







