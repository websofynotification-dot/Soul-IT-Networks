import { journeyProps } from "@/types/journeyContext";
import { PreLoader } from "../../Common/PreLoader";
import { FaRocket } from "react-icons/fa";

export const OurJourney: React.FC<journeyProps> = ({ journeyData }) => {
  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
          <h3 className="text-primary uppercase">— Our Journey —</h3>
          <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
            Our Journey of{" "}
            <span className="text-secondary">Growth & Innovation</span>
          </h2>
          <p className="text-SlateBlueText font-normal sm:text-19 text-center m-auto max-w-3xl">
            Building trusted IT infrastructure and digital transformation solutions<br/>
            since 2021 through innovation and excellence.
          </p>
        </div>
        {journeyData?.length === 0 ? (
          <PreLoader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {journeyData?.map((item, index) => (
              <div
                key={item._id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative rounded-2xl border border-secondary bg-white p-5 sm:p-6 md:pl-24 transition-all duration-300 hover:-translate-y-2 hover:border-MidnightNavyText hover:shadow-2xl"
              >
                <div className="absolute -top-4 left-5 rounded-md bg-primary px-4 py-1 text-sm font-semibold text-white transition-all duration-300 group-hover:scale-105">
                  {item.journey_year}
                </div>
                <div className="mb-5 flex justify-center md:absolute md:left-4 md:top-20 md:mb-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary bg-white text-3xl text-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-MidnightNavyText">
                    <FaRocket />
                  </div>
                </div>
                <div className="text-center md:text-left transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-MidnightNavyText transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-SlateBlueText text-justify md:text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
