import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const CCTVInstallationPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Surveillance That{" "}<span className="text-secondary">Never Sleeps</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From planning to monitoring, we deliver reliable CCTV solutions for critical environments and large-scale deployments.
                </p>
            </div>
        </div>
    );
};







