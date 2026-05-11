import { FeatureJob } from '@/app/admin/components/careers/feature-job/FeatureJob';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feature Job | Soul IT Networks"
};

const page = () => {
  return <FeatureJob />
}

export default page