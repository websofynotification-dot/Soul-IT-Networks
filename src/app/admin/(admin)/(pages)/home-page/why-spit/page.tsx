
import { WhySPIT } from '@/app/admin/components/home-page/why-spit/WhySPIT';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "How Book Appointment | RML"
};

const page = () => {
    return <WhySPIT />
}

export default page