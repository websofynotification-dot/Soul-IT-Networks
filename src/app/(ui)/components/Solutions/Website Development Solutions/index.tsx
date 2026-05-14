import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";

export const WebsiteDevelopmentSolutionsPage = async () => {

    const filter = "Website Development Solutions";

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
                    Digital Experiences{" "}<span className="text-secondary">That Deliver</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From corporate websites to government portals and e-commerce platforms, we build secure and high-performing web solutions.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
        </div>
    );
};







