import { cardProps } from "@/types/cardContext";
import Image from "next/image";
import { PreLoader } from "../../Common/PreLoader";

export const CertificationCard: React.FC<cardProps> = ({ cardData }) => {

    return (
        <section className="relative overflow-hidden">
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Our Certifications —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Certifications That{" "}<span className="text-secondary">Define Excellence</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Backed by ISO/IEC certifications, we adhere to rigorous global standards<br />
                        across quality, security, and operational performance.
                    </p>
                </div>
                {
                    cardData?.length === 0 ? <PreLoader /> :
                        <div className="overflow-hidden py-5" data-aos="fade-up">
                            <div className="group flex w-max animate-scroll gap-6 hover:[animation-play-state:paused]">

                                {[...cardData, ...cardData,].map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                        data-aos-once="true"
                                        className="relative min-w-[220px] bg-white rounded-xl shadow-md p-5 text-center cursor-pointer transition hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <div className="relative w-20 h-20 mx-auto">
                                            <Image
                                                src={item.image!}
                                                alt={item.title!}
                                                fill
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                                sizes="64px"
                                                priority={index < 4}
                                            />
                                        </div>
                                        <h3 className="mt-3 font-semibold text-MidnightNavyText text-sm">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-SlateBlueText">{item.description}</p>
                                    </div>
                                ))}

                                {[...cardData, ...cardData,].map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                        data-aos-once="true"
                                        className="relative min-w-[220px] bg-white rounded-xl shadow-md p-5 text-center cursor-pointer transition hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <div className="relative w-20 h-20 mx-auto">
                                            <Image
                                                src={item.image!}
                                                alt={item.title!}
                                                fill
                                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                                                sizes="64px"
                                                priority={index < 4}
                                            />
                                        </div>
                                        <h3 className="mt-3 font-semibold text-MidnightNavyText text-sm">
                                            {item.title}
                                        </h3>

                                        <p className="text-xs text-SlateBlueText">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                }

            </div>


        </section>
    )
}