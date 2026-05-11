import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const RemoteCcTvMonitoringPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    24/7 Remote{" "}<span className="text-secondary">Surveillance Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                   Comprehensive CCTV monitoring solutions delivering continuous oversight, rapid incident detection, and enhanced asset protection.
                </p>
            </div>
        </div>
    );
};







