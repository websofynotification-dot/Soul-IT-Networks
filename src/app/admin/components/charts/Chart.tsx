"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { Radio } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const [contacts, setContacts] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactRes] = await Promise.all([fetch("/api/auth/contact-us")]);
        const contactResData = await contactRes.json();
        setContacts(contactResData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const groupByDate = (data: any[]) => {
    const map: Record<string, number> = {};
    data.forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();
      map[date] = (map[date] || 0) + 1;
    });
    return Object.keys(map).map((date) => ({
      date,
      count: map[date],
    }));
  };
  const contactChart = groupByDate(contacts);

  return (
    <div className="p-4">
      <PageBreadcrumb pageTitle="Dashboard" />
      {
        loading ? <div className="flex items-center justify-center">
          <Radio
            visible={true}
            height="150"
            width="150"
            colors={["#942916", "#891503", "#891503"]}
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>

          :
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="bg-primary shadow rounded-lg p-6 cursor-pointer col-span-2" onClick={() => router.push("/admin/contact-us")}>
                <p className="text-white font-semibold">Total Contacts Request</p>
                <h2 className="text-3xl text-white font-bold">{contacts.length}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="bg-white shadow rounded-lg p-4 col-span-2">
                <h3 className="text-lg text-primary font-semibold mb-3">
                  Contact Requests Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={contactChart}>
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#891503"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default DashboardPage;

