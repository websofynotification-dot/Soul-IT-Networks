"use client"
import { cardProps } from "@/types/cardContext";
import { useEffect, useState } from "react";
import { PreLoader } from "./PreLoader";

export const Stats: React.FC<cardProps> = ({ cardData }) => {

  const [counts, setCounts] = useState(cardData.map(() => 0));

  useEffect(() => {
    cardData.forEach((stat, index) => {
      let start = 0;
      const end = Number(stat.title);
      const speed = 20;

      const counter = setInterval(() => {
        start += Math.ceil(end / 100);
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start >= end ? end : start;
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, speed);
    });
  }, []);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md
        rounded-xl shadow-lg p-4 grid grid-cols-2 gap-4">
      {
        cardData?.length === 0 ? <div className="grid col-span-2" ><PreLoader /></div> :
          <>
            {cardData?.map((stat, index) => (
              <div
                key={stat._id}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={`${index * 150}`}
              >
                <h2
                  className={`text-22 sm:text-28 font-bold text-primary`}
                >
                  {Number(stat.title) === 1180
                    ? `₹${counts[index]}M`
                    : counts[index]}
                  +
                </h2>
                <p
                  className={`text-xs sm:text-sm font-medium text-SlateBlueText`}
                >
                  {stat.description}
                </p>
              </div>
            ))}</>
      }
    </div>
  )
}