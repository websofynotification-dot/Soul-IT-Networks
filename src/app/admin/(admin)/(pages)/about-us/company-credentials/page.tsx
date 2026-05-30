import { CompanyCredential } from '@/app/admin/components/about-us/company-credential/CompanyCredential';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Company Credentials | Soul IT Networks",
  description:
    "Review our certifications, expertise, industry experience, and credentials that establish trust and reliability.",
};

const page = () => {
  return <CompanyCredential />
}

export default page