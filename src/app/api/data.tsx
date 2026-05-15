import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaWhatsapp, FaTwitter, FaGraduationCap, FaUserFriends, FaBullseye, FaRegLightbulb, FaRunning, FaWifi, FaRegUser, FaSatelliteDish, FaRegFile} from "react-icons/fa";
import { MdCorporateFare, MdOutlinePolicy, MdOutlineRemoveRedEye, MdOutlineRocketLaunch, MdOutlineScale, MdOutlineSettingsRemote,MdPhoneIphone } from "react-icons/md";
import { FaArrowTrendDown, FaCode, FaHandHoldingMedical, FaLink, FaRegCircle, FaRegCompass } from "react-icons/fa6";
import { FiDatabase, FiYoutube } from "react-icons/fi";
import { LuCctv, LuSquareMenu, LuTwitter } from "react-icons/lu";
import { IoIosCamera, IoIosDesktop } from "react-icons/io";
import { GrCloudSoftware } from "react-icons/gr";
import { IoHardwareChipOutline, IoHome, IoTrendingUpOutline } from "react-icons/io5";
import { HiArrowPathRoundedSquare, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiCloud, CiGlobe, CiLock } from "react-icons/ci";
import { SiBmcsoftware, SiProcesswire } from "react-icons/si";
import { GiHumanTarget, GiNetworkBars, GiProcessor } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { VscLaw } from "react-icons/vsc";
import { TbWindElectricity } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { RiCustomerService2Fill } from "react-icons/ri";


export const footer = {
  socialMedia: [
    {
      icon: <FiYoutube />,
      title: "Youtube",
      url: "/"
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      url: "/"
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "/"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "/"
    },
    {
      icon: <LuTwitter />,
      title: "Twitter",
      url: "/"
    },
  ],
  quickLinks: [
    {
      title: "About Us",
      url: "/about-us"
    },
    {
      title: "Services",
      url: "#"
    },
    {
      title: "Flagship Projects",
      url: "#"
    },
    {
      title: "Solutions",
      url: "#"
    },
    {
      title: "Partners",
      url: "#"
    },
    {
      title: "Contact Us",
      url: "/contact-us"
    },
  ],
  support: [
    {
      title: "System Integration",
      url: "#"
    },
    {
      title: "Managed IT Services",
      url: "#"
    },
    {
      title: "Network & Cyber Security",
      url: "#"
    },
    {
      title: "Cloud & Datacentre",
      url: "#"
    },
    {
      title: "Training & Certification",
      url: "#"
    },
    {
      title: "Outsourcing & Staffing",
      url: "#"
    },
  ],
  useFullLinks: [
    {
      title: "Privacy Policy",
      url: "#"
    },
    {
      title: "Terms of Service",
      url: "#"
    },
    {
      title: "Cookie Policy",
      url: "#"
    },
    {
      title: "Disclaimer",
      url: "#"
    },
    {
      title: "Anti-Bribery Policy",
      url: "# "
    },
    {
      title: "POSH Policy",
      url: "#"
    },
    {
      title: "Whistleblower Policy",
      url: "#"
    },
    {
      title: "Code of Conduct",
      url: "#"
    },
    {
      title: "Equal Opportunity",
      url: "#"
    },
    {
      title: "Grievance Redressal",
      url: "#"
    },
    {
      title: "Data Protection",
      url: "#"
    },
    {
      title: "Cookie Settings",
      url: "#"
    },
  ],
  contactDetails: [
    {
      allLocation: [
        {
          icon: <FaMapMarkerAlt />,
          title: "SOUL IT Networks LLP 81, Manas City Extension, Sugamau Indira Nagar, Lucknow - 226016",
          url: `https://www.google.com/maps?q=${encodeURIComponent("SOUL IT Networks LLP 81, Manas City Extension, Sugamau Indira Nagar, Lucknow - 226016")}`
        },
      ]
    },
    {
      allContacts: [
        {
          icon: <MdPhoneIphone size={18} />,
          title: "+91 9918701634",
          url: "tel:+919918701634"
        }
      ]
    },

    {
      allEmails: [
        {
          icon: <FaEnvelope />,
          title: "anubhav@soulitnetworks.com",
          url: "mailto:anubhav@soulitnetworks.com"
        }
      ]


    },
  ],
  tag: ["ISO 9001:2015", "ISO 14001:2015", "ISO 20000-1:2018", "ISO 27001:2022", "ISO 45001:2018", "CMMI Level 3"]
}

