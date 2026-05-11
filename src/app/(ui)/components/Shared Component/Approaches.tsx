import { serviceProps } from "@/types/serviceContext";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { PreLoader } from "../Common/PreLoader";

export const Approaches: React.FC<serviceProps & { title: string, subtitle: string, description: string }> = ({ serviceData, title, subtitle, description }) => {

    const [subtitle1, subtitle2] = subtitle.split("@");
    const [desc1, desc2] = description.split("@");

    return (
        <section>
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


                <div>
                    {
                        serviceData?.length === 0 ? <PreLoader /> :

                            <div className="space-y-6">
                                {serviceData?.map((item, index) => (
                                    <div
                                        key={item._id}
                                        data-aos="fade-right"
                                        data-aos-delay={index * 120}
                                        className="group relative"
                                    >

                                        {/* MAIN CARD */}
                                        <div className={`relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl`}
                                        >

                                            {/* WAVE LEFT SHAPE */}
                                            <div className="absolute left-0 top-0 h-full w-20 overflow-hidden">
                                                {/* TOP CURVE */}
                                                <div className="-top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-sm"
                                                />

                                                {/* BOTTOM CURVE */}
                                                <div
                                                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/20 rounded-full blur-sm"
                                                />

                                                {/* WHITE WAVE */}
                                                <div
                                                    className=" absolute left-0 top-1/2 -translate-y-1/2 w-20 h-40 bg-white/10 rounded-r-full"
                                                />
                                            </div>

                                            {/* CONTENT */}
                                            <div
                                                className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-5 px-6 py-3"
                                            >

                                                {/* NUMBER CIRCLE */}
                                                <div
                                                    className="flex-shrink w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-lg font-semibold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-white/10 backdrop-blur-sm"
                                                >
                                                    <MdOutlineIntegrationInstructions />
                                                </div>

                                                {/* TEXT */}
                                                <div className="flex-1">

                                                    <h3 className="text-white text-lg font-semibold transition-all duration-500 group-hover:tracking-wide"
                                                    >
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* SHINE EFFECT */}
                                            <div
                                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:translate-x-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>


            </div>
        </section>
    )
}


