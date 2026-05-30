import { WhyChooseSoulIt } from '@/app/admin/components/services/why-choose-soul-it/WhyChooseSoulIt';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Choose Soul IT Networks",
  description:
    "Partner with a trusted technology company delivering innovative, secure, and scalable IT solutions.",
};

const page = () => <WhyChooseSoulIt />;

export default page