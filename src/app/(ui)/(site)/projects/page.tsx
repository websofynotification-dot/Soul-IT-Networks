import { ProjectPage } from '../../components/Projects';
import HeroSub from '../../components/Shared Component/HeroSub';
export const dynamic = 'force-dynamic';

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
  ];
  return (
    <>
      <HeroSub
        title="Projects"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
        imageSrc='projects/projects-banner.jpg'
      />
      <ProjectPage />
    </>
  );
};

export default page;
