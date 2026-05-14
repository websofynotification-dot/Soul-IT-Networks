import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { CampusWideNetworkingSolutionsPage } from "@/app/(ui)/components/Solutions/Campus Wide Networking Solutions";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/campus-wide-networking-solutions", text: "Campus Wide Networking Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Campus Wide Networking Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/campus-wide-networking/campus-wide-networking-banner.avif'
      />
      <CampusWideNetworkingSolutionsPage />
    </>
  );
};

export default page;

