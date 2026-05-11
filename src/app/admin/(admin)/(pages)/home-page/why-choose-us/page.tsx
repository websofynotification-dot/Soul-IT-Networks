import { WhyChooseUs } from '@/app/admin/components/home-page/why-choose-us/WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Choose Us | RML"
};

const page = () => {
  return <WhyChooseUs />
}

export default page