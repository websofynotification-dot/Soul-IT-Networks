import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";
import { Partners } from "./Partners";

export const PartnersPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Partnerships That{" "}<span className="text-secondary">Power Performance</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    We work with industry-leading technology partners to build scalable, future-ready solutions.
                </p>
            </div>
            <Partners cardData={partnerData}/>
        </div>
    );
};







