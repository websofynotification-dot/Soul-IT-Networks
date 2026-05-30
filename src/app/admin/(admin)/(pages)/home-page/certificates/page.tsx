import { OurCerificates } from '@/app/admin/components/home-page/our-certificats/OurCertificates';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Certifications | Soul IT Networks",
    description:
        "View the certifications, credentials, and industry recognitions that demonstrate our commitment to excellence.",
};

const page = () => {
    return <OurCerificates />
}

export default page
