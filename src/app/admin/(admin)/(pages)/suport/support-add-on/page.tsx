import { SupportAddOn } from '@/app/admin/components/support/support-add-on/SupportAddOn';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Support Add On | SPIT"
};

const page = () => {
    return <SupportAddOn />
}

export default page
