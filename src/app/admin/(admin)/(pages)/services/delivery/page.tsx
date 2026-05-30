import { Delivery } from '@/app/admin/components/services/delivery/Delivery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solution Delivery | Soul IT Networks",
  description:
    "From planning to implementation, we deliver reliable and scalable IT solutions that drive business growth.",
};

const page = () => <Delivery />;

export default page