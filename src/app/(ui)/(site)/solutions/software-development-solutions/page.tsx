import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { SoftwareDevelopmentSolutionsPage } from "@/app/(ui)/components/Solutions/Software Development Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/software-development-solutions", text: "Software Development Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Software Development Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <SoftwareDevelopmentSolutionsPage />
    </>
  );
};

export default page;

