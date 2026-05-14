import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { EnterpriseSoftwareServicesPage } from "@/app/(ui)/components/Solutions/Enterprise Software Services";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/enterprise-software-services", text: "Enterprise Software Service" },
  ];
  return (
    <>
      <HeroSub
        title="Enterprise Software Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/enterprise-software/enterprise-software-banner.jpg'
      />
      <EnterpriseSoftwareServicesPage />
    </>
  );
};

export default page;

