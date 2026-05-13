import { CampusWideNetworkingRolloutPage } from "@/app/(ui)/components/Services/Campus Wide Networking Rollout";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/campus-wide-networking-rollout", text: "Campus Wide Networking Rollout" },
  ];
  return (
    <>
      <HeroSub
        title="Campus Wide Networking Rollout"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/campus-wide-networking-rollout/campus-wide-networking-rollout-banner.avif'
      />
      <CampusWideNetworkingRolloutPage />
    </>
  );
};

export default page;
