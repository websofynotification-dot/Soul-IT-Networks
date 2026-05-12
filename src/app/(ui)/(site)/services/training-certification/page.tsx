import { TrainingAndCertificationPage } from "@/app/(ui)/components/Services/Training & Certification";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/training-certification", text: "Training & Certification" },
  ];
  return (
    <>
      <HeroSub
        title="Training & Certification"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='services/training-certification/training-certification-banner.jpg'
      />
      <TrainingAndCertificationPage />
    </>
  );
};

export default page;
