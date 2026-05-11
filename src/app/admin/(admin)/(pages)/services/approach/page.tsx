import { Approach } from '@/app/admin/components/services/approach/Approach';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Approach | Soul IT Networks"
};

const page = () => <Approach />;

export default page