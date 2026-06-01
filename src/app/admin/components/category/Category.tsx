"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { CategoryModel } from "./CategoryModel";
import { category } from "@/types/categoryContext";
import { Form, Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchStateContext";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import Pagination from "../common/Pagination";

export const Category: React.FC = () => {
  const [data, setData] = useState<category[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: category } | null>(null);
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<SearchState>({ category: "" });
  const recordsPerPage = 25;

  const fetchData = async () => {
    const res = await fetch("/api/auth/category");
    const json = await res.json();
    setData(json.data);
  };

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.category?.toLowerCase().includes(search.category!.toLowerCase()));

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<category>;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/category", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/category/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/category/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<category>;

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
      <PageBreadcrumb pageTitle="Category" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/90">
          + Add Category
        </button>
      </div>
      <div className="flex gap-3 mb-4">
        {[searchKeys[2]].map((key) => (
          <input
            key={key}
            type="text"
            placeholder={`Search by ${key}`}
            className="border px-2 py-1 rounded border-secondary outline-none"
            value={search[key] ?? ""}
            onChange={(e) => updateStateField(setSearch, key, e.target.value)}
          />
        ))}
      </div>
      <table className="min-w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-primary text-white">
            {
              ["Category", "Category Type", "Action"].map((item, index) => (
                <th key={index} className="py-2 px-3 border">{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">{item.category}</td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">{item.categoryType}</td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2 flex gap-2 justify-center">
                <button onClick={() => setModal({ mode: "edit", item })} className="bg-success cursor-pointer text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => setModal({ mode: "delete", item })} className="bg-error cursor-pointer text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      }
      {modal && (
        <CategoryModel
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

