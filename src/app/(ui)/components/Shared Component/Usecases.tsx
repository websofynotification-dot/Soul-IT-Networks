import { serviceProps } from "@/types/serviceContext";
import { TbTargetArrow } from "react-icons/tb";
import { PreLoader } from "../Common/PreLoader";

export const Usecases: React.FC<serviceProps & { title: string, subtitle: string, description: string }> = ({ serviceData, title, subtitle, description }) => {

    const [subtitle1, subtitle2] = subtitle.split("@");
    const [desc1, desc2] = description.split("@");

    return (
        <section className="bg-gray-50 overflow-hidden">
            <div className="container">

                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— {title} —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        {subtitle1}{" "}<span className="text-secondary">{subtitle2}</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        {desc1} <br /> {desc2}
                    </p>
                </div>

                <div >
                    {
                        serviceData?.length === 0 ? <PreLoader /> :
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                                {serviceData[0].useCaseStep?.map((item: string, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 200}
                                            data-aos-duration="1200"
                                            className="group relative flex justify-center"
                                        >
                                            <div
                                                className="relative z-10 overflow-hidden rounded-3xl border
                                                 border-gray-100 bg-white backdrop-blur-sm p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.16)] group-hover:border-primary/20"
                                            >

                                                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-50 group-hover:w-full"
                                                />

                                                <div className="relative flex flex-col items-center justify-center gap-4 text-center">
                                                    <div
                                                        className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl"
                                                    >

                                                        <div className="absolute inset-0 rounded-2xl border border-primary/20 scale-100 transition-all duration-500 group-hover:scale-125 group-hover:opacity-0"
                                                        />

                                                        <TbTargetArrow size={28}
                                                            className="text-primary transition-all duration-500 group-hover:text-secondary" />
                                                    </div>

                                                    <h3 className="text-base md:text-lg font-semibold text-MidnightNavyText transition-all duration-500 group-hover:text-primary">
                                                        {item}
                                                    </h3>

                                                    <div className="h-[2px] w-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-16" />
                                                </div>

                                                <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                    }
                </div>
            </div>
        </section>
    );
}
