import { Sector } from '@/app/admin/components/customer/sector/Sector';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industries We Serve | Soul IT Networks",
  description:
    "Delivering technology solutions across education, government, healthcare, enterprise, and commercial sectors.",
};

const page = () => <Sector />;

export default page