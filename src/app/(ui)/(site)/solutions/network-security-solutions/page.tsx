import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { NetworkSecuritySolutionsPage } from "@/app/(ui)/components/Solutions/Network Security Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/network-security-solutions", text: "Network Security Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Network Security Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <NetworkSecuritySolutionsPage />
    </>
  );
};

export default page;

