import { Foundation } from '@/app/admin/components/about-us/foundation/Foundation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Foundation | Soul IT Networks",
  description:
    "Discover the vision, values, and foundation that drive Soul IT Networks to deliver technology excellence.",
};

const page = () => {
  return <Foundation />
}

export default page