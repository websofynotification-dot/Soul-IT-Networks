import { NavItem } from "@/types/sidebarContext"
import { KeySquare } from "lucide-react";
import { FaPhoneAlt, FaRegUser, FaUserFriends } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoFootstepsOutline, IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMiscellaneousServices, MdOutlineCategory } from "react-icons/md";
import { PiAlignTopBold } from "react-icons/pi";
import { SiJirasoftware } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";
import { TiSupport } from "react-icons/ti";

export const navItems: NavItem[] = [
  {
    icon: <LuLayoutDashboard size={18} />,
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <PiAlignTopBold size={18} />,
    name: "Topbar",
    path: "/admin/topbar",
  },
  {
    icon: <TfiMenuAlt size={18} />,
    name: "Menu",
    path: "/admin/menubar",
  },
  {
    icon: <IoHomeOutline size={18} />,
    name: "Home Page",
    subItems: [
      { name: "Hero Section", path: "/admin/home-page/hero" },
      { name: "Our Services", path: "/admin/home-page/services" },
      { name: "Why Choose Us", path: "/admin/home-page/why-choose-us" },
      { name: "Projects", path: "/admin/home-page/projects" },
      { name: "Why Soul It", path: "/admin/home-page/why-soul-it" },
      { name: "Our Certificates", path: "/admin/home-page/certificates" },
      { name: "Our Partners", path: "/admin/home-page/partners" },
    ],
  },
  {
    icon: <SiJirasoftware size={18} />,
    name: "Soul It",
    subItems: [
      {
        name: "About Us",
        tertiaryItems: [
          { name: "Who We Are", path: "/admin/soul-it/about-us/who-we-are" },
          { name: "Our Journey", path: "/admin/soul-it/about-us/journey" },
          { name: "Foundation", path: "/admin/soul-it/about-us/foundation" },
          {
            name: "Company Credentials",
            path: "/admin/soul-it/about-us/company-credentials",
          },
        ],
      },
      {
        name: "Team Member",
        path: "/admin/soul-it/teams",
      },
    ],
  },
  {
    icon: <FaUserFriends size={18} />,
    name: "Customer Page",
    subItems: [{ name: "Sectors", path: "/admin/customer/sectors" }],
  },
  {
    icon: <TiSupport size={18} />,
    name: "Support Page",
    subItems: [
      { name: "Support Service", path: "/admin/suport/support-service" },
      { name: "Support Add On", path: "/admin/suport/support-add-on" },
    ],
  },

  {
    icon: <GiProgression size={18} />,
    name: "Careers Page",
    subItems: [
      { name: "Job Feature", path: "/admin/careers/feature-job" },
      { name: "Job Opening", path: "/admin/careers/job-opening" },
    ],
  },
  {
    name: "Services",
    icon: <MdMiscellaneousServices size={18} />,
    subItems: [
     
      { name: "Overview", path: "/admin/services/overview" },

      {
        name: "Why Choose Soul IT",
        path: "/admin/services/why-choose-soul-it",
      },
      {
        name: "Approach",
        path: "/admin/services/approach",
      },
      {
        name: "Deliver",
        path: "/admin/services/delivery",
      },
    ],
  },
  {
    name: "Solutions",
    icon: <HiOutlineLightBulb size={18} />,
    subItems: [
      { name: "Overview", path: "/admin/solutions/overview" },
      { name: "Use Cases", path: "/admin/solutions/use-cases" },
    ],
  },
  {
    name: "Category",
    icon: <MdOutlineCategory size={18} />,
    path: "/admin/category",
  },
  {
    name: "Contact Us",
    icon: <FaPhoneAlt size={15} />,
    path: "/admin/contact-us",
  },
  {
    name: "Footer",
    icon: <IoFootstepsOutline size={15} />,
    path: "/admin/footer",
  },
  {
    icon: <FaRegUser size={18} />,
    name: "User Profile",
    path: "/admin/profile",
  },
];

export const othersItems: NavItem[] = [
  {
    icon: <KeySquare />,
    name: "Authentication",
    subItems: [
      { name: "Sign In", path: "/signin" },
      { name: "Sign Out", path: "/logout" },
    ],
  },
];