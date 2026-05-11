import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { BusinessContinuityAndDrPage } from "@/app/(ui)/components/Solutions/Business Continuity & DR";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/business-continuity-dr", text: "Business Continuity & DR" },
  ];
  return (
    <>
      <HeroSub
        title="Business Continuity & DR"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <BusinessContinuityAndDrPage />
    </>
  );
};

export default page;

