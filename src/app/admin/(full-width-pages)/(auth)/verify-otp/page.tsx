import VerifyOtpPage from "@/app/admin/components/auth/VerifyOtp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify OTP | Soul IT Networks",
  description: "Verify your one-time password (OTP) to securely authenticate your Soul IT Networks account."
};

export default function page() {
  return <VerifyOtpPage />
}
