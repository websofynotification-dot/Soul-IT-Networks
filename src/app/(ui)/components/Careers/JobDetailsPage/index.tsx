"use client";
import { SocialMediaShearing } from "../../Common/SocialMediaShearing";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useData } from "@/app/context/DataContext";
import Image from "next/image";;
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
import { IoBagRemoveOutline } from "react-icons/io5";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { JobOpeningCta } from "./JobOpeningCta";

export const JobDetailsPage = () => {
  const sidebarTopRef = useRef<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  const leftRef = useRef<HTMLDivElement>(null);
  const { jobs } = useData();
  const { slug } = useParams();
  const router = useRouter();
  const FIXED_TOP = 110;
  const job = jobs?.find((item) => item.slug === slug);
  const { title, location, experience, type, content, category } = job || {};

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !leftRef.current) return;
      if (window.innerWidth < 1024) {
        setIsFixed(false);
        return;
      }
      if (sidebarTopRef.current === null) {
        sidebarTopRef.current =
          sidebarRef.current.getBoundingClientRect().top + window.scrollY;
      }

      const scrollY = window.scrollY;
      const sidebarInitialTop = sidebarTopRef.current;
      const leftRect = leftRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;

      const shouldFix =
        scrollY + FIXED_TOP >= sidebarInitialTop &&
        leftRect.bottom > sidebarHeight + FIXED_TOP;
      setIsFixed(shouldFix);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!job) return;

  return (
    <div className="pt-8">
      <div className="relative  overflow-hidden sm:h-80 mt-20 h-28">
        <div className="absolute inset-0 ">
          {
            <Image
              src="/images/career/job-details-page-banner.jpg"
              alt="Page Banner"
              fill
              priority
            />
          }
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container">
          <div className={`sm:mt-28 mt-5`}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <button onClick={() => router.push("/careers")} className="text-white/80 flex items-center justify-center gap-1">
              <HiArrowNarrowLeft size={20} />
              All Jobs
            </button>

            <h2 className={` ${title?.includes("PCC") ? "text-sm" : "text-xl"} md:text-[40px] font-bold text-white leading-tight`}>
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-md text-white/80">
              <div className="flex items-center justify-center gap-1"><FaMapMarkerAlt className=" transition-all duration-300" /><span> {location}</span></div>

              <div className="flex items-center justify-center gap-1"><LuAlarmClockCheck className=" transition-all duration-300" /> <span>{type}</span></div>

              <div className="flex items-center justify-center gap-1"> <IoBagRemoveOutline className=" transition-all duration-300" /> <span> {experience}</span></div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-12  overflow-visible">
        <div className="container overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <SocialMediaShearing title={title} />
            <div ref={leftRef} className="lg:col-span-8 bg-gray-50 rounded-2xl border border-secondary" data-aos="fade-right" data-aos-delay="150">

                <header className="p-7">
                  <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    About{" "}<span className="text-secondary">This Role</span>
                  </h1>
                </header>
                <article className="max-w-none px-7 pb-7 text-justify">
                  {content && (
                    <div
                      className="jodit-content"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  )}
                </article>
            </div>

            <aside className="lg:col-span-4 relative" data-aos="fade-left" data-aos-delay="150">
              <div className={`space-y-8 transition-all duration-200`}
              >

                <div ref={sidebarRef} className={`bg-white flex flex-col gap-4 rounded-xl shadow-2xl  border border-secondary ${isFixed ? "fixed top-[0px] w-[370px]" : "relative"} p-6 rounded-xl`}>

                  <h3 className="text-lg font-semibold text-primary">
                    Apply{" "}<span className="text-MidnightNavyText">Now</span>
                  </h3>
                  <p className="text-SlateBlueText">Send your resume via email or WhatsApp to apply for this position.</p>

                  <Link href={`https://wa.me/919918701634?text=${encodeURIComponent(`Hi Soul IT Networks, I'd like to apply for the ${title} position.`)}`}
                    target="_blank"
                    className="p-3 bg-white flex  font-semibold rounded-md hover:text-white transition duration-300 shadow-lg justify-center items-center gap-2 text-success border border-success  hover:bg-success/80"
                  >
                    <span className="flex items-center gap-2"><FaWhatsapp size={20} />Apply via Whatsapp
                    </span>
                  </Link>
                  <Link href={`mailto:anubhav@soulitnetworks.com?subject=Application for ${title}`}
                    target="_blank"
                    className="p-3 bg-primary flex  font-semibold rounded-md transition duration-300 shadow-lg justify-center items-center gap-2 text-white border border-white  hover:bg-transparent hover:text-primary hover:border-secondary"
                  >
                    <span className="flex items-center gap-2"><FaEnvelope size={18} />Email your resume
                    </span>
                  </Link>
                  <div className="sm:h-px h-3 bg-SlateBlueText/20" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      Job{" "}<span className="text-MidnightNavyText">Details</span>
                    </h3>

                    <div className="space-y-1">

                      <p className="text-SlateBlueText text-sm"><span className="text-MidnightNavyText font-medium">Category : </span>{category}</p>
                      <p className="text-SlateBlueText text-sm"><span className="text-MidnightNavyText font-medium">Type : </span> {type}</p>
                      <p className="text-SlateBlueText text-sm"><span className="text-MidnightNavyText font-medium">Experience :</span> {experience}</p>
                      <p className="text-SlateBlueText text-sm"><span className="text-MidnightNavyText font-medium">Location : </span> {location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <JobOpeningCta />
    </div>
  );
}

