"use client";
import { FC, useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { MenubarModel } from "./MenubarModel";
import Pagination from "../common/Pagination";
import { Form, Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";
import { HeaderItem } from "@/types/HeaderItem";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import { Radio } from "react-loader-spinner";

export const Menubar: FC = () => {
  const [data, setData] = useState<HeaderItem[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: HeaderItem } | null>(
    null,
  );
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [search, setSearch] = useState({ menu: "" });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 10;

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/menubar");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json?.data || []);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.primaryMenu.toLowerCase().includes(search.menu.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage,
  );

  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<HeaderItem>;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/menubar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/menubar/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/menubar/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<HeaderItem>;

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
      <PageBreadcrumb pageTitle="Menu" />
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => setModal({ mode: "create" })}
          className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/80"
        >
          + Add Menu
        </button>
      </div>
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
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-primary text-white">
              {["Menu", "Actions"].map((item, index) => (
                <th key={index} className="py-2 px-3 border">
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr key={item._id}>
                <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">
                  {item.primaryMenu}
                </td>
                <td className="border text-center border-secondary shadow-md shadow-secondary/20">
                  <div className="flex mx-1 gap-2 justify-center">
                    <button
                      onClick={() => setModal({ mode: "edit", item })}
                      className="bg-success cursor-pointer text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setModal({ mode: "delete", item })}
                      className="bg-error cursor-pointer text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {modal && (
        <MenubarModel
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
