import { CustomersPage } from '../../components/Customers';
import HeroSub from '../../components/Shared Component/HeroSub';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/customers", text: "Customers" },
  ];
  return (
    <>
      <HeroSub
        title="Customers"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='customers/customers-banner.jpg'
      />
      <CustomersPage />
    </>
  );
};

export default page;
