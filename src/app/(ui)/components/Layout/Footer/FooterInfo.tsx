"use client";
import Link from "next/link";
import { socialMediaIcon } from "@/app/api/data";
import Image from "next/image";
import { footerProps } from "@/types/footerContext";
import { PreLoader } from "../../Common/PreLoader";
import { topbarProps } from "@/types/topbarContext";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export const FooterInfo: React.FC<footerProps & topbarProps> = ({
  footerData,
  topbarData,
}) => {
  const contactNo =
    topbarData?.[0]?.contactDetails?.filter(
      (contact) =>
        contact.contctType === "phone" || contact.contctType === "telephone",
    ) ?? [];

  const emails =
    topbarData?.[0]?.contactDetails?.filter(
      (email) => email.contctType === "email",
    ) ?? [];

  return (
    <footer className="bg-primary pt-10 pb-4">
      {footerData?.length === 0 || topbarData?.length === 0 ? (
        <div className="flex justify-center items-center w-full">
          <PreLoader flag={true} />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center text-center md:text-left">
              {/* <div className="space-y-2">
                <div className="flex flex-col sm:items-start items-center  justify-center gap-2">
                  <Link href="/">
                    <Image
                      src="/images/logo/soult-it-logo.png"
                      // src={footerData[0]?.companyInfo.logo}
                      alt={footerData[0]?.companyInfo.altTag}
                      width={160}
                      height={50}
                      quality={100}
                      className="sm:w-44 w-36 rounded-lg"
                      loading="eager"
                    />
                  </Link>
                  <p className="w-72 text-justify  text-white text-16 transition">
                    {footerData[0]?.companyInfo.description}
                  </p>
                </div>

                <div className="flex flex-wrap sm:justify-start justify-center gap-2 sm:gap-3 mt-4">
                  {footerData[0]?.tag.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="px-3 py-1.5 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border hover:border-white/20 hover:text-white hover:scale-105  cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div> */}

              <div>
                <h3 className="font-bold uppercase text-lg mb-4 text-gray-50">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {footerData[0]?.quickLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className="text-white text-[16px] hover:text-white/50 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-4 text-gray-50 text-lg">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {footerData[0]?.services.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className="text-white text-[16px] hover:text-white/50 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold uppercase mb-4 text-gray-50 text-lg">
                  Office Location
                </h3>

                <ul className="space-y-3">
                  {[
                    topbarData[0].headOfficeLocation,
                    topbarData[0].branchOfficeLocation,
                  ].map((loc, ind) => (
                    <li
                      className={`flex  items-center justify-center md:justify-start gap-3 text-[16px]`}
                      key={ind}
                    >
                      <span className="text-white">
                        <FaMapMarkerAlt />
                      </span>
                      <Link
                        href={`https://www.google.com/maps?q=${encodeURIComponent(`${loc}`)}`}
                        target="_blank"
                        className="text-white w-64 text-left hover:text-white/50 transition"
                      >
                        <span className="font-semibold text-success">{ind === 0 ? "Head" : "Branch"} Office - </span> {loc}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold uppercase mb-4 text-gray-50 text-lg">
                  Contact Us
                </h3>
                <ul className="mt-3 space-y-3">
                  {[...contactNo, ...emails].map((item, index) => (
                    <div key={index}>
                      {item.contctType === "phone" ||
                      item.contctType === "telephone" ? (
                        <li
                          className={`flex  items-center justify-center md:justify-start gap-3 text-[16px]`}
                        >
                          <span className="text-white">
                            {item.contctType === "phone" ? (
                              <MdPhoneIphone size={18} />
                            ) : (
                              <FaPhoneAlt />
                            )}
                          </span>
                          <Link
                            href={`${item.contctType === "phone" ? `tel:+91${item.contactUrl}` : `mailto:${item.contactUrl}`}`}
                            className="text-white text-left hover:text-white/50 transition"
                          >
                            {item.contactUrl}
                          </Link>
                        </li>
                      ) : (
                        <li
                          className={`flex  items-center justify-center md:justify-start gap-3 text-[16px]`}
                        >
                          <span className="text-white">
                            <FaEnvelope />
                          </span>
                          <Link
                            href={`${item.contctType === "phone" ? `tel:+91${item.contactUrl}` : `mailto:${item.contactUrl}`}`}
                            className="text-white text-left hover:text-white/50 transition"
                          >
                            {item.contactUrl}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </ul>

                <div className="flex justify-center md:justify-start gap-4 mt-5">
                  {topbarData[0]?.socialMedia.map((item, index) => (
                    <Link
                      key={index}
                      href={item.socialMediaUrl}
                      target="_blank"
                      className="w-9 h-9 border border-white flex items-center justify-center rounded-md shadow hover:bg-secondary hover:text-white transition"
                    >
                      <span className="text-white">
                        {/* {socialMediaIcon[item.socialMediaType]} */}
                        {socialMediaIcon[index % socialMediaIcon.length]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white my-8"></div>

          <ul className="flex container my-8 flex-wrap gap-4 items-center justify-center">
            {footerData[0]?.otherLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-white text-[16px] hover:text-white/50 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex sm:flex-row flex-col container justify-center">
            <p className="text-center text-white text-[14px] leading-relaxed">
              © {new Date().getFullYear()} {footerData[0]?.copyrightText.name}{" "}
              <Link
                href={footerData[0]?.copyrightText.path}
                className="hover:text-white/50 font-medium"
              >
                {footerData[0]?.copyrightText.website}{" "}
              </Link>
              {footerData[0]?.designedBy.name}{" "}
              <Link
                href={footerData[0]?.designedBy.path}
                target="_blank"
                className="hover:text-success font-medium"
              >
                {footerData[0]?.designedBy.website}{" "}
              </Link>
            </p>

            {/* <div className="flex sm:flex-row flex-col gap-2 items-center justify-center text-white text-[14px] leading-relaxed">
          <div className="flex gap-2 items-center justify-center">
            <AiOutlineSafetyCertificate size={18} />
            <p>GSTIN: 09ADKFS0812K1ZV</p>
          </div>
          <div className="sm:block hidden h-4 w-px bg-white" />
          <span>D-U-N-S: 76-760-4553</span>
          <div className="sm:block hidden h-4 w-px bg-white" />
          <span>UDYAM: UDYAM-UP-50-0020708</span>
        </div> */}
          </div>
        </>
      )}
    </footer>
  );
};
