import { MdOutlineArrowRightAlt } from "react-icons/md";
import { projectsIcons } from "@/app/api/data";
import { PreLoader } from "../../Common/PreLoader";
import { projectProps } from "@/types/projectContext";

export const FlagshipProjectCards: React.FC<projectProps> = ({ projectData }) => {
    return (
        <section>
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Flagship Projects —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        From Concept to{" "}<span className="text-secondary">Nationwide Impact</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Not just case studies — these are live systems delivering<br />
                        essential services to millions across India.
                    </p>
                </div>
                {
                    projectData?.length === 0 ? <PreLoader /> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 sm:gap-6">
                            {
                                projectData.slice(0, 4)?.map((item, index) => (
                                    <div
                                        key={item._id}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 border border-secondary hover:border-transparent"
                                    >
                                        <div className={`relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full  bg-primary/10 group-hover:scale-110 transition`}>
                                            <div className="text-2xl text-primary sm:text-3xl">
                                                {projectsIcons[index % projectsIcons.length]}
                                            </div>
                                            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition"></div>
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="font-semibold text-20 text-MidnightNavyText   group-hover:text-primary transition">
                                                {item.title}
                                            </h3>
                                            <p className="text-15 text-SlateBlueText text-justify mt-1 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="mt-3 w-10 h-[2px] bg-primary mx-auto sm:mx-0 group-hover:w-16 transition-all" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
                <div className="flex items-center justify-center mt-10">
                    <button className="px-6 flex py-3 justify-center items-center gap-2 text-primary rounded-md font-semibold border border-secondary transition-all duration-300 hover:bg-primary hover:text-white">
                        View All Projects <MdOutlineArrowRightAlt size={25} />
                    </button>
                </div>
            </div>
        </section>
    )
}

