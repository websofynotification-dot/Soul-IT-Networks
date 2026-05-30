import { UseCase } from '@/app/admin/components/solutions/use-case/UseCase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Use Cases | Soul IT Networks",
  description:
    "Explore real-world use cases showcasing how our technology solutions solve business challenges.",
};

const page = () => <UseCase />;

export default page;