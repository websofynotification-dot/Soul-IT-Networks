import { Approach } from '@/app/admin/components/services/approach/Approach';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Approach | Soul IT Networks",
    description:
        "Learn about our strategic approach to planning, implementing, and managing successful technology solutions.",
};

const page = () => <Approach />;

export default page