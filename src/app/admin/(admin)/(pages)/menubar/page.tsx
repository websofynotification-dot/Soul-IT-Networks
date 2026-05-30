import { Menubar } from '@/app/admin/components/menubar/Menubar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Menu Navigation | Soul IT Networks",
    description:
        "Explore IT infrastructure, cybersecurity, cloud, networking, surveillance, and software development services.",
};

const page = () => {
    return <Menubar />
}

export default page
