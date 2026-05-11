import { JobOpening } from '@/app/admin/components/careers/job-opening/JobOpening';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Job Opening | Soul IT Networks",
};

const page = () => {
  return <JobOpening/>
}

export default page