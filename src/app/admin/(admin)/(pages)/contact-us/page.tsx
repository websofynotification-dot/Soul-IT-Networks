import ContactUs from '@/app/admin/components/contact-us/contact-us';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Soul IT Networks",
  description:
    "Connect with Soul IT Networks for IT infrastructure, cybersecurity, cloud, networking, and software development services.",
};

const page = () => {
  return <ContactUs/>
}

export default page