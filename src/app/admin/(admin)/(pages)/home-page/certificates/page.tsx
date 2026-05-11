import { OurCerificates } from '@/app/admin/components/home-page/our-certificats/OurCertificates';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cerificates | SPIT"
};

const RmlWelcomeSection = () => {
    return <OurCerificates />
}

export default RmlWelcomeSection
