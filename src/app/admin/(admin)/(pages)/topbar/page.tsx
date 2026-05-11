import { Topbar } from '@/app/admin/components/topbar/Topbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Topbar | RML Pathalogy"
};

const page = () => {
  return <Topbar/>
}

export default page