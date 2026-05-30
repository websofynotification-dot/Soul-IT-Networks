import ResetPassword from '@/app/admin/components/auth/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reset Password | Soul IT Networks",
  description: "Reset your Soul IT Networks account password securely and regain access to your account."
};

const page = () => {
  return <ResetPassword />
}

export default page