import { Overview } from '@/app/admin/components/services/overview/Overview';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Overview | SOul IT Networks"
};

const page = () => <Overview />;

export default page