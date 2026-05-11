import Photo from '@/app/admin/components/common/gallery/Photos/Photo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hero Section | RML Pathology"
};

const HeroSection = () => {
    return <Photo flag={true} />
}

export default HeroSection;
