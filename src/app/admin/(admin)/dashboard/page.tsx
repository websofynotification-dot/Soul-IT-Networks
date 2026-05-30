import Chart from '@/app/admin/components/charts/Chart';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Soul IT Networks",
  description:
    "Access your Soul IT Networks dashboard to manage projects, services, support requests, and account information.",
};

export default function page() {
  return <Chart />;
}
