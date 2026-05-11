import { ManageItServicesPage } from "@/app/(ui)/components/Services/Managed IT Services";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/managed-it-services", text: "Managed IT Services" },
  ];
  return (
    <>
      <HeroSub
        title="Managed IT Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/manage-it-services/manage-it-services-banner.jpg'
      />
      <ManageItServicesPage />
    </>
  );
};

export default page;
