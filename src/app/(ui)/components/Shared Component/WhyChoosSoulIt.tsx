import { serviceProps } from "@/types/serviceContext";
import { FaServicestack } from "react-icons/fa";
import { PreLoader } from "../Common/PreLoader";

export const WhyChoosSoulIt: React.FC<serviceProps & { title: string, subtitle: string, description: string }> = ({ serviceData, title, subtitle, description }) => {

    const [subtitle1, subtitle2] = subtitle.split("@");
    const [desc1, desc2] = description.split("@");

    return (
        <section className="bg-gray-50">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {serviceData.map((item, index) => (
                                    <div key={item._id} data-aos="zoom-in-up" data-aos-delay={index * 120} className="group relative">
                                        <div className={`relative bg-white border border-secondary rounded-2xl  p-5 pl-16 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl`}>

                                            <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <div
                                                    className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center border border-secondary bg-white text-primary shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-xl`}
                                                >
                                                    <div className="transition-all duration-500 group-hover:rotate-6">
                                                        <FaServicestack size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative z-10">
                                                <h3 className={`font-semibold text-MidnightNavyText transition-all duration-500 group-hover:tracking-wide`}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <div
                                                className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-l-md bg-secondary transition-all duration-500 group-hover:h-12`}
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
