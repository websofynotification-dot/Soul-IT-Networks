import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const CampusWideNetworkingSolutionsPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Seamless Connectivity{" "}<span className="text-secondary">Across Your Campus</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Reliable networking infrastructure designed to deliver secure, high-performance connectivity at scale.
                </p>
            </div>
        </div>
    );
};







