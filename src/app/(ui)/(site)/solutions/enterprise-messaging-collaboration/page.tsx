import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
import { EnterpriseMessagingAndCollaborationPage } from "@/app/(ui)/components/Solutions/Enterprise Messaging & Collaboration";
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/solutions/enterprise-messaging-collaboration", text: "Enterprise Messaging & Collaboration" },
  ];
  return (
    <>
      <HeroSub
        title="Enterprise Messaging & Collaboration"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='solutions/enterprise-messaging-collaboration/enterprise-messaging-collaboration-banner.avif'
      />
      <EnterpriseMessagingAndCollaborationPage />
    </>
  );
};

export default page;

