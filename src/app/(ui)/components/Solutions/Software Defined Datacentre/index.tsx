import { getData } from "@/lib/getData";
import { Overviews } from "../../Shared Component/Overviews";
import Overview from "@/models/admin-model/Services/Overview";
import UseCase from "@/models/admin-model/Solutions/UseCase";

export const SoftwareDefinedDataCentrePage = async () => {

    const filter = "Software Defined Data Centre";

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
                    Software-Driven{" "}<span className="text-secondary">Infrastructure Solutions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Software-defined infrastructure designed to deliver flexibility, scalability, and simplified datacentre management.
                </p>
            </div>
            <Overviews serviceData={overviewData} />
        </div>
    );
};







