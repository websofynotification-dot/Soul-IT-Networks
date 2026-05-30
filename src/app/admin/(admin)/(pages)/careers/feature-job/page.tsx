import { FeatureJob } from '@/app/admin/components/careers/feature-job/FeatureJob';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Career Benefits | Soul IT Networks",
  description:
    "Discover the benefits, growth opportunities, and professional development offered at Soul IT Networks.",
};

const page = () => {
  return <FeatureJob />
}

export default page