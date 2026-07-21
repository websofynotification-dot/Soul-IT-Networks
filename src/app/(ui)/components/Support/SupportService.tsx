"use client"
import { PreLoader } from "../Common/PreLoader";
import { TbArrowRightCircle } from "react-icons/tb";
import { supportServiceIcons } from "@/app/api/data";
import { useState } from "react";
import Image from "next/image";
import Pagination from "@/app/admin/components/common/Pagination";
import { supportServiceProps } from "@/types/supportServiceContext";

export const SupportServices: React.FC<supportServiceProps> = ({ supportServiceData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const totalPages = Math.ceil(supportServiceData.length / recordsPerPage);

  const currentData = supportServiceData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
          <h3 className="text-primary uppercase">— Support Services —</h3>
          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
            Support Across{" "}<span className="text-secondary">Every Layer</span>
          </h2>
          <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
            Ensuring seamless performance with complete post-sales <br />
            coverage of your IT infrastructure.
          </p>
        </div>
        {
          currentData?.length === 0 ? <PreLoader /> :
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {currentData?.map((item, index) => (
                <div
                  key={item._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="relative flex flex-col items-center group"
                >
                  <div className="w-16 h-16   sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">

                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full text-3xl overflow-hidden bg-primary text-white flex items-center justify-center transition-all duration-300 group-hover:scale-100">
                      {supportServiceIcons[index % supportServiceIcons.length]}
                    </div>
                  </div>

                  <div
                    className="bg-white rounded-2xl shadow-md p-6 text-center mt-[-30px] transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-[1.02] border border-secondary">

                    <h3 className="font-semibold text-20 mt-6 text-MidnightNavyText transition-all duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-15 text-SlateBlueText mt-4 min-h-32 text-justify leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-2">
                      {item.supportStep?.map((step, ind) => (
                        <div
                          key={ind}
                          className="flex gap-4 items-center mb-2 transition-all duration-300 group-hover:translate-x-1"
                        >
                          <TbArrowRightCircle
                            size={20}
                            className="text-primary transition-all duration-300group-hover:text-secondary group-hover:translate-x-1"
                          />
                          <p className="text-15 text-SlateBlueText text-justify leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

            </div>
        }

        {
          totalPages > 1 &&
          <div className={`${totalPages > 1 ? "mt-12" : "mt-0"}`}>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        }
      </div>
    </section>
  )
}


