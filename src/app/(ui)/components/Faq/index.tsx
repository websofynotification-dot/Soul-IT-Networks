import { getData } from "@/lib/getData";
import { FAQSection } from "./FrequentlyQA"
import { SupportChat } from "./SupportChat"
import Faq from "@/models/admin-model/Faq";


export const Faqs = async () => {
    const data = await getData(Faq);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-primary">
                    Frequently{" "}<span className="text-MidnightNavyText">Asked Questions</span>
                </h1>
                <p className="mt-5 sm:text-19 text-MidnightNavyText sm:text-center text-justify m-auto">
                    Got a Question? We are here to answer
                </p>
            </div>
            <FAQSection faqs={data} />
            <SupportChat />
        </div>
    )
}
