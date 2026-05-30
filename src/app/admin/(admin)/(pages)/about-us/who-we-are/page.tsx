import { WhoWeAre } from '@/app/admin/components/about-us/who-we-are/WhoWeAre';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who We Are | Soul IT Networks",
  description:
    "Learn about Soul IT Networks, a trusted provider of IT infrastructure, cybersecurity, cloud, and software solutions.",
};

const page = () => {
  return <WhoWeAre />
}

export default page