import Brochure from '@/app/admin/components/brochure/Brochure';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brochure | RSVI"
};

const page = () => {
  return <Brochure/>
}

export default page