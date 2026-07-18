import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter, FaGraduationCap, FaUserFriends, FaBullseye, FaRegLightbulb, FaRunning, FaWifi, FaRegUser, FaSatelliteDish, FaRegFile, FaNetworkWired, FaBuilding, FaIndustry, FaHeart, FaAward } from "react-icons/fa";
import { MdBusinessCenter, MdCorporateFare, MdDevices, MdOutlinePolicy, MdOutlineRemoveRedEye, MdOutlineRocketLaunch, MdOutlineScale, MdOutlineSettingsRemote, MdSecurity, MdVerified } from "react-icons/md";
import { FaArrowTrendDown, FaCode, FaHandHoldingMedical, FaLandmark, FaLink, FaRegCircle, FaRegCompass } from "react-icons/fa6";
import { FiDatabase, FiVideo, FiYoutube } from "react-icons/fi";
import { LuCctv, LuNetwork, LuSquareMenu, LuTwitter } from "react-icons/lu";
import { IoIosCamera, IoIosDesktop } from "react-icons/io";
import { GrCloudSoftware } from "react-icons/gr";
import { IoHardwareChipOutline, IoHome, IoTrendingUpOutline } from "react-icons/io5";
import { HiArrowPathRoundedSquare, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CiCloud, CiGlobe, CiLock } from "react-icons/ci";
import { SiBmcsoftware, SiProcesswire } from "react-icons/si";
import { GiHumanTarget, GiNetworkBars, GiProcessor } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { VscLaw } from "react-icons/vsc";
import { TbCloudComputing, TbWindElectricity } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { RiBuilding2Line, RiComputerFill, RiCustomerService2Fill, RiCustomerService2Line, RiGovernmentLine, RiLineChartLine, RiLinksLine, RiNodeTree, RiServerLine, RiSettings3Line, RiShieldCheckLine, RiShieldKeyholeLine, RiStackLine, RiTeamFill } from "react-icons/ri";
import { PiPresentationChart } from "react-icons/pi";
import { AiOutlineRobot } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";

export const socialMediaIcon = [
  <FaFacebook />,
  <FaInstagram />,
  <FaLinkedin />,
  <LuTwitter />,
  <FiYoutube />
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
];

export const projectsIcons = [<RiBuilding2Line />, <RiShieldCheckLine />, <LuCctv />, <RiShieldKeyholeLine />];

export const serviceCardIcons = [<RiServerLine />, <FaNetworkWired />, <RiShieldKeyholeLine />, <TbCloudComputing />, <LuCctv />, <FiVideo />, <PiPresentationChart/>, <RiNodeTree/>, <AiOutlineRobot/>];

export const whyChooseUsCardsIcons = [<RiSettings3Line />, <RiGovernmentLine />, <RiStackLine />, <RiLinksLine />, <RiCustomerService2Line />, <RiLineChartLine />];

export const foundationIcons = [<MdOutlineRemoveRedEye />, <FaBullseye />, <FaHeart />, <FaBuilding />, <FaAward />];


export const sectorIcons = [<RiGovernmentLine />, <RiServerLine />, <RiShieldKeyholeLine />, <RiTeamFill />, <MdDevices />, <VscLaw />, <FaGraduationCap />, <TbWindElectricity />];

export const supportServiceIcons = [<IoHardwareChipOutline />, <GrCloudSoftware />, <CiLock />, <TbCloudComputing />, <GiNetworkBars />, <MdOutlineSettingsRemote />
];

export const featureJobIcons = [<FaRegLightbulb />, <FaGraduationCap />, <FaUserFriends />, <FaRunning />];

export const submenuServiceIcons = [<LuSquareMenu />, <IoIosDesktop />, <CiLock />, <CiCloud />, <FiDatabase />, <FaGraduationCap />, <FaUserFriends />, <GiHumanTarget />, <LuCctv />, <FaSatelliteDish />, <FaWifi />, <GrCloudSoftware />, <CgWebsite />, <SiBmcsoftware />, <FaRegFile />, <MdOutlineSettingsRemote />];

export const submenuSolutionIcons = [<FaRegUser />, <TiMessages />, <CiLock />, <CiGlobe />, <CiCloud />, <FiDatabase />, <RiCustomerService2Fill />, <HiArrowPathRoundedSquare />, <LuCctv />, <FaSatelliteDish />, <FaWifi />, <GrCloudSoftware />, <CgWebsite />, <SiBmcsoftware />];

export const submenuSoulItIcons = [<HiOutlineBuildingOffice2 />, <RiTeamFill/>];