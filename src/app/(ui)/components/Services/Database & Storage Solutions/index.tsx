import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const DatabaseAndStorageSolutionsPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Reliable Storage.{" "}<span className="text-secondary">Smarter Data Management.</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Scalable database, storage, and backup solutions built to protect critical data and support business growth.
                </p>
            </div>
        </div>
    );
};







