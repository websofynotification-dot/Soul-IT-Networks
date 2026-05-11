"use client"
import Pagination from "@/app/admin/components/common/Pagination";
import { cardProps } from "@/types/cardContext";
import Image from "next/image";
import { useState } from "react";
import { PreLoader } from "../Common/PreLoader";

export const TechnologyPartner: React.FC<cardProps> = ({ cardData }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 16;
  const totalPages = Math.ceil(cardData.length / recordsPerPage);

  const currentData = cardData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div className="container">
      {
        currentData?.length === 0 ? <PreLoader /> :
          <div className="grid gap-6 md:grid-cols-4">
            {currentData?.map((item, index: number) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 150}
                className="group relative flex items-center"
              >
                <div className="relative z-10 w-20 h-20 border border-secondary rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className={`absolute inset-0 rounded-full  `}>

                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={item.image!}
                        alt={item.title!}
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 640px) 80px, 96px"
                        priority={index === 0}
                      />
                    </div>

                  </div>
                </div>
                <div className="relative flex-1 ml-[-20px] text-center">
                  <div className="flex items-center justify-center border border-secondary rounded-full shadow-md py-2 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                    <h3 className="font-semibold text-lg text-MidnightNavyText">
                      {item.title}
                    </h3>
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
  );
}