"use client"
import { PreLoader } from "../Common/PreLoader";
import { TbArrowRightCircle } from "react-icons/tb";
import { useState } from "react";
import Pagination from "@/app/admin/components/common/Pagination";
import { supportServiceProps } from "@/types/supportServiceContext";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

export const SupportAddOns: React.FC<supportServiceProps> = ({ supportServiceData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const totalPages = Math.ceil(supportServiceData.length / recordsPerPage);

  const currentData = supportServiceData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  
  return (
    <section>
      <div className="container">
        <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
          <h3 className="text-primary uppercase">— Support Add-ons —</h3>
          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
            Support That{" "}<span className="text-secondary">Fits Your Needs</span>
          </h2>
          <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
            A range of flexible support frameworks designed to meet diverse <br />
            operational and financial requirements.
          </p>
        </div>
        {
          currentData?.length === 0 ? <PreLoader /> :

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {currentData.map((item, index) => (
                <div
                  key={item._id}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="relative group"
                >

                  <div className={`absolute bottom-0 left-0 w-full h-[70%] rounded-2xl bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:translate-y-2 group-hover:shadow-xl`} />
                  <div
                    className="relative bg-white border border-secondary p-5 rounded-2xl shadow-md z-20 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-2xl">

                    <div
                      className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-l-md bg-secondary transition-all duration-300 group-hover:h-14`}
                    />
                    <div className="flex gap-3 items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full  overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-110 bg-primary">
                        <IoArrowRedoCircleOutline
                          size={20}
                          className="text-white transition-all duration-300 group-hover:translate-x-1"
                        />
                      </div>

                      <div className="min-h-12 flex items-center">
                        <h3 className={`font-semibold text-MidnightNavyText transition-all duration-300 group-hover:translate-x-1`}>
                          {item.title}
                        </h3>
                      </div>

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
    title: "RESEARCH",
    desc: "Lorem Ipsum is simply dummy text of the printing industry.",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-500",
    text: "text-blue-500",
    image: "/images/sample1.jpg",
  },
  {
    id: "02",
    title: "IDEA",
    desc: "Lorem Ipsum is simply dummy text of the printing industry.",
    color: "from-teal-400 to-teal-600",
    bg: "bg-teal-500",
    text: "text-teal-500",
    image: "/images/sample2.jpg",
  },
  {
    id: "03",
    title: "STRATEGY",
    desc: "Lorem Ipsum is simply dummy text of the printing industry.",
    color: "from-yellow-400 to-yellow-600",
    bg: "bg-yellow-500",
    text: "text-yellow-500",
    image: "/images/sample3.jpg",
  },
  {
    id: "04",
    title: "GOAL",
    desc: "Lorem Ipsum is simply dummy text of the printing industry.",
    color: "from-lime-400 to-lime-600",
    bg: "bg-lime-500",
    text: "text-lime-500",
    image: "/images/sample4.jpg",
  },
];

export default function ProcessCards() {

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="relative group"
          >

            {/* BACK COLOR BASE */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[85%] rounded-2xl 
              bg-gradient-to-r from-primary to-secondary 
              transition-all duration-300 
              group-hover:translate-y-2 group-hover:shadow-xl`}
            />

            {/* STEP LABEL */}
            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="text-xs">STEP</p>
              <p className="text-lg font-bold">{item.id}</p>
            </div>

            {/* WHITE CARD */}
            <div
              className="relative bg-white border border-secondary p-5 rounded-xl shadow-md z-20
              transition-all duration-300 ease-in-out
              group-hover:-translate-y-2 group-hover:shadow-2xl"
            >

              {/* SIDE TAB */}
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-10 rounded-l-md bg-secondary
                transition-all duration-300 group-hover:h-14`}
              />

              {/* CONTENT */}
              <div className="flex items-start gap-3 ">

                {/* IMAGE / ICON */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 
                  transition-all duration-300 group-hover:scale-110 bg-slate-500">
                  <TbArrowRightCircle
                    size={20}
                    className="text-primary transition-all duration-300 
                                group-hover:text-secondary group-hover:translate-x-1"
                  />
                </div>

                <div>
                  <h3
                    className={`font-semibold text-sm mb-1 ${item.text}
                    transition-all duration-300 group-hover:translate-x-1`}
                  >
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}