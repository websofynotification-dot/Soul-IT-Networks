import { SystemIntegrationPage } from "@/app/(ui)/components/Services/System Integration";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/system-integration", text: "System Integration" },
  ];
  return (
    <>
      <HeroSub
        title="System Integration"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/system-integration/system-integration-banner.jpg'
      />
      <SystemIntegrationPage />
    </>
  );
};

export default page;
