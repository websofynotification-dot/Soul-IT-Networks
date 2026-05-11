"use client";
import { useEffect, useState } from "react";
import { DeliveryModel } from "./DeliveryModel";
import { Form, Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";
import { searchKeys, SearchState, updateStateField } from "@/types/searchStateContext";
import { ApiResponseProps } from "@/types/ApiResponseContext";
import { category } from "@/types/categoryContext";
import { service } from "@/types/serviceContext";
import Tooltip from "../../common/Tooltip";
import PageBreadcrumb from "../../common/PageBreadCrumb";
import Pagination from "../../common/Pagination";

export const Delivery: React.FC = () => {
    const [data, setData] = useState<service[]>([]);
    const [modal, setModal] = useState<{ mode: Mode; item?: service } | null>(null);
    const [tooltip, setTooltip] = useState<TooltipProps | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [search, setSearch] = useState<SearchState>({ title: "", "page name": "" });
    const [pageCategorydata, setPageCategorydata] = useState<category[]>([]);
    const recordsPerPage = 10;

    useEffect(() => {
        fetchData();
    }, []);

    const showTooltip = ({ message, type = "info" }: TooltipProps) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const fetchData = async () => {
        const [deliveryRes, pageCategoryRes] = await Promise.all([fetch("/api/auth/services/delivery"), fetch("/api/auth/category")])
        const deliveryJson = await deliveryRes.json();
        const pageCategoryJson = await pageCategoryRes.json();
        setData(deliveryJson.data);
        setPageCategorydata(pageCategoryJson.data);
    };

    const filteredData = data.filter(item => item.title?.toLowerCase().includes(search.title!.toLowerCase()) &&
        item.pageName?.toLowerCase().includes(search["page name"]!.toLowerCase())
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
        let data: ApiResponseProps<service>;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/services/delivery", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                })
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/services/delivery/${modal.item?._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else {
                res = await fetch(`/api/auth/services/delivery/${modal.item?._id}`, {
                    method: "DELETE",
                });
            }
            data = (await res.json()) as ApiResponseProps<service>;

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
            <PageBreadcrumb pageTitle="Delivery" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-primary cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-primary/90">
                    + Add Delivery
                </button>
            </div>

            <div className="flex gap-3 mb-4 w-[15em]">
                {[searchKeys[1], searchKeys[5]].map((key) => (
                    <input
                        key={key}
                        type="text"
                        placeholder={`Search by ${key}`}
                        className="border px-2 py-1 rounded"
                        value={search[key] ?? ""}
                        onChange={(e) => updateStateField(setSearch, key, e.target.value)}
                    />
                ))}
            </div>
            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-herobg">
                        {["Title", "Page Name", "Actions"].map((item, index) => (
                            <th key={index} className="py-2 px-3 border">{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((item) => (
                        <tr key={item._id} className="text-center">
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.title}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20 p-2">{item.pageName}</td>
                            <td className="border border-border shadow-md shadow-skyBlue/20">
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
                <DeliveryModel
                    mode={modal.mode}
                    initialData={modal.item}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                    loading={loading}
                    setLoading={setLoading}
                    showTooltip={showTooltip}
                    tooltip={tooltip}
                    pageCategory={pageCategorydata}
                />
            )}
        </div>
    );
}

