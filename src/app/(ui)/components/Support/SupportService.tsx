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
                  <div className="w-16 h-10 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">

                    <div className="relative w-8 h-8 sm:w-20 sm:h-20 rounded-full text-3xl overflow-hidden bg-primary text-white flex items-center justify-center transition-all duration-300 group-hover:scale-100">
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





const data = [
  {
    id: "01",
    title: "INFOGRAPHIC",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    color: "bg-teal-500",
    text: "text-teal-500",
    image: "/images/sample1.jpg",
  },
  {
    id: "02",
    title: "INFOGRAPHIC",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    color: "bg-green-500",
    text: "text-green-500",
    image: "/images/sample2.jpg",
  },
  {
    id: "03",
    title: "INFOGRAPHIC",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    color: "bg-orange-500",
    text: "text-orange-500",
    image: "/images/sample3.jpg",
  },
  {
    id: "04",
    title: "INFOGRAPHIC",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    color: "bg-red-500",
    text: "text-red-500",
    image: "/images/sample4.jpg",
  },
];

export default function TimelineCards() {


  return (
    <div className="container py-16 relative">

      {/* TIMELINE LINE */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="relative flex flex-col items-center group"
          >

            {/* TOP BADGE */}
            <div className={`w-16 h-10 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center relative z-10`}>

              {/* ICON / IMAGE */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 32px, 40px"
                />
              </div>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-xl shadow-md px-5 py-6 text-center mt-[-10px] 
              transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">

              <h3 className={`font-semibold text-sm mb-2 text-MidnightNavyText`}>
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>

              <div className={`mt-4 text-xl font-bold ${item.text}`}>
                {item.id}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}