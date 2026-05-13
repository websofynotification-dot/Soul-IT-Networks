import { CampusWideWiFiRolloutPage } from "@/app/(ui)/components/Services/Campus Wide WiFi Rollout";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/campus-wide-wifi-rollout", text: "Campus Wide WiFi Rollout" },
  ];
  return (
    <>
      <HeroSub
        title="Campus Wide WiFi Rollout"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/campus-wide-wifi-rollout/campus-wide-wifi-rollout-banner.avif'
      />
      <CampusWideWiFiRolloutPage />
    </>
  );
};

export default page;
