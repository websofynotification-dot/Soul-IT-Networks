import { Overview } from '@/app/admin/components/services/overview/Overview';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Service Overview | Soul IT Networks",
    description:
        "Understand our comprehensive portfolio of IT infrastructure, security, cloud, and software services.",
};

const page = () => <Overview />;

export default page