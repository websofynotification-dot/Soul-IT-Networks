import { OurService } from '@/app/admin/components/home-page/our-services/OurService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service | SPIT"
};

const page = () => {
  return <OurService />
}
export default page