
import { foundationIcons } from "@/app/api/data";
import { foundation, foundationProps } from "@/types/foundationContext";;
import { PreLoader } from "../Common/PreLoader";

import { RiExpandRightFill } from "react-icons/ri";

export const MissionVision: React.FC<foundationProps> = ({ foundationData }) => {

    return (
        <section>
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Drives Us Forward —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Built on Purpose.{" "}<span className="text-secondary">Driven by Direction</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        From vision to execution—<br />
                        what drives us, how we operate, and where we’re headed next.
                    </p>
                </div>
                {
                    foundationData?.length === 0 ? <PreLoader /> :
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {foundationData?.slice(0, 3).map((item: foundation, index: number) => (
                                    <Card item={item} index={index} key={item._id} />
                                ))}
                            </div>
                            {foundationData?.slice(3).length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                    {foundationData?.slice(3).map((item: foundation, index) => (
                                        <Card item={item} index={index + 3} key={item._id} />
                                    ))}
                                </div>
                            )}
                        </>
                }
            </div>
        </section>

    );
}



const Card = ({ item, index }: { item: foundation, index: number }) => (
    <div
        key={item._id}
        data-aos="fade-up"
        data-aos-delay={index * 150}
        className="group relative bg-white rounded-2xl shadow-lg p-6 pt-14 border border-secondary overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
    >
        <div
            className="absolute top-0 left-0 w-full h-12 bg-primary gap-4 text-white flex items-center justify-center font-semibold tracking-wide transition-all duration-300 group-hover:brightness-110"
            style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
            }}
        >
            <h3 className="font-semibold text-20 text-white">
                {item.title}
            </h3>

            <div className="text-2xl text-white transition-transform duration-300 group-hover:scale-110">
                {foundationIcons[index % foundationIcons.length]}
            </div>
        </div>
        <div className="flex items-start justify-between gap-4 mt-5 transition-all duration-300 group-hover:translate-x-1">
            <div>
                {item.description && (
                    <p className="text-15 text-SlateBlueText h-40 text-justify mt-1 leading-relaxed">
                        {item.description}
                    </p>
                )}
                {item.foundationStep &&
                    !item.description &&
                    item.foundationStep?.map((foun, ind) => (
                        <div key={ind} className="flex gap-4 items-center mb-2">
                            <div>
                                <RiExpandRightFill size={20} className="text-primary" />
                            </div>
                            <p className="text-15 text-SlateBlueText text-justify leading-relaxed">
                                {foun}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    </div>
);





