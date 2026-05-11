import { CareersPage } from "../../components/Careers";
import HeroSub from "../../components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const Blog = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/careers", text: "Careers" },
    ];
    return (
        <>
            <HeroSub
                title="Careers"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc="career/career-banner.jpg"
            />
            <CareersPage />
        </>
    );
};

export default Blog;