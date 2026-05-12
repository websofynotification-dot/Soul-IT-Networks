import { OutsourcingAndPlacementServicesPage } from "@/app/(ui)/components/Services/Outsourcing & Placement Services";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
    
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/outsourcing-placement-services", text: "Outsourcing & Placement Services" },
  ];

  return (
    <>
      <HeroSub
        title="Outsourcing & Placement Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/outsourcing-placement-services/outsourcing-placement-services-banner.jpg'
      />
      <OutsourcingAndPlacementServicesPage />
    </>
  );
};

export default page;
