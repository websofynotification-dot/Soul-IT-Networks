import { FooterModel } from '@/app/admin/components/footer/FooterModel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Footer Information | Soul IT Networks",
  description:
    "Access company information, services, support resources, and contact details from Soul IT Networks.",
};

const page = () => {
  return <FooterModel/>
}

export default page