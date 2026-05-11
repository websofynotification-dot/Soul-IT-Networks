import HeroSub from "../../components/Shared Component/HeroSub";
import { Contact } from "../../components/Contact";

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact-us", text: "Contact Us" },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc="contact-page/contact-banner.avif"
      />
      <Contact />
    </>
  );
};

export default page;
