
import { WhySoulIT } from '@/app/admin/components/home-page/why-soul-it/WhySoulIT';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Why Soul IT Networks",
    description:
        "Discover our expertise, customer-focused approach, and commitment to delivering innovative technology solutions.",
};

const page = () => {
    return <WhySoulIT />
}

export default page