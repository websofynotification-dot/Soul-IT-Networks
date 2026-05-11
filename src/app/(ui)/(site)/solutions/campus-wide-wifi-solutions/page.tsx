import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { CampusWideWiFiSolutionsPage } from "@/app/(ui)/components/Solutions/Campus Wide WiFi Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/campus-wide-wifi-solutions", text: "Campus Wide WiFi Solutions" },
  ];
  return (
    <>1
      <HeroSub
        title="Campus Wide WiFi Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <CampusWideWiFiSolutionsPage />
    </>
  );
};

export default page;

