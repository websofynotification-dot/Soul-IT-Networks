import { whyChooseUsCardsIcons } from "@/app/api/data";
import { cardProps } from "@/types/cardContext";
import { PreLoader } from "../../Common/PreLoader";

export const WhyChooseUsUser: React.FC<cardProps> = ({ cardData }) => {

    return (
        <section className="relative bg-gray-50 overflow-hidden">
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Why Choose Us —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Delivering Real Results,{" "}<span className="text-secondary">Beyond Promises</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Every engagement with SPIT is built to deliver measurable outcomes—<br />
                        lower costs, higher uptime, and stronger security.
                    </p>
                </div>
                {
                    cardData?.length === 0 ? <PreLoader /> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cardData?.map((card, index) => (
                                <div
                                    key={card._id}
                                    className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="bg-primary h-20 flex items-center justify-center" />
                                    <div className="relative flex justify-center">
                                        <div className="absolute -top-8 w-16 h-16 bg-white text-primary rounded-full shadow-md flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110">
                                            {whyChooseUsCardsIcons[index % whyChooseUsCardsIcons.length]}
                                        </div>
                                    </div>
                                    <div className="pt-12 pb-6 px-6 text-center">
                                        <h3 className="font-semibold text-20 text-MidnightNavyText">
                                            {card.title}
                                        </h3>
                                        <p className="text-15 text-justify text-SlateBlueText mt-4 h-20">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                }

            </div>
        </section>
    );
};



