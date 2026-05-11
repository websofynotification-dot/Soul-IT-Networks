import { RemoteCcTvMonitoringPage } from "@/app/(ui)/components/Services/Remote CCTV Monitoring";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/remote-cctv-monitoring", text: "Remote CCTV Monitoring" },
  ];
  return (
    <>
      <HeroSub
        title="Remote CCTV Monitoring"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <RemoteCcTvMonitoringPage />
    </>
  );
};

export default page;
