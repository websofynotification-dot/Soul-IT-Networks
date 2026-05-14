import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { AdvancedSecuritySolutionsPage } from "@/app/(ui)/components/Solutions/Advanced Security Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/advanced-security-solutions", text: "Advanced Security Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Advanced Security Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/advanced-security/advanced-security-banner.avif'
      />
      <AdvancedSecuritySolutionsPage />
    </>
  );
};

export default page;

