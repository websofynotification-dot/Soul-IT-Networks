import { Projects } from '@/app/admin/components/home-page/projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | SPIT"
};

const page = () => {
    return <Projects />
}

export default page
