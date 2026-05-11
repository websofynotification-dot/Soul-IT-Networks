import { getData } from "@/lib/getData";
import Partner from "@/models/admin-model/HomePage/Partner";


export const GovernmentItTendersPage = async () => {

    const partnerData = await getData(Partner);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Government Tender &{" "}<span className="text-secondary">Compliance Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Strategic support for state and central government IT tenders, covering documentation, compliance, bid management, and execution.
                </p>
            </div>
        </div>
    );
};







