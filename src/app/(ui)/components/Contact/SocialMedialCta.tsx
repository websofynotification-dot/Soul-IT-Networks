import { socialMediaIcon } from "@/app/api/data";
import { topbarProps } from "@/types/topbarContext";
import Link from "next/link";
import React from "react";
import { PreLoader } from "../Common/PreLoader";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export const SocialMedialCta: React.FC<topbarProps> = ({ topbarData }) => {
  const contactNo =
    topbarData?.[0]?.contactDetails?.filter(
      (contact) =>
        contact.contctType === "phone" || contact.contctType === "telephone",
    ) ?? [];

  const emails =
    topbarData?.[0]?.contactDetails?.filter(
      (email) => email.contctType === "email",
    ) ?? [];

  const location = Array.isArray(topbarData)
    ? [topbarData[0].headOfficeLocation, topbarData[0].branchOfficeLocation]
    : [];

  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="md:pb-12 pb-8">
          {topbarData.length === 0 ? (
            <PreLoader />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-stretch">
              <div className="bg-white shadow-2xl shadow-secondary/50 border border-secondary p-8 rounded-xl">
                <h2
                  className="text-2xl uppercase text-primary mb-4 font-semibold"
                  data-aos="fade-up"
                >
                  Our Office{" "}
                  <span className="text-MidnightNavyText">Locations</span>
                </h2>
                <div className="flex flex-col items-center gap-5  justify-center">
                  {location.map((item, index) => (
                    <div key={index}>
                      <Link
                        target="_blank"
                        href={`https://www.google.com/maps?q=${encodeURIComponent(item)}`}
                        className="group block"
                      >
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-MidnightNavyText/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                          <div className="flex-shrink-0 lg:flex hidden items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <FaMapMarkerAlt size={18} />
                          </div>

                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                              {index === 0 ? "Head Office" : "Branch Office"}
                            </span>

                            <p className="text-SlateBlueText break-all sm:break-normal leading-6 group-hover:text-MidnightNavyText transition-colors duration-300">
                              {item}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white shadow-2xl shadow-secondary/50 border border-secondary p-8 rounded-xl">
                <h2
                  className="text-2xl uppercase text-primary mb-4 font-semibold"
                  data-aos="fade-up"
                >
                  Get in <span className="text-MidnightNavyText">Touch</span>
                </h2>
                <div className="flex gap-5 flex-wrap ">
                  {[...contactNo, ...emails].map((item, ind) => (
                    <div key={ind}>
                      <Link
                        href={
                          item.contctType === "phone" ||
                          item.contctType === "telephone"
                            ? `tel:+91${item.contactUrl}`
                            : `mailto:${item.contactUrl}`
                        }
                        className="group block"
                      >
                        <div
                          className={`flex w-72 ${item.contctType === "phone" || item.contctType === "telephone" ? "sm:w-[14em]" : "sm:w-[29.5em]"} items-center gap-4 p-4 rounded-2xl border border-MidnightNavyText/20 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30`}
                        >
                          <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {item.contctType === "phone" ? (
                              <MdPhoneIphone size={18} />
                            ) : item.contctType === "telephone" ? (
                              <FaPhoneAlt size={16} />
                            ) : (
                              <FaEnvelope size={16} />
                            )}
                          </div>

                          <div className="flex-1">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                              {item.contctType === "phone"
                                ? "Mobile"
                                : item.contctType === "telephone"
                                  ? "Telephone"
                                  : "Email"}
                            </span>

                            <p className="text-SlateBlueText leading-6 break-all sm:break-normal group-hover:text-MidnightNavyText transition-colors duration-300">
                              {item.contactUrl}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-primary rounded-2xl text-white py-10 px-5 text-center">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-lg sm:text-2xl font-medium">
              Follow our journey. Spread awareness.
            </h3>
            {topbarData.length === 0 ? (
              <PreLoader />
            ) : (
              <div className="flex gap-5 flex-wrap justify-center">
                {(Array.isArray(topbarData[0]?.socialMedia)
                  ? topbarData[0]?.socialMedia
                  : []
                ).map((item, index) => (
                  <Link
                    key={index}
                    href={item.socialMediaUrl}
                    target="_blank"
                    className="w-12 h-12 text-MidnightNavyText flex items-center justify-center bg-white hover:text-white rounded-full shadow hover:bg-secondary  hover:border transition"
                  >
                    {socialMediaIcon[index % socialMediaIcon.length]}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
