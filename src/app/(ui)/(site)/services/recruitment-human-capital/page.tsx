import { RecruitmentAndHumanCapitalSolutionsPage } from "@/app/(ui)/components/Services/Recruitment & Human Capital Solutions";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/recruitment-human-capital", text: "Recruitment & Human Capital Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Recruitment & Human Capital Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <RecruitmentAndHumanCapitalSolutionsPage />
    </>
  );
};

export default page;
