import { Sector } from '@/app/admin/components/customer/sector/Sector';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sector | SPIT"
};

const page = () => <Sector />;

export default page