"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { MenubarModel } from "./MenubarModel";
import Pagination from "../common/Pagination";
import { Mode } from "@/types/modelContext";
import { TooltipProps } from "@/types/tooltipContext";

export const Menubar = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [modal, setModal] = useState<{ mode: Mode; item?: any } | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<TooltipProps | null>(
        null
    );
    
    const [search, setSearch] = useState({ menu: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };


    const fetchData = async () => {
        const res = await fetch("/api/auth/menubar");
        const tobbarJson = await res.json();
        setData(tobbarJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    const filteredData = data.filter(
        (item) =>
            item.primaryMenu.toLowerCase().includes(search.menu.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSave = async (form: any) => {
        if (!modal) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let res: any = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let data: any = null;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/menubar", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/menubar/${modal.item._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else if (modal.mode === "delete") {
                res = await fetch(`/api/auth/menubar/${modal.item._id}`, {
                    method: "DELETE",
                });
            }
            data = await res.json();
            if (res.ok) {
                showTooltip(data?.message, "success");
            } else {
                showTooltip(data.message || "Something went wrong", "error");
            }
        } catch (error) {
            const err = error as Error;
            console.log("Internal Server Error ", err)
            showTooltip("Internal Server Error", "error");
        } finally {
            setModal(null);
            fetchData();
        }
    };

    console.log(data);

    return (
        <div className="p-4">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <PageBreadcrumb pageTitle="Menu" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/80">
                    + Add Menu
                </button>
            </div>

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
                <MenubarModel
                    mode={modal.mode}
                    initialData={modal.item}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

