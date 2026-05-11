import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { CloudAndDataCentreConsultingPage } from "@/app/(ui)/components/Solutions/Cloud & Datacentre Consulting";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/cloud-datacentre-consulting", text: "Cloud & Datacentre Consulting" },
  ];
  return (
    <>
      <HeroSub
        title="Cloud & Datacentre Consulting"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <CloudAndDataCentreConsultingPage />
    </>
  );
};

export default page;