export const contactPageDetails = [
  {
    title: "Registered Office",
    location: "SOUL IT Networks LLP 81, Manas City Extension, Sugamau Indira Nagar, Lucknow - 226016",
    email: "anubhav@soulitnetworks.com",
    phone: ["+91 9918701634"],
    locationUrl: `https://www.google.com/maps?q=${encodeURIComponent("SOUL IT Networks LLP 81, Manas City Extension, Sugamau Indira Nagar, Lucknow - 226016")}`,
  },
]

export const sociaMediaBlogShearing = [
  {
    platform: "whatsapp",
    icon: <FaWhatsapp className="text-[#25D366] hover:text-[#1DA851] transition-colors duration-300" />,
  },
  {
    platform: "facebook",
    icon: <FaFacebook className="text-[#1877F2] hover:text-[#145DBF] transition-colors duration-300" />,
  },
  {
    platform: "instagram",
    icon: <FaInstagram className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-300" />,
  },
  {
    platform: "twitter",
    icon: <FaTwitter className="text-[#1DA1F2] hover:text-[#0D8DDC] transition-colors duration-300" />,
  },
  {
    platform: "linkedin",
    icon: <FaLinkedin className="text-[#0A66C2] hover:text-[#084A8C] transition-colors duration-300" />,
  },
  {
    platform: "copy",
    icon: <FaLink className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />,
  },
]



export const icons = [<FiYoutube />, <FaFacebook />, <FaInstagram />, <FaLinkedin />, <LuTwitter />];



export const projectsIcons = [<LuSquareMenu />, <IoHome />, <HiOutlineBuildingOffice2 />, <IoIosDesktop />];

export const serviceCardIcons = [<LuSquareMenu />, <IoIosDesktop />, <CiLock />, <CiCloud />, <FaGraduationCap />, <FaUserFriends />];

export const whyChooseUsCardsIcons = [<MdOutlinePolicy />, <SiProcesswire />, <FaArrowTrendDown />, <GiProcessor />, <FaUserFriends />, <LuSquareMenu />];

export const foundationIcons = [<MdOutlineRemoveRedEye />, <FaBullseye />, <FaRegCompass />, <FaRegCircle />, <FaRegLightbulb />];

export const journeyIcons = [<MdOutlineRocketLaunch />, <IoIosCamera />, <MdOutlineScale />, <MdOutlinePolicy />, <IoIosDesktop />, <FaCode />, <SlBadge />, <HiOutlineBuildingOffice2 />, <IoTrendingUpOutline />];

export const sectorIcons = [<IoHome />, <MdOutlinePolicy />, <FaHandHoldingMedical />, <MdCorporateFare />, <HiOutlineBuildingOffice2 />, <VscLaw />, <FaGraduationCap />, <TbWindElectricity />];

export const supportServiceIcons = [<IoHardwareChipOutline />, <GrCloudSoftware/>, <CiLock />, <CiCloud />, <GiNetworkBars />, <MdOutlineSettingsRemote />
];

export const featureJobIcons = [<FaRegLightbulb />, <FaGraduationCap />, <FaUserFriends />, <FaRunning />];

export const submenuServiceIcons = [<LuSquareMenu />, <IoIosDesktop />, <CiLock />, <CiCloud />, <FiDatabase />, <FaGraduationCap />, <FaUserFriends />, <GiHumanTarget />, <LuCctv />, <FaSatelliteDish />, <FaWifi />, <GrCloudSoftware/>, <CgWebsite />, <SiBmcsoftware />, <FaRegFile />, <MdOutlineSettingsRemote />];

export const submenuSolutionIcons = [<FaRegUser />, <TiMessages />, <CiLock />, <CiGlobe />, <CiCloud />, <FiDatabase />,<RiCustomerService2Fill />, <HiArrowPathRoundedSquare />,  <LuCctv />,  <FaSatelliteDish />, <FaWifi />, <GrCloudSoftware/>, <CgWebsite />,  <SiBmcsoftware />];