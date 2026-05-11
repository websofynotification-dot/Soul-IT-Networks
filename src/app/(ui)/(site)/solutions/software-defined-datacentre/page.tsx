import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { SoftwareDefinedDataCentrePage } from "@/app/(ui)/components/Solutions/Software Defined Datacentre";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/software-defined-datacentre", text: "Software Defined Datacentre" },
  ];
  return (
    <>
      <HeroSub
        title="Software Defined Datacentre"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='partners/partners-banner.jpg'
      />
      <SoftwareDefinedDataCentrePage />
    </>
  );
};

export default page;

