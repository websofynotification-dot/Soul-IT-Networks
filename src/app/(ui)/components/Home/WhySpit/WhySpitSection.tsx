"use client";
import { cardProps } from "@/types/cardContext";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { PreLoader } from "../../Common/PreLoader";
import { Stats } from "../../Common/Stats";

export const WhySpitSection: React.FC<cardProps> = ({ cardData }) => {

  const statsData = Array.isArray(cardData) ? cardData.filter(item => !item.title?.includes("Step") && !item.description?.includes("customers")) : [];

  const filterStep = Array.isArray(cardData)
    ? cardData.filter(item => item.title?.includes("Step")) : [];

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-left">
          <h3 className="text-primary uppercase">— Why SPIT —</h3>

          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
            Engineered for Enterprise.{" "}
            <span className="text-secondary">Trusted by Government.</span>
          </h2>
          {
            filterStep?.length === 0 ? <PreLoader /> :
              <>
                {filterStep?.map(item =>
                  <div key={item._id} className="flex gap-4 mb-4 items-center">
                    <IoMdCheckmarkCircleOutline size={20} className="text-primary" />
                    <p className="text-16 text-SlateBlueText text-justify">
                      {item.description}
                    </p>
                  </div>
                )}
              </>
          }
          <div className="flex mt-10">
            <button className="px-6 flex py-3 justify-center items-center gap-2 text-primary rounded-md font-semibold border border-secondary transition-all duration-300 hover:bg-primary hover:text-white">
              Learn More About Us <MdOutlineArrowRightAlt size={25} />
            </button>
          </div>
        </div>

        <div className="relative" data-aos="fade-right">
          <Image
            src="/images/why-choose-spit/whyChooseSpit.jpg"
            alt="Why Choose Spit"
            width={700}
            height={500}
            className="w-full h-[32rem] rounded-lg object-covr"
          />
          <Stats cardData={statsData} />
        </div>
      </div>
    </section>
  );
};








