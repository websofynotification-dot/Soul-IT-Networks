"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "@/types/HeaderItem";
import {
  submenuServiceIcons,
  submenuSolutionIcons,
  submenuSoulItIcons,
} from "@/app/api/data";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const handleMouseEnter = () => {
    if (item.subMenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive = path === item.href;
  const isActiveSubmenu = item.secondaryMenu?.some(
    (subItem) => subItem.href === path,
  );

  return (
    <li
      className={` ${item.secondaryMenu ? "relative" : ""} ${item.primaryMenu === "Speakers" ? "xl:block hidden" : "block"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-[15px] transition-all duration-300 ease-in-out !text-MidnightNavyText py-3 uppercase  flex font-semibold  ${isActive || isActiveSubmenu ? "!text-white bg-primary p-2 rounded" : "!text-SlateBlueText hover:!text-primary"}

      ${path.startsWith(`/${item.primaryMenu.toLowerCase()}`) ? "!text-MidnightNavyText" : "!text-MidnightNavyText "}`}
      >
        {item.primaryMenu}

        {item.subMenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className="absolute p-3 left-0 mt-0.5 top-9 w-[45em] bg-white  z-50 shadow-lg rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-2 border border-secondary"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.secondaryMenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`px-4 py-1 text-[14px] font-medium uppercase rounded-md flex items-center gap-2
          ${path === subItem.href ? "bg-primary text-white" : " !text-SlateBlueText hover:!text-primary"
                }`}
            >
              {
                item.primaryMenu === "Soul It" ?  <span className={`text-16 ${path === subItem.href ? "text-white":"text-primary"}`}>{submenuSoulItIcons[index % submenuSoulItIcons.length]}</span>:

                item.primaryMenu === "Services" ?        
                <span className={`text-16 ${path === subItem.href ? "text-white":"text-primary"}`}>{submenuServiceIcons[index % submenuServiceIcons.length]}</span> : 
                
                <span className={`text-16 ${path === subItem.href ? "text-white":"text-primary"}`}>{submenuSolutionIcons[index % submenuSolutionIcons.length]}</span>
              }
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default HeaderLink;
