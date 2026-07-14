import { AboutUs } from '@/app/(ui)/components/SoulIt/AboutUs';
import HeroSub from '../../../components/Shared Component/HeroSub';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/sout-it/about-us", text: "About Us" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='about-us/about-us-banner.jpg'
      />
      <AboutUs />
    </>
  );
};

export default page;
