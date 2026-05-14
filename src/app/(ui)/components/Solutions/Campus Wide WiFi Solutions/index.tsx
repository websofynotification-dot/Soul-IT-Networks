import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";

export const CampusWideWiFiSolutionsPage = async () => {

    const filter = "Campus Wide WiFi Solutions";

    const [
        overviewData,
        usecaseData,
    ] = await Promise.all([
        getData(Overview, filter),
        getData(UseCase, filter)
    ]);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    WiFi Built for{" "}<span className="text-secondary">Modern Campuses</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Scalable wireless infrastructure delivering seamless roaming, secure access, and uninterrupted connectivity.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
        </div>
    );
};







