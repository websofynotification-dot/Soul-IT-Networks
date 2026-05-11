"use client"
import { cardProps } from "@/types/cardContext";
import Image from "next/image";
import { useState } from "react";
import { PreLoader } from "../Common/PreLoader";
import Pagination from "@/app/admin/components/common/Pagination";

export const NationalPartner: React.FC<cardProps> = ({ cardData }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const totalPages = Math.ceil(cardData.length / recordsPerPage);

  const currentData = cardData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="container">
      {
        currentData?.length === 0 ? <PreLoader /> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {currentData?.map((item, index) => (
              <div
                key={item._id}
                className="relative flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative z-10">
                  <div className={`w-20 h-20 border border-secondary rounded-full flex items-center justify-center`}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={item.image!}
                        alt={item.title!}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, 56px"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-px h-6 bg-secondary"></div>
                <div className="relative bg-white border border-b-4  border-secondary rounded-2xl shadow-md px-4 py-6 text-center w-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">

                  <h3 className="font-semibold text-lg  mb-2 text-MidnightNavyText">
                    {item.title}
                  </h3>
                  <p className="text-SlateBlueText leading-relaxed text-justify">
                    {item.description}
                  </p>
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
  );
}