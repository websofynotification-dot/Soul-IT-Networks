import { SoftwareDevelopmentPage } from "@/app/(ui)/components/Services/Software Development";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/software-development", text: "Software Development" },
  ];
  return (
    <>
      <HeroSub
        title="Software Development"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <SoftwareDevelopmentPage />
    </>
  );
};

export default page;
