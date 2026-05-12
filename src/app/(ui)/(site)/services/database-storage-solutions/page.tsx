import { DatabaseAndStorageSolutionsPage } from "@/app/(ui)/components/Services/Database & Storage Solutions";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/database-storage-solutions", text: "Database & Storage Solutions" },
  ];
  return (
    <>
      <HeroSub
        title="Database & Storage Solutions"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/database-storage-solutions/database-storage-solutions-banner.jpg'
      />
      <DatabaseAndStorageSolutionsPage />
    </>
  );
};

export default page;
