import { Faq } from '@/app/admin/components/faq/Faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Faq | RML"
};

const page = () => {
  return <Faq/>
}

export default page