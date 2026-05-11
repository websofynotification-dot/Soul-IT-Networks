import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const RecruitmentAndHumanCapitalSolutionsPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Strategic Recruitment{" "}<span className="text-secondary">& Workforce Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Comprehensive talent acquisition and deployment services designed to support enterprise and government IT operations.
                </p>
            </div>
        </div>
    );
};







