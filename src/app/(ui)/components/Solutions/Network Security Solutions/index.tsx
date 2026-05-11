import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const NetworkSecuritySolutionsPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Next-Generation{" "}<span className="text-secondary">Network Security</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Advanced network security solutions designed to defend your infrastructure from evolving cyber threats.
                </p>
            </div>
        </div>
    );
};







