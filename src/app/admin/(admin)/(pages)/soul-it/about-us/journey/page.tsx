import { Journey } from '@/app/admin/components/soul-it/about-us/journey/Journey';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Journey | Soul IT Networks",
  description:
    "Explore the growth, milestones, and achievements that have shaped Soul IT Networks into a trusted technology partner.",
};

const page = () => <Journey />;

export default page