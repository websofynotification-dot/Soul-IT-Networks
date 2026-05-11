import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { WebsiteDevelopmentSolutionsPage } from "@/app/(ui)/components/Solutions/Website Development Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/website-development-solutions", text: "Website Development Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Website Development Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <WebsiteDevelopmentSolutionsPage />
    </>
  );
};

export default page;

