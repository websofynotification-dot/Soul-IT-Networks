import { Journey } from '@/app/admin/components/about-us/journey/Journey';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Journey | SPIT"
};

const page = () => {
  return <Journey/>
}

export default page