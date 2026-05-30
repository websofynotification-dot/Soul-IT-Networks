import Photo from '@/app/admin/components/common/gallery/Photos/Photo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Infrastructure & Digital Solutions | Soul IT Networks",
  description:
    "Empowering businesses with innovative IT infrastructure, cybersecurity, cloud, networking, and software development solutions.",
};

const HeroSection = () => {
    return <Photo flag={true} />
}

export default HeroSection;
