import { NetworkAndCyberSecurityPage } from "@/app/(ui)/components/Services/Network & Cyber Security";
import HeroSub from "@/app/(ui)/components/Shared Component/HeroSub";
export const dynamic = 'force-dynamic';

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/services/network-cyber-security", text: "Network & Cyber Security" },
    ];
    
    return (
        <>
            <HeroSub
                title="Network & Cyber Security"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={breadcrumbLinks}
                imageSrc='services/network-cyber-security/network-cyber-security-banner.jpg'
            />
            <NetworkAndCyberSecurityPage />
        </>
    );
};

export default page;
