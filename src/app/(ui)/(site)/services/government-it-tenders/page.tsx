import { GovernmentItTendersPage } from "@/app/(ui)/components/Services/Government IT Tenders";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/government-it-tenders", text: "Government IT Tenders" },
  ];
  return (
    <>
      <HeroSub
        title="Government IT Tenders"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/goveronment-it-tenders/goveronment-it-tenders-banner.avif'
      />
      <GovernmentItTendersPage />
    </>
  );
};

export default page;
