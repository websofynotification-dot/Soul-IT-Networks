import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { CcTvAndSurveillanceSolutionsPage } from "@/app/(ui)/components/Solutions/CCTV & Surveillance Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/cctv-surveillance-solutions", text: "CCTV & Surveillance Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="CCTV & Surveillance Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <CcTvAndSurveillanceSolutionsPage />
    </>
  );
};

export default page;

