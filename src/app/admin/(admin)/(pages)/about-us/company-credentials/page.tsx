import { CompanyCredential } from '@/app/admin/components/about-us/company-credential/CompanyCredential';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Company Credential | SPIT"
};

const page = () => {
  return <CompanyCredential/>
}

export default page