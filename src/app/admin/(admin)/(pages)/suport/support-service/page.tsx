import { SupportService } from '@/app/admin/components/support/support-service/SupportService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support Services | Soul IT Networks",
  description:
    "Get professional support services for IT infrastructure, networking, cybersecurity, cloud, and software solutions.",
};

const page = () => {
  return <SupportService/>
}

export default page