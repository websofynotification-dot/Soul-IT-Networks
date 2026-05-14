import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { CloudAndDataCentreConsultingPage } from "@/app/(ui)/components/Solutions/Cloud & Datacentre Consulting";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/cloud-data-centre-consulting", text: "Cloud & Data Centre Consulting" },
  ];
  return (
    <>
      <HeroSub
        title="Cloud & Data Centre Consulting"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/cloud-datacentre-consulting/cloud-datacentre-consulting-banner.jpg'
      />
      <CloudAndDataCentreConsultingPage />
    </>
  );
};

export default page;

