import { CompanyCredential } from '@/app/admin/components/soul-it/about-us/company-credential/CompanyCredential';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Company Credentials | Soul IT Networks",
  description:
    "Review our certifications, expertise, industry experience, and credentials that establish trust and reliability.",
};

const page = () => <CompanyCredential />;
export default page