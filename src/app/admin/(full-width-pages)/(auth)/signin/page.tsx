
import SignInForm from "@/app/admin/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Soul IT Networks",
  description:
    "Securely sign in to your Soul IT Networks account to access dashboards, project information, support services, and account management tools.",
};

export default function page() {
  return <SignInForm />;
}
