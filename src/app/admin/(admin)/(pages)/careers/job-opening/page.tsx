import { JobOpening } from '@/app/admin/components/careers/job-opening/JobOpening';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Current Job Openings | Soul IT Networks",
  description:
    "Explore exciting career opportunities in IT infrastructure, cybersecurity, cloud, networking, and software development.",
};

const page = () => {
  return <JobOpening />
}

export default page