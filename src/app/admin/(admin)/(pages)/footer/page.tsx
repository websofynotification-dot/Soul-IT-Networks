import { Footer } from '@/app/admin/components/footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Footer Information | Soul IT Networks",
  description:
    "Access company information, services, support resources, and contact details from Soul IT Networks.",
};

const page = () => {
  return <Footer/>
}

export default page