
import Collaborator from '@/app/admin/components/collaborator/Collaborator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Collaborator | RML"
};

const page = () => {
  return <Collaborator/>
}

export default page


