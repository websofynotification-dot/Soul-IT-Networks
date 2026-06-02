"use client";
import { useEffect, useState } from "react";
import { Form, Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import { FooterModel } from "./FooterModel";
import Tooltip from "../common/Tooltip";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { footer } from "@/types/footerContext";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [data, setData] = useState<footer[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: footer } | null>(null);
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const fetchData = async () => {
    const internshipRes = await fetch("/api/auth/footer");
    const internshipJson = await internshipRes.json();
    setData(internshipJson.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<footer>;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/footer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/footer/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/footer/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<footer>;

      if (res.ok) {
        showTooltip({ message: data.message ?? "Success", type: "success" });
      } else {
        showTooltip({ message: data.message ?? "Something went wrong", type: "error" });
      }
    } catch (error) {
      console.log("Internal Server Error ", error)
      showTooltip({ message: "Internal Server Error", type: "error" });
    } finally {
      setLoading(false);
      setModal(null);
      fetchData();
    }
  };

  return (
    <div className="p-4">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <PageBreadcrumb pageTitle="Footer" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/90">
          + Add Footer Info
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {data?.map((item: footer) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg border border-secondary overflow-hidden"
          >
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Footer Information
              </h2>

              <div className="flex gap-2">
                <button onClick={() => setModal({ mode: "edit", item })} className="bg-success cursor-pointer text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => setModal({ mode: "delete", item })} className="bg-error cursor-pointer text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={item.companyInfo?.logo}
                    alt={item.companyInfo?.altTag || "Company Logo"}
                    width={128}
                    height={128}
                    className="w-32 h-32 object-contain border rounded-lg"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      Company Description
                    </h3>

                    <p className="text-SlateBlueText mt-1">
                      {item.companyInfo?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Tags
                      </p>
                      <p className="font-bold text-xl">
                        {item.tag?.length || 0}
                      </p>
                    </div>

                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Quick Links
                      </p>
                      <p className="font-bold text-xl">
                        {item.quickLinks?.length || 0}
                      </p>
                    </div>

                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Services
                      </p>
                      <p className="font-bold text-xl">
                        {item.services?.length || 0}
                      </p>
                    </div>

                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">
                        Other Links
                      </p>
                      <p className="font-bold text-xl">
                        {item.otherLinks?.length || 0}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">
                        Copyright
                      </p>
                      <p>{item.copyrightText?.name}</p>
                      <p className="text-sm text-SlateBlueText">
                        {item.copyrightText?.website}
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        Designed By
                      </p>
                      <p>{item.designedBy?.name}</p>
                      <p className="text-sm text-SlateBlueText">
                        {item.designedBy?.website}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <FooterModel
          mode={modal.mode}
          initialData={modal.item}
          onClose={() => setModal(null)}
          onSave={handleSave}
          loading={loading}
          setLoading={setLoading}
          showTooltip={showTooltip}
          tooltip={tooltip}
        />
      )}
    </div>
  );
}
