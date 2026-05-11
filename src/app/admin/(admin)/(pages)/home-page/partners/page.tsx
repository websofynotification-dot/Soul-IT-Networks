import { OurPartners } from '@/app/admin/components/home-page/our-partners/OurPartners';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Partners | SPIT"
};

const page = () => {
  return <OurPartners/>
}

export default page