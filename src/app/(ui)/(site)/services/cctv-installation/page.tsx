import { CCTVInstallationPage } from "@/app/(ui)/components/Services/CCTV Installation";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/cctv-installation", text: "CCTV Installation" },
  ];
  return (
    <>
      <HeroSub
        title="CCTV Installation"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <CCTVInstallationPage />
    </>
  );
};

export default page;
