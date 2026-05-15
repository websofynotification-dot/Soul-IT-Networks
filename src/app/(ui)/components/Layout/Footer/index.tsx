"use client";
import Link from "next/link";
import { footer } from "@/app/api/data";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary pt-10 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center text-center md:text-left">
          <div className="space-y-2">
            <div className="flex flex-col sm:items-start items-center  justify-center gap-2">
              {/* <Logo /> */}

              <Link href="/">
                <Image
                  src="/images/logo/soult-it-logo.png"
                  alt="logo"
                  width={160}
                  height={50}
                  quality={100}
                  className='sm:w-44 w-36 rounded-lg'
                  loading="eager"
                />
              </Link>

              <p className="w-72 text-justify  text-white text-16 transition">
                SoUL IT Networks is a premier system integrator providing IT infrastructure, video conferencing, surveillance, network security, and customized software solutions.
              </p>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-2 sm:gap-3 mt-4">
              {footer?.tag.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:border hover:border-white/20 hover:text-white hover:scale-105  cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase text-lg mb-4 text-gray-50">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footer?.quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-white text-[16px] hover:text-white/50 transition">
                    {item.title}
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
              {footer?.support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-white text-[16px] hover:text-white/50 transition">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-4 text-gray-50 text-lg">
              Contact Us
            </h3>

            <ul className="space-y-3">
              {footer.contactDetails[0]?.allLocation?.map((item, index) => (
                <div key={index} className="space-y-3">
                  <li
                    key={index}
                    className={`flex  items-center justify-center md:justify-start gap-3 text-[16px]`}>
                    <span className="text-white" >{item.icon}</span>
                    <Link href={item.url} target="_blank" className="text-white w-64 text-left hover:text-white/50 transition">
                      {item.title}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>

            <ul className="mt-3 space-y-3">
              {
                footer.contactDetails[1]?.allContacts?.map((item, index) => (

                  <div key={index}>
                    <li
                      key={index}
                      className={`flex  items-center justify-center md:justify-start gap-3   text-[16px]`}
                    >
                      <span className="text-white" >{item.icon}</span>

                      <Link
                        href={item.url}
                        className="text-white text-left hover:text-white/50 transition"
                      >
                        {item.title}
                      </Link>
                    </li>
                  </div>
                ))}
            </ul>

            <ul className="mt-3 space-y-3">
              {
                footer.contactDetails[2]?.allEmails?.map((item, index) => (

                  <div key={index}>
                    {
                      <li
                        key={index}
                        className={`flex  items-center justify-center md:justify-start gap-3   text-[16px]`}
                      >
                        <span className="text-white" >{item.icon}</span>
                        <Link
                          href={item.url!}
                          className="text-white text-left hover:text-white/50 transition"
                        >
                          {item.title}
                        </Link>
                      </li>
                    }
                  </div>
                ))}
            </ul>

            <div className="flex justify-center md:justify-start gap-4 mt-5">
              {footer?.socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="w-9 h-9 border border-white flex items-center justify-center rounded-md shadow hover:bg-secondary hover:text-white transition"
                >
                  <span className="text-white">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="border-t border-white my-8"></div>

      <ul className="flex container my-8 flex-wrap gap-4 items-center justify-center">
        {footer?.useFullLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="text-white text-[16px] hover:text-white/50 transition">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex sm:flex-row flex-col container justify-center">
        <p className="text-center text-white text-[14px] leading-relaxed">
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <Link
            href="/"
            className="hover:text-white/50 font-medium"
          >
            SoUL IT Networks. {" "}
          </Link>
          Designed by{" "}
          <Link
            href="https://www.websofy.com/"
            target="_blank"
            className="hover:text-success font-medium"
          >
            Websofy Software Pvt. Ltd.
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
    </footer>
  );
};

export default Footer;