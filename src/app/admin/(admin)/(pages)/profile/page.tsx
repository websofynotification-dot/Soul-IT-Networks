import UserCard from "@/app/admin/components/user-profile/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile | Soul IT Networks",
  description:
    "Manage your profile, account settings, preferences, and service information securely.",
};

export default function page() {
  return <UserCard />
}
