import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { EndUserComputingPage } from "@/app/(ui)/components/Solutions/End User Computing";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/end-user-computing", text: "End User Computing" },
  ];
  return (
    <>
      <HeroSub
        title="End User Computing"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/end-user-computing/end-user-computing-banner.avif'
      />
      <EndUserComputingPage />
    </>
  );
};

export default page;

