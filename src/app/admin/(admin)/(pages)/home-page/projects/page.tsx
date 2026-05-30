import { Projects } from '@/app/admin/components/home-page/projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Projects | Soul IT Networks",
    description:
        "Explore successful IT infrastructure, networking, cybersecurity, surveillance, and software development projects delivered by Soul IT Networks.",
};

const page = () => {
    return <Projects />
}

export default page
