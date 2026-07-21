"use client";
import { FC, useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { TopbarModel } from "./TopbarModel";
import { topbar } from "@/types/topbarContext";
import { TooltipProps } from "@/types/tooltipContext";
import { Form, Mode } from "@/types/modelContext";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import { Radio } from "react-loader-spinner";

export const Topbar: FC = () => {
  const [data, setData] = useState<topbar[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: topbar } | null>(
    null,
  );
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };


    const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/topbar");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json?.data || []);
    } catch (error) {
      console.error("Error fetching topbar data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<topbar>;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/topbar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/topbar/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/topbar/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<topbar>;

      if (res.ok) {
        showTooltip({ message: data.message ?? "Success", type: "success" });
      } else {
        showTooltip({
          message: data.message ?? "Something went wrong",
          type: "error",
        });
      }
    } catch (error) {
      console.log("Internal Server Error ", error);
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
      <PageBreadcrumb pageTitle="Topbar" />
      {data.length === 0 && (
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={() => setModal({ mode: "create" })}
            className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/80"
          >
            + Add Topbar
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center">
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
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {data?.map((item: topbar) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg border border-secondary overflow-hidden"
            >
              <div className="bg-primary text-white p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Topbar Information</h2>

                <div className="flex mx-1 gap-2 justify-center">
                  <button
                    onClick={() => setModal({ mode: "edit", item: data[0] })}
                    className="bg-success text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setModal({ mode: "delete", item: data[0] })}
                    className="bg-error text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Head Office Location
                  </h3>

                  <p className="text-SlateBlueText">
                    {item.headOfficeLocation}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Branch Office Location
                  </h3>

                  <p className="text-SlateBlueText">
                    {item.branchOfficeLocation}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Contact Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.contactDetails?.map((contact: any, index: number) => (
                      <div
                        key={index}
                        className="border border-secondary/20 rounded-lg p-3 bg-gray-50"
                      >
                        <p className="font-medium capitalize">
                          {contact.contctType}
                        </p>

                        <p className="text-sm text-SlateBlueText break-all">
                          {contact.contactUrl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Social Media</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.socialMedia?.map((social: any, index: number) => (
                      <div
                        key={index}
                        className="border border-secondary/20 rounded-lg p-3 bg-gray-50"
                      >
                        <p className="font-medium capitalize">
                          {social.socialMediaType}
                        </p>

                        <p className="text-sm text-SlateBlueText break-all">
                          {social.socialMediaUrl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Contact Records</p>

                    <p className="text-2xl font-bold">
                      {item.contactDetails?.length || 0}
                    </p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">Social Records</p>

                    <p className="text-2xl font-bold">
                      {item.socialMedia?.length || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <TopbarModel
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
};
