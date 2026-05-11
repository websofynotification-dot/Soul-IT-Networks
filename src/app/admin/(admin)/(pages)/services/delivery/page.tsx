import { Delivery } from '@/app/admin/components/services/delivery/Delivery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Delivery | Soul IT Networks"
};

const page = () => <Delivery />;

export default page