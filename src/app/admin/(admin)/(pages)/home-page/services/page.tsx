import { OurService } from '@/app/admin/components/home-page/our-services/OurService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services | Soul IT Networks",
  description:
    "Discover comprehensive IT services including system integration, cybersecurity, cloud solutions, surveillance, networking, and software development.",
};

const page = () => {
  return <OurService />
}
export default page