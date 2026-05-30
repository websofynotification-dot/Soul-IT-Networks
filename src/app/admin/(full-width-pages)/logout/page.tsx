import { Metadata } from "next";
import Logout from "../../components/auth/Logout";

export const metadata: Metadata = {
  title: "Logout | Soul IT Networks",
  description:
    "You have successfully logged out of your Soul IT Networks account. Sign in again to access your dashboard, support services, and account information.",
};

export default function LogOut() {
  return <Logout />
}