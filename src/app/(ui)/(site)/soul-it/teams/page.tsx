import HeroSub from '../../../components/Shared Component/HeroSub';
import { Teams } from '@/app/(ui)/components/SoulIt/Team';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/soul-it/teams", text: "Teams" },
  ];
  return (
    <>
      <HeroSub
        title="Teams"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='about-us/about-us-banner.jpg'
      />
      <Teams />
    </>
  );
};

export default page;
