
import Link from "next/link";
import { MdPhoneIphone } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { icons } from "@/app/api/data";
import { PreLoader } from "../../Common/PreLoader";

export const TopbarUi: React.FC<{ topbarData: { _id: string, contactDetails: { contctType: string, contactUrl: string, _id: string }[], socialMedia: { socialMediaType: string, socialMediaUrl: string, _id: string }[] }[] }> = async ({ topbarData }) => {

  return (
    <div className="w-full flex fixed top-0 lg:h-12 sm:h-18 md:h-10 bg-primary text-sm z-50 transition-transform duration-300">
      {
        topbarData?.length === 0 ? <div className="flex justify-center items-center w-full"><PreLoader flag={true} /></div> :
          <div className="container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="overflow-hidden">
              {
                topbarData &&
                <div className="flex items-center gap-2">
                  {[...topbarData[0]?.contactDetails].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      {(item.contctType === "phone") || (item.contctType === "telephone") ? (
                        <div className="flex items-center gap-4">
                          <div key={item._id} className="flex items-center gap-2">
                            <span className="text-white">
                              {
                                item.contctType === "phone" ? <MdPhoneIphone className="sm:size-5 size-3" /> : <FaPhoneAlt />
                              }
                            </span>
                            <Link
                              href={`tel:+91${item.contactUrl}`}
                              className="hover:text-black text-xs sm:text-sm text-white  whitespace-nowrap"
                            >
                              {item.contactUrl}
                            </Link>
                            <div className="sm:h-5 h-3 w-px bg-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-white"><FaEnvelope className="sm:size-4 size-3" /></span>
                          <Link
                            href={`mailto:${item.contactUrl}`}
                            className="hover:text-black text-xs sm:text-sm text-white whitespace-nowrap"
                          >
                            {item.contactUrl}
                          </Link>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              }
            </div>
            <div className="hidden sm:flex items-center justify-center text-sm sm:justify-end gap-4">
              <p className="text-white">Trusted IT System Integrator Since 2017</p>
              <div className="h-5 w-px bg-white" />
              {
                topbarData &&
                [...topbarData[0]?.socialMedia].map((item, index) => (
                  <Link key={item._id} href={item.socialMediaUrl} target="_blank" className="w-7 h-7 flex items-center justify-center bg-white rounded-full shadow hover:bg-transparent hover:border hover:border-white hover:text-white hover:animate-pulse transition">
                    {icons[index % icons.length]}
                  </Link>
                ))
              }
            </div>

          </div>
      }
    </div>
  );
}
