"use client";
import { cardProps } from "@/types/cardContext";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { PreLoader } from "../../Common/PreLoader";

export const WhoWeAreSection: React.FC<cardProps> = ({ cardData }) => {
  const { title, description, image } = cardData[0];

  return (
    <section className="pt-12">
      {cardData?.length === 0 ? (
        <PreLoader />
      ) : (
        <div className="container">
          <div className="grid mb-10 md:grid-cols-2 sm:gap-12 gap-5 items-center">
            <div data-aos="fade-right">
              <Image
                src={image!}
                alt="About Us image of RML Mehrotra Pathology"
                width={200}
                height={300}
                className="w-full h-full sm:h-[380px] rounded-2xl shadow-md"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="md:text-4xl text-2xl font-bold text-MidnightNavyText mb-4">
                {title?.split("@")[0]}{" "}
                <span className="text-secondary">{title?.split("@")[1]}</span>
              </h2>
              <div className="space-y-4">
                {description
                  ?.split("@")
                  .slice(0, 2)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="text-SlateBlueText text-17 leading-relaxed text-justify [&_strong]:font-semibold [&_strong]:text-MidnightNavyText"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item),
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {description
              ?.split("@")
              .slice(2)
              .map((item, index) => (
                <div
                  key={index}
                  className="text-SlateBlueText text-17 leading-relaxed text-justify [&_ul]:list-disc
    [&_ul]:pl-6
    [&_ul]:my-4
    [&_li]:mb-2
    [&_strong]:font-semibold
    [&_strong]:text-MidnightNavyText"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item),
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </section>
  );
};
