import { Foundation } from '@/app/admin/components/about-us/foundation/Foundation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Foundation | SPIT"
};

const page = () => {
  return <Foundation/>
}

export default page