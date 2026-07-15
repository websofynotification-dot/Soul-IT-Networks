"use client";
import { useEffect, useRef, useState, useCallback, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Ellipsis } from "lucide-react";
import { useSidebar } from "@/app/context/SidebarContext";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavItem } from "@/types/sidebarContext";
import { navItems, othersItems } from "./Navitem";

export const AppSidebar: FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others",
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>

              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}

              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "auto"
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem, childIndex) => (
                  <li key={subItem.name}>
                    {subItem.tertiaryItems &&
                    subItem.tertiaryItems.length > 0 ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenTertiaryMenu((prev) =>
                              prev?.parentIndex === index &&
                              prev.childIndex === childIndex
                                ? null
                                : {
                                    parentIndex: index,
                                    childIndex,
                                  },
                            )
                          }
                          className={`menu-dropdown-item flex items-center justify-between w-full transition-all duration-200 ${
                            openTertiaryMenu?.parentIndex === index &&
                            openTertiaryMenu?.childIndex === childIndex
                              ? "menu-dropdown-item-active"
                              : "menu-dropdown-item-inactive"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FaArrowCircleRight size={15} />
                            <span>{subItem.name}</span>
                          </div>

                          <ChevronDown
                            size={16}
                            className={`transition-all duration-300 ${
                              openTertiaryMenu?.parentIndex === index &&
                              openTertiaryMenu?.childIndex === childIndex
                                ? "rotate-180 text-primary"
                                : "text-gray-500"
                            }`}
                          />
                        </button>

                        <div
                          ref={(el) => {
                            tertiaryMenuRefs.current[`${index}-${childIndex}`] =
                              el;
                          }}
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            height:
                              openTertiaryMenu?.parentIndex === index &&
                              openTertiaryMenu?.childIndex === childIndex
                                ? `${tertiaryMenuHeight[`${index}-${childIndex}`] || 0}px`
                                : "0px",
                          }}
                        >
                          <ul className="ml-8 mt-2 space-y-1 pl-">
                            {subItem.tertiaryItems.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.path}
                                  className={`menu-dropdown-item ${
                                    isActive(item.path)
                                      ? "menu-dropdown-item-active"
                                      : "menu-dropdown-item-inactive"
                                  } flex items-center gap-2 rounded-lg transition-all duration-200`}
                                >
                                  <span
                                    className={`${
                                      isActive(item.path)
                                        ? "menu-dropdown-item-icon-active"
                                        : "menu-item-icon-inactive"
                                    }`}
                                  >
                                    <FaArrowCircleRight size={13} />
                                  </span>

                                  <span>{item.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : subItem.path ? (
                      <Link
                        href={subItem.path!}
                        className={`menu-dropdown-item ${
                          isActive(subItem.path!)
                            ? "menu-dropdown-item-active"
                            : "menu-dropdown-item-inactive"
                        } flex items-center gap-2`}
                      >
                        <span
                          className={`${
                            isActive(subItem.path!)
                              ? "menu-dropdown-item-icon-active"
                              : "menu-item-icon-inactive"
                          }`}
                        >
                          <FaArrowCircleRight size={15} />
                        </span>

                        {subItem.name}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="menu-dropdown-item menu-dropdown-item-inactive flex items-center gap-2 w-full cursor-default"
                      >
                        <span className="menu-item-icon-inactive">
                          <FaArrowCircleRight size={15} />
                        </span>

                        {subItem.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);

  const [openTertiaryMenu, setOpenTertiaryMenu] = useState<{
    parentIndex: number;
    childIndex: number;
  } | null>(null);

  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );

  const [tertiaryMenuHeight, setTertiaryMenuHeight] = useState<
    Record<string, number>
  >({});

  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const tertiaryMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem, childIndex) => {
            if (subItem.path && isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });

              submenuMatched = true;
            }
            if (subItem.tertiaryItems) {
              subItem.tertiaryItems.forEach((item) => {
                if (isActive(item.path)) {
                  setOpenSubmenu({
                    type: menuType as "main" | "others",
                    index,
                  });

                  setOpenTertiaryMenu({
                    parentIndex: index,
                    childIndex,
                  });

                  submenuMatched = true;
                }
              });
            }
          });
        }
      });
    });
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  useEffect(() => {
    if (!openTertiaryMenu || !openSubmenu) return;

    const tertiaryKey = `${openTertiaryMenu.parentIndex}-${openTertiaryMenu.childIndex}`;

    if (tertiaryMenuRefs.current[tertiaryKey]) {
      const tertiaryHeight =
        tertiaryMenuRefs.current[tertiaryKey]?.scrollHeight || 0;

      setTertiaryMenuHeight((prev) => ({
        ...prev,
        [tertiaryKey]: tertiaryHeight,
      }));
      const parentKey = `${openSubmenu.type}-${openSubmenu.index}`;

      if (subMenuRefs.current[parentKey]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [parentKey]: subMenuRefs.current[parentKey]?.scrollHeight || 0,
        }));
      }
    }
  }, [openTertiaryMenu, openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        setOpenTertiaryMenu(null);
        return null;
      }
      setOpenTertiaryMenu(null);
      return {
        type: menuType,
        index,
      };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-secondary 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
              ? "w-[290px]"
              : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-4 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/admin/logout">
          {isExpanded || isHovered || isMobileOpen ? (
            <div className="w-64 flex justify-center items-center">
              <Image
                src="/images/logo/soult-it-logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="h-auto w-auto"
              />
            </div>
          ) : (
            <Image
              src="/images/logo/soult-it-logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="h-auto w-auto"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear hide-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-primary font-semibold ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <Ellipsis color="#eb1f26" />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
