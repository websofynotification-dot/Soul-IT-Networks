"use client";
import { useRouter } from "next/navigation";
import { serviceCardIcons } from "@/app/api/data";
import { PreLoader } from "../../Common/PreLoader";
import { cardProps } from "@/types/cardContext";

export const OurServices: React.FC<cardProps> = ({ cardData }) => {
    const router = useRouter();

    return (
        <section>
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Our Services —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        End-to-End IT Solutions,{" "}<span className="text-secondary">All Under One Roof</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Nine core capabilities. One partner you can rely on. <br />
                        We simplify IT complexity so you can stay focused on your mission.
                    </p>
                </div>
                {
                    cardData?.length == 0 ? <PreLoader /> :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {cardData?.map((card, index) => {
                                return (
                                    <div
                                        key={card._id}
                                        className="relative flex flex-col items-center"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 200}
                                    >
                                        <div
                                            className="relative bg-white rounded-2xl p-6 text-center border border-secondary transition-all duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] group"
                                        >
                                            <div className="text-3xl mb-2 flex justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                                                {serviceCardIcons[index % serviceCardIcons.length]}
                                            </div>
                                            <h3 className="font-semibold text-20 text-MidnightNavyText mt-6">
                                                {card.title}
                                            </h3>
                                            <p className="text-15 text-justify text-SlateBlueText mt-4 h-20">
                                                {card.description}
                                            </p>
                                            <button className="inline-block my-8 px-6 py-3 text-primary rounded-md font-semibold border border-primary/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white" onClick={() => router.push(`${card.buttonUrl}`)}>
                                                {card.buttonName}
                                            </button>
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-xl text-white font-bold bg-primary transition-all duration-300 group-hover:scale-110">
                                                {index < 10 ? `0${index + 1}` : `${index + 1}`}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                }
            </div>
        </section>
    );
}