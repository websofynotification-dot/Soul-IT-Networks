import { Overview } from '@/app/admin/components/services/overview/Overview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Overview | Soul IT Networks",
  description:
    "Get an overview of our technology services, expertise, solutions, and business capabilities.",
};

const page = () => <Overview/>;

export default page