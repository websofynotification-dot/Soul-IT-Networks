import { cardProps } from "@/types/cardContext";
import React, { ReactNode } from "react";
import { FaRegFileArchive } from "react-icons/fa";


import { PreLoader } from "../../Common/PreLoader";

export const CompanyCredentials: React.FC<cardProps> = ({ cardData }) => {

    return (
        <section className="bg-gray-50">
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Statutory Information —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Company{" "}<span className="text-secondary">Credentials</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Official registrations, compliance records, and statutory details of<br />
                        Shaurya Prabhat Infratech.
                    </p>
                </div>
                {
                    cardData?.length === 0 ? <PreLoader /> :
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {cardData?.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 120}
                                    className="group flex items-center bg-white justify-between gap-6 overflow-hidden rounded-2xl shadow-lg border border-secondary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-MidnightNavyText"
                                >
                                    <div className="relative flex items-center text-SlateBlueText w-full transition-all duration-300">
                                        <div className="text-white px-3 bg-primary py-3 clip-arrow-left transition-all duration-300 group-hover:scale-110 group-hover:brightness-110">
                                            <FaRegFileArchive />
                                        </div>
                                        <div className="px-3 py-3 space-y-1 transition-all duration-300 group-hover:translate-x-1">
                                            <h3 className="font-semibold text-MidnightNavyText group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="text-12 text-justify text-SlateBlueText">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                }
            </div>
        </section>
    )
}
