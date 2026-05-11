import { SupportService } from '@/app/admin/components/support/support-service/SupportService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support | SPIT"
};

const page = () => {
  return <SupportService/>
}

export default page