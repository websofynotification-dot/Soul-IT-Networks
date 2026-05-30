import { OurPartners } from '@/app/admin/components/home-page/our-partners/OurPartners';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Partners | Soul IT Networks",
  description:
    "Meet our trusted technology partners and industry-leading vendors supporting innovative IT solutions.",
};

const page = () => {
  return <OurPartners />
}

export default page