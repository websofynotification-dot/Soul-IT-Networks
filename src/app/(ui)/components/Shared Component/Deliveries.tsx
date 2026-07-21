import { serviceProps } from "@/types/serviceContext";
import { MdDeliveryDining } from "react-icons/md";
import { PreLoader } from "../Common/PreLoader";

export const Deliveries: React.FC<serviceProps & { title: string, subtitle: string, description: string }> = ({ serviceData, title, subtitle, description }) => {

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
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                {serviceData[0].keySteps!.map((item, index) => {

                                    return (
                                        <div key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 120}
                                            className="group relative">
                                            <div
                                                className={`relative rounded-2xl border border-secondary bg-white overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`} >
                                                <div className={`absolute -top-6 -left-2 w-10 h-10 rounded-full border-2 border-secondary bg-white shadow-xl flex items-center justify-center z-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                                                >
                                                    <div className={` text-primary transition-all duration-500 group-hover:scale-125`}
                                                    >
                                                        <MdDeliveryDining size={20} />
                                                    </div>
                                                </div>

                                                <div className="flex justify-center items-center">

                                                    <h3 className={`my-3 p-3 rounded-xl text-MidnightNavyText font-semibold shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                                                    >
                                                        {item}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                    }
                </div>

            </div>
        </section>
    )
}


