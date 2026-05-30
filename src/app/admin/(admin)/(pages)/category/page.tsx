import { Category } from '@/app/admin/components/category/Category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Categories | Soul IT Networks",
  description:
    "Browse technology service categories including infrastructure, cybersecurity, cloud, networking, and software solutions.",
};

const page = () => {
  return <Category/>
}

export default page