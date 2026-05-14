import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { ProfessionalAndConsultingServicesPage } from "@/app/(ui)/components/Solutions/Professional & Consulting Services";
export const dynamic = 'force-dynamic';

const page = () => {

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/professional-consulting-services", text: "Professional & Consulting Services" },
  ];
  
  return (
    <>
      <HeroSub
        title="Professional & Consulting Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/professional-consulting/professional-consulting-banner.jpg'
      />
      <ProfessionalAndConsultingServicesPage />
    </>
  );
};

export default page;

