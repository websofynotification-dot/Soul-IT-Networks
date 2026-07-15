import Image from "next/image";
import Link from "next/link";

import { teamsProps } from "@/types/teamsContext";
import { PreLoader } from "../../Common/PreLoader";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const TeamMember: React.FC<teamsProps> = ({ teamsData }) => {
  return (
    <section className="py-5 md:py-10">
      <div className="container">
        {teamsData.length === 0 ? (
          <PreLoader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamsData?.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-2xl border border-secondary bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-secondary/20"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                    />
                  </div>

              

                  <div>
                    {member.socialMedia?.map((item) => (
                      <div
                        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 translate-y-14 gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                        key={item._id}
                      >
                        <Link
                          href={item.socialMediaUrl}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1877F2] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                        >
                          <FaFacebookF />
                        </Link>

                        <Link
                          href={item.socialMediaUrl}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#E4405F] shadow-lg transition-all duration-300 delay-75 hover:-translate-y-1 hover:scale-110"
                        >
                          <FaInstagram />
                        </Link>
                        <Link
                          href={item.socialMediaUrl}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A66C2] shadow-lg transition-all duration-300 delay-150 hover:-translate-y-1 hover:scale-110"
                        >
                          <FaLinkedinIn />
                        </Link>
                        <Link
                          href={item.socialMediaUrl}
                          target="_blank"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1DA1F2] shadow-lg transition-all duration-300 delay-200 hover:-translate-y-1 hover:scale-110"
                        >
                          <FaTwitter />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative px-6 pt-8 pb-12">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-MidnightNavyText transition-colors duration-300 group-hover:text-primary">
                      {member.name}
                    </h3>
                    <span className="mt-3 inline-block rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      {member.designation}
                    </span>
                    <p className="mt-5 text-15 text-SlateBlueText leading-relaxed text-justif">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
