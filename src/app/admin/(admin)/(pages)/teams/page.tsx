import { Teams } from "@/app/admin/components/soul-it/teams/Teams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teams | Soul IT Networks",
  description:
    "Explore successful IT infrastructure, networking, cybersecurity, surveillance, and software development projects delivered by Soul IT Networks.",
};

const page = () => <Teams />;

export default page;
