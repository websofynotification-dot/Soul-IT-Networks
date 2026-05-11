import { PartnersPage } from '../../components/Partners';
import HeroSub from '../../components/Shared Component/HeroSub';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/partners", text: "Partners" },
  ];
  return (
    <>
      <HeroSub
        title="Partners"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <PartnersPage />
    </>
  );
};

export default page;
