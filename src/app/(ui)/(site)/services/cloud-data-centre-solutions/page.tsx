import { CloudAndDataCentreSolutionsPage } from "@/app/(ui)/components/Services/Cloud & Data Centre Solutions";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/cloud-data-centre-solutions", text: "Cloud & Data Centre Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Cloud & Data Centre Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/cloud-data-centre-solutions/cloud-data-centre-solutions-banner.jpg'
      />
      <CloudAndDataCentreSolutionsPage />
    </>
  );
};

export default page;
