import { UseCase } from '@/app/admin/components/solutions/use-case/UseCase';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Usecase | SOul IT Networks"
};

const page = () => <UseCase />;

export default page