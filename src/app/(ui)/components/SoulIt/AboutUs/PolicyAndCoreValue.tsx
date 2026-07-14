import { FaBriefcase, FaCopy, FaFileAlt, FaPowerOff, FaRegHandPointRight, } from "react-icons/fa";

export const PolicyAndCoreValue: React.FC<{ data: { _id: string, title: string, desc: string[] }[] }> = ({ data }) => {
    const icons = [<FaPowerOff />, <FaBriefcase />, <FaFileAlt />, <FaCopy />];

    return (
        <section className="bg-primary/5">
            <div className="container">
                <div className="md:pb-16 text-center pb-8" data-aos="fade-up">
                    <h2 className="md:text-4xl text-2xl text-center font-bold uppercase text-primary" data-aos="fade-up">Our
                        Policy &{" "}<span className="text-MidnightNavyText">Core Values</span>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 justify-items-center">
                    {data?.map((item, index) => (
                        <div key={item._id} data-aos="fade-up" data-aos-delay={index * 150} className="relative">
                            <div className="absolute -top-8 left-0 flex items-center">
                                <div className={`w-16 h-16 rounded-full  bg-primary flex items-center justify-center text-white
                        text-2xl shadow-lg`}>
                                    {icons[index % icons.length]}
                                </div>
                                <div className={`bg-primary  text-white px-6 py-2 rounded-r-full font-medium shadow`}>
                                    {item.title}
                                </div>
                            </div>
                            <div className="bg-white h-52 rounded-2xl shadow-xl pt-16 pb-8 px-6 text-center">
                                <ul className="space-y-2 mb-5 ">
                                    {item.desc?.map((p, i) => (
                                        <li key={i} className="flex   gap-2 items-center">
                                            <span>
                                                <FaRegHandPointRight size={15} className="text-primary" />
                                            </span>
                                            <p className="text-12 text-justify text-SlateBlueText">{p}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}