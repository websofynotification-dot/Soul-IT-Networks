import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const WebsiteDevelopmentSolutionsPage = async () => {

    const partnerData = await getData(Partner);

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
        </div>
    );
};







