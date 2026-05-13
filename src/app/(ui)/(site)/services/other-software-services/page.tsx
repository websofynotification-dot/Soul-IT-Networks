import { OtherSoftwareServicesPage } from "@/app/(ui)/components/Services/Other Software Services";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/other-software-services", text: "Other Software Services" },
  ];
  return (
    <>
      <HeroSub
        title="Other Software Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/other-software-services/other-software-services-banner.jpg'
      />
      <OtherSoftwareServicesPage />
    </>
  );
};

export default page;
