import { WebsiteDevelopmentPage } from "@/app/(ui)/components/Services/Website Development";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/website-development", text: "Website Development" },
  ];
  return (
    <>
      <HeroSub
        title="Website Development"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/website-development/website-development-banner.avif'
      />
      <WebsiteDevelopmentPage />
    </>
  );
};

export default page;
