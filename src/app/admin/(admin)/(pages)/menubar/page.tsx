import { Menubar } from '@/app/admin/components/menubar/Menubar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Menubar | SPIT"
};

const page = () => {
    return <Menubar />
}

export default page
