import { Category } from '@/app/admin/components/category/Category';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Project Category | Soul IT Networks"
};

const page = () => {
  return <Category/>
}

export default page