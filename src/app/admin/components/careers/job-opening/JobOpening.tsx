"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../../common/PageBreadCrumb";
import Tooltip from "../../common/Tooltip";
import { extractExcerpt } from "@/lib/extractExcerpt";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import MessageModel from "../../common/MessageModel";
import { JobOpeningModel } from "./JobOpeningModel";
import { job } from "@/types/jobContext";
import { category } from "@/types/categoryContext";
import { Form, Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchStateContext";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import Pagination from "../../common/Pagination";

export const JobOpening: React.FC = () => {
  const [data, setData] = useState<job[]>([]);
  const [jobCategorydata, setJobCategoryData] = useState<category[]>([]);
  const [modal, setModal] = useState<{ mode: Mode; item?: job } | null>(null);
  const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [search, setSearch] = useState<SearchState>({ title: "", category: "" });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const recordsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const showTooltip = ({ message, type = "info" }: TooltipProps) => {
    setTooltip({ message, type });
    setTimeout(() => setTooltip(null), 3000);
  };

  const fetchData = async () => {
    const [jobRes, jobCategoryRes] = await Promise.all([fetch("/api/auth/careers/job-opening"), fetch("/api/auth/category")])
    const jobJson = await jobRes.json();
    const jobCategoryJson = await jobCategoryRes.json();
    setData(jobJson.data);
    setJobCategoryData(jobCategoryJson.data);
  };

  const filteredData = data.filter(item => item.title?.toLowerCase().includes(search.title!.toLowerCase()) &&
    item.category?.toLowerCase().includes(search.category!.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleSave = async (form: Form) => {
    if (!modal) return;
    setLoading(true);
    let res: Response;
    let data: ApiResponseProps<job>;

    try {
      if (modal.mode === "create") {
        res = await fetch("/api/auth/careers/job-opening", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else if (modal.mode === "edit") {
        res = await fetch(`/api/auth/careers/job-opening/${modal.item?._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`/api/auth/careers/job-opening/${modal.item?._id}`, {
          method: "DELETE",
        });
      }
      data = (await res.json()) as ApiResponseProps<job>;

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
      <PageBreadcrumb pageTitle="Job Opening" />
      <div className="flex justify-end items-center mb-4">
        <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/90">
          + Add Job
        </button>
      </div>
      <div className="flex gap-3 mb-4">
        {[searchKeys[1], searchKeys[2]].map((key) => (
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
              ["Title", "Category", "Job Type", "Description", "Action"].map((item, index) => (
                <th key={index} className="py-2 px-3 border">{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item._id} className="text-center">
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">{item.title}</td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">{item.category}</td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2">{item.type}</td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20 p-2 flex items-center justify-center"
              >{extractExcerpt(item.content, 20)}...
                <span onClick={() => { setJobDescription(extractExcerpt(item.content, 500)), setShowDescription(!showDescription); }}
                >
                  {showDescription ? (
                    <IoEyeOutline size={17} className="text-gray-500 cursor-pointer" />
                  ) : (
                    <IoEyeOffOutline size={17} className="text-gray-500 cursor-pointer" />
                  )}
                </span>
              </td>
              <td className="border text-center border-secondary shadow-md shadow-secondary/20">
                <div className="flex mx-1 gap-2 justify-center">
                  <button onClick={() => setModal({ mode: "edit", item })} className="bg-success cursor-pointer text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => setModal({ mode: "delete", item })} className="bg-error cursor-pointer text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      }

      {modal && (
        <JobOpeningModel
          mode={modal.mode}
          initialData={modal.item}
          onClose={() => setModal(null)}
          onSave={handleSave}
          jobCategorydata={jobCategorydata}
          loading={loading}
          setLoading={setLoading}
          showTooltip={showTooltip}
          tooltip={tooltip}
        />
      )}
      {
        showDescription && <MessageModel closedModel={setShowDescription} data={jobDescription} mode="job" />
      }
    </div>
  );
}

