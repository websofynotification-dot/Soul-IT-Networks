"use client"
import { PreLoader } from "../Common/PreLoader";
import { sectorProps } from "@/types/sectorContext";
import { TbArrowLoopRight2 } from "react-icons/tb";
import { sectorIcons } from "@/app/api/data";
import { useState } from "react";
import Pagination from "@/app/admin/components/common/Pagination";


export const ClientSector: React.FC<sectorProps> = ({ sectorData }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const totalPages = Math.ceil(sectorData.length / recordsPerPage);

  const currentData = sectorData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
          <h3 className="text-primary uppercase">— Drives Us Forward —</h3>
          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
            One Standard of Trust.{" "}<span className="text-secondary">Across Every Sector</span>
          </h2>
          <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
            From government and defence to healthcare, education, and enterprise—<br />
            our work earns trust across diverse domains.
          </p>
        </div>

        {
          currentData?.length === 0 ? <PreLoader /> :
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {currentData?.map((item, index) => (
                <div
                  key={item._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="group relative flex justify-center"
                >
                  <div className="relative bg-white rounded-2xl shadow-md p-6 pt-14 text-center transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 w-full border border-secondary">

                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-t-xl font-semibold text-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-secondary">
                      {index <= 9 ? `0${index + 1}` : index + 1}
                    </div>

                    <div className="absolute top-5 left-1/2 -translate-x-1/2  w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-primary transition-all duration-300 group-hover:border-t-secondary" />

                    <div className="flex justify-center">
                      <div
                        className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white"
                      >
                        {sectorIcons[index % sectorIcons.length]}
                      </div>
                    </div>

                    <h3 className="font-semibold text-20 mt-6 text-MidnightNavyText transition-all duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <div className="mt-4">
                      {item.description?.map((secPt, ind) => (
                        <div key={ind} className="flex gap-4 items-center mb-2 transition-all duration-300 group-hover:translate-x-1">

                          <TbArrowLoopRight2
                            size={18}
                            className="text-primary transition-all duration-300 group-hover:text-secondary group-hover:rotate-90"
                          />
                          <p className="text-15 text-SlateBlueText text-justify leading-relaxed">
                            {secPt}
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
