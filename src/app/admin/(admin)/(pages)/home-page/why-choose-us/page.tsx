import { WhyChooseUs } from '@/app/admin/components/home-page/why-choose-us/WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Choose Us | Soul IT Networks",
  description:
    "Learn why businesses trust Soul IT Networks for reliable IT infrastructure, security, cloud, and digital transformation solutions.",
};

const page = () => {
  return <WhyChooseUs />
}

export default page