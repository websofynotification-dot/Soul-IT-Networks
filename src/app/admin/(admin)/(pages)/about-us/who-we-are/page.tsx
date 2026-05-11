import { WhoWeAre } from '@/app/admin/components/about-us/who-we-are/WhoWeAre';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who We Are | SPIT"
};

const page = () => {
  return <WhoWeAre/>
}

export default page