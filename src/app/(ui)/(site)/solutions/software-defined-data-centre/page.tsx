import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { SoftwareDefinedDataCentrePage } from "@/app/(ui)/components/Solutions/Software Defined Datacentre";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/software-defined-data-centre", text: "Software Defined Data Centre" },
  ];
  return (
    <>
      <HeroSub
        title="Software Defined Data Centre"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/software-defined-datacentre/software-defined-datacentre-banner.avif'
      />
      <SoftwareDefinedDataCentrePage />
    </>
  );
};

export default page;

