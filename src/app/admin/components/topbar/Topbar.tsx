"use client";
import { useEffect, useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Tooltip from "../common/Tooltip";
import { TopbarModel } from "./TopbarModel";

export const Topbar = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [modal, setModal] = useState<{ mode: string; item?: any } | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tooltip, setTooltip] = useState<{ message: string; type: any } | null>(
        null
    );

    const showTooltip = (
        message: string,
        type: "success" | "error" | "info" = "info"
    ) => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const fetchData = async () => {
        const res = await fetch("/api/auth/topbar");
        const tobbarJson = await res.json();
        setData(tobbarJson.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSave = async (form: any) => {
        if (!modal) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let res: any = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let data: any = null;

        try {
            if (modal.mode === "create") {
                res = await fetch("/api/auth/topbar", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
            } else if (modal.mode === "edit") {
                res = await fetch(`/api/auth/topbar/${modal.item._id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            } else if (modal.mode === "delete") {
                res = await fetch(`/api/auth/topbar/${modal.item._id}`, {
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

    return (
        <div className="p-4">
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <PageBreadcrumb pageTitle="Topbar" />
            <div className="flex justify-end items-center mb-4">
                <button onClick={() => setModal({ mode: "create" })} className="bg-learning cursor-pointer text-white px-4 py-2 rounded-lg transition hover:bg-learning/80">
                    + Add Topbar
                </button>
            </div>

            <table className="min-w-full bg-white rounded shadow">
                <thead>
                    <tr className="bg-primary text-white">
                        {["Topbar Record", "Actions"].map((item, index) => (
                            <th key={index} className="py-2 px-3 border border-white">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data?.length > 0 ? (
                        data[0]?.contactDetails?.map(
                            (item: {
                                contactUrl: string;
                                contctType: string;
                                _id: string;
                            }) => (
                                <tr key={item._id} className="text-center">
                                    <td className="border border-secondary shadow-md shadow-secondary/20 p-2">
                                        <div className="flex gap-2 justify-center items-center">
                                            <p className="font-medium">{item.contctType}</p>
                                            <p className="text-sm text-SlateBlueText">{item.contactUrl}</p>
                                        </div>
                                    </td>
                                    <td className="border border-secondary shadow-md shadow-secondary/20">
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
                                    </td>
                                </tr>
                            )
                        )
                    ) : (
                        <tr>
                            <td colSpan={2} className="text-center p-4">
                                No Data Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>



            {modal && (
                <TopbarModel
                    mode={modal.mode}
                    initialData={modal.item}
                    onClose={() => setModal(null)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
}

