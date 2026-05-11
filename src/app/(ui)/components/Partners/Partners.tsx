"use client"
import { cardProps } from "@/types/cardContext"
import { TechnologyPartner } from "./TechnologyPartner";
import { NationalPartner } from "./NationalPartner";
import { useState } from "react";

export const Partners: React.FC<cardProps> = ({ cardData }) => {
  const [filter, setFilter] = useState("Technology Partners");

  const technologyPartners = cardData?.filter(item => item.partner_type === "Technology Partners");
  const nationalPartners = cardData?.filter(item => item.partner_type === "National Distributors");

  return (
    <section className="pt-12">
      <div>
        <div
          className="text-center mb-4 sm:mb-11"
          data-aos="fade-up"
        >
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {["Technology Partners", "National Distributors"].map((type, index) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 
        ${filter === type
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "border border-secondary/40 text-primary hover:bg-primary hover:text-white hover:shadow-md"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          {
            filter === "Technology Partners"
              ? <TechnologyPartner cardData={technologyPartners} />
              : <NationalPartner cardData={nationalPartners} />
          }
        </div>
      </div>
    </section>
  )
}







