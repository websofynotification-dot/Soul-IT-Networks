import { SupportAddOn } from '@/app/admin/components/support/support-add-on/SupportAddOn';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Support Add-On Services | Soul IT Networks",
    description: "Enhance your technology investments with flexible support add-ons, maintenance, and managed services.",
};

const page = () => {
    return <SupportAddOn />
}

export default page
