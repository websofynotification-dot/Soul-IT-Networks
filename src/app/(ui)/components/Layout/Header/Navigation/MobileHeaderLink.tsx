import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HeaderItem } from "@/types/HeaderItem";
import { useData } from "@/app/context/DataContext";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { setNavbarOpen } = useData();
  const path = usePathname();

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const router = useRouter();


  const handleNavigate = () => {
    router.push(item.href);
    setNavbarOpen(false);
  };

  const handleSubMenuNavigate = (subMenuHref: string) => {
    router.push(subMenuHref);
    setNavbarOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={item.subMenu ? handleToggle : handleNavigate}
        className={`flex items-center justify-between w-full py-2 text-MidnightNavyText focus:outline-none ${path == item.href ? "!text-primary" : null} ${path.startsWith(`/${item.primaryMenu.toLowerCase()}`) ? "!text-primary" : null}`}
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
      </button>

      {submenuOpen && item.subMenu && (
        <div className="bg-white p-2 w-full max-h-80 overflow-y-auto sm:max-h-none sm:overflow-visible">
          {item.secondaryMenu.map((subItem, index) => (
            <button
              key={index}
              onClick={() => handleSubMenuNavigate(subItem.href)}
              className={`block uppercase rounded-md px-4 py-1 text-start ${path === subItem.href ? "bg-primary text-white" : " !text-SlateBlueText hover:!text-primary"
                }`}
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
