import { Topbar } from '@/app/admin/components/topbar/Topbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Top Bar | Soul IT Networks",
  description:
    "Quick access to navigation, support, contact information, and key resources from Soul IT Networks.",
};

const page = () => {
  return <Topbar />
}

export default page