"use client";
import { ChangeEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import Tooltip from "../../common/Tooltip";
import Label from "../../form/Label";
import { ModalProps } from "@/types/modelContext";
import { project } from "@/types/projectContext";
import { category } from "@/types/categoryContext";

export const ProjectsModel: React.FC<ModalProps & { initialData?: project } & { projectCategory: category[] }> = ({ mode, onClose, onSave, initialData, projectCategory, loading, setLoading, showTooltip, tooltip }) => {
    const [form, setForm] = useState<project>(
        initialData || { title: "", description: "", project_category: "", project_year: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = () => {
        setLoading(true);
        if (!form.title || !form.description) {
            showTooltip({ message: "Please fill all fields!", type: "error" });
            setLoading(false);
            return;
        }
        onSave(form);
    };

    const filterProjectCategory = projectCategory.filter(item => item.categoryType === "Project");

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <div
                className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[850px]"} max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar`} onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Project</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure want to delete this project?</p>
                ) : (
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                            <div className="w-full">
                                <Label>Title</Label>
                                <input
                                    name="title"
                                    placeholder="Title"
                                    className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded"
                                    value={form.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="w-full">
                                <Label>Project Category</Label>
                                <select
                                    name="project_category"
                                    className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded"
                                    value={form.project_category}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Project Category</option>
                                    {
                                        filterProjectCategory?.map((item: category, index: number) => (
                                            <option key={index} value={item.category}>{item.category}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="w-full">
                                <Label>Project Year</Label>
                                <input
                                    name="project_year"
                                    placeholder="Project Year"
                                    className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded"
                                    value={form.project_year}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                            <div className="w-full">
                                <Label>Description</Label>
                                <textarea
                                    name="description"
                                    value={form.description}
                                    placeholder="What about your project ?"
                                    rows={5}
                                    onChange={handleChange}
                                    className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded resize-none"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        className="bg-SlateBlueText/30 text-MidnightNavyText cursor-pointer flex items-center gap-2 px-3 py-1 rounded hover:opacity-80"
                        onClick={onClose}
                    >
                        <span>Cancel</span>
                        <GiCancel className="text-midnight_text" />
                    </button>
                    <button
                        className={`${mode === "delete"
                            ? "bg-error"
                            : "bg-primary"
                            } text-white px-3 py-1 flex items-center gap-2 cursor-pointer rounded hover:opacity-80`}
                        onClick={handleSubmit}
                    >
                        <span>
                            {mode === "delete" ? "Delete" : "Save"}
                        </span>
                        {loading ? (
                            <FiLoader size={15} className="animate-spin" />
                        ) : (
                            <LiaCheckCircle size={18} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}



