import HeroSub from '../../components/Shared Component/HeroSub';
import { SupportPage } from '../../components/Support';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/support", text: "Support" },
  ];
  return (
    <>
      <HeroSub
        title="Support"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='support/support-banner.jpg'
      />
      <SupportPage />
    </>
  );
};

export default page;
