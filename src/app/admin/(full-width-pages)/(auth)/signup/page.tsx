import SignUpForm from "@/app/admin/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Soul IT Networks",
  description:
    "Create your Soul IT Networks account to access technology services, project updates, support resources, and business solutions.",
};

export default function page() {
  return <SignUpForm />;
}
