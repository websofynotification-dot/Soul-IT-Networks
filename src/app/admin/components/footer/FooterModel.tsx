"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader, FiMinus } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { ModalProps } from "@/types/modelContext";
import Tooltip from "../common/Tooltip";
import Label from "../form/Label";
import ImageUploader from "../common/ImageUploader";
import { footer } from "@/types/footerContext";

export const FooterModel: React.FC<ModalProps & { initialData?: footer }> = ({ mode, onClose, onSave, initialData, loading, setLoading, showTooltip, tooltip }) => {

    const [form, setForm] = useState<any>(
        initialData || {
            companyInfo: {
                logo: "",
                logo_publicId: "",
                description: "",
                path: "",
                altTag: ""
            },
            tag: [
                {
                    label: "",
                    path: ""
                }
            ],
            quickLinks: [
                {
                    label: "",
                    path: ""
                }
            ],
            services: [
                {
                    label: "",
                    path: ""
                }
            ],
            otherLinks: [
                {
                    label: "",
                    path: ""
                }
            ],
            copyrightText: {
                name: "",
                website: "",
                path: ""
            },
            designedBy: {
                name: "",
                website: "",
                path: ""
            }
        }
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        section?: string,
        index?: number,
        field?: string
    ) => {
        const { value } = e.target;

        if (
            section &&
            ["tag", "quickLinks", "services", "otherLinks"].includes(section)
        ) {
            const updated = [...form[section]];
            updated[index!] = {
                ...updated[index!],
                [field!]: value,
            };
            setForm({
                ...form,
                [section]: updated,
            });

            return;
        }
        if (
            section &&
            ["companyInfo", "copyrightText", "designedBy"].includes(section)
        ) {
            setForm({
                ...form,
                [section]: {
                    ...form[section],
                    [field!]: value,
                },
            });

            return;
        }
    };

    const addField = (section: "tag" | "quickLinks" | "services" | "otherLinks") => {
        setForm({
            ...form,
            [section]: [
                ...form[section],
                {
                    label: "",
                    path: "",
                },
            ],
        });
    };


    const removeField = (
        section: "tag" | "quickLinks" | "services" | "otherLinks",
        index: number
    ) => {
        const updated = form[section].filter(
            (_: any, i: number) => i !== index
        );

        setForm({
            ...form,
            [section]: updated,
        });
    };


    const handleSubmit = () => {
        setLoading(true);

        if (!form.companyInfo.logo) {
            showTooltip({
                message: "Please upload logo!",
                type: "error",
            });
            setLoading(false);
            return;
        }

        if (!form.companyInfo.altTag?.trim()) {
            showTooltip({
                message: "Please enter logo alt tag!",
                type: "error",
            });
            setLoading(false);
            return;
        }

        if (!form.companyInfo.description?.trim()) {
            showTooltip({
                message: "Please enter company description!",
                type: "error",
            });
            setLoading(false);
            return;
        }

        const validateSection = (
            section: any[],
            sectionName: string
        ) => {
            return section.some(
                (item) =>
                    !item.label?.trim() ||
                    !item.path?.trim()
            )
                ? sectionName
                : null;
        };

        const invalidSection =
            validateSection(form.tag, "Tags") ||
            validateSection(form.quickLinks, "Quick Links") ||
            validateSection(form.services, "Services") ||
            validateSection(form.otherLinks, "Other Links");

        if (invalidSection) {
            showTooltip({
                message: `Please complete all ${invalidSection} fields!`,
                type: "error",
            });
            setLoading(false);
            return;
        }

        if (!form.copyrightText.name?.trim()) {
            showTooltip({
                message: "Please enter copyright name!",
                type: "error",
            });
            setLoading(false);
            return;
        }

        if (!form.designedBy.name?.trim()) {
            showTooltip({
                message: "Please enter designer name!",
                type: "error",
            });
            setLoading(false);
            return;
        }

        onSave(form);

        console.log("Footer Form Data is --> ", form);
    };

    const renderLinkSection = (
        title: string,
        section: "tag" | "quickLinks" | "services" | "otherLinks"
    ) => (
        <div className="space-y-3">
            <Label>{title}</Label>

            {form[section]?.map((item: any, index: number) => (
                <div
                    key={index}
                    className="flex items-center gap-2"
                >
                    <input
                        type="text"
                        placeholder={`Label ${index + 1}`}
                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                        value={item.label}
                        onChange={(e) =>
                            handleChange(e, section, index, "label")
                        }
                    />

                    <input
                        type="text"
                        placeholder={`Path ${index + 1}`}
                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                        value={item.path}
                        onChange={(e) =>
                            handleChange(e, section, index, "path")
                        }
                    />

                    {form[section].length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeField(section, index)}
                            className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                        >
                            <FiMinus />
                        </button>
                    )}

                    {index === form[section].length - 1 && (
                        <button
                            type="button"
                            onClick={() => addField(section)}
                            className="bg-success h-10 w-10 text-white px-3 py-1 rounded"
                        >
                            <IoIosAdd />
                        </button>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <div
                className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[800px]"}  max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar `} onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Footer Info</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure want to delete this Footer Info?</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            <Label>Logo</Label>
                            <ImageUploader
                                label="Logo Image"
                                folder="footer-logo"
                                onUpload={(url, public_Id) =>
                                    setForm({
                                        ...form,
                                        companyInfo: {
                                            ...form.companyInfo,
                                            logo: url || "",
                                            logo_publicId: public_Id || "",
                                        },
                                    })
                                }
                                defaultPreview={form.companyInfo.logo}
                            />

                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Alt Tag</Label>
                                    <input
                                        name="altTag"
                                        placeholder="Alt Tag"
                                        className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                                        value={form.companyInfo.altTag}
                                        onChange={(e) => handleChange(e, "companyInfo", undefined, "altTag")}
                                    />
                                </div>
                                <div className="w-full">
                                    <Label>Path</Label>
                                    <input
                                        name="path"
                                        placeholder="Path"
                                        className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                                        value={form.companyInfo.path}
                                        onChange={(e) => handleChange(e, "companyInfo", undefined, "path")}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Description</Label>
                                    <textarea
                                        name="description"
                                        placeholder="About your website..."
                                        rows={5}
                                        className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded resize-none"
                                        value={form.companyInfo.description}
                                        onChange={(e) => handleChange(e, "companyInfo", undefined, "description")}
                                    />
                                </div>
                            </div>

                            {renderLinkSection("Tags", "tag")}
                            {renderLinkSection("Quick Links", "quickLinks")}
                            {renderLinkSection("Services", "services")}
                            {renderLinkSection("Other Links", "otherLinks")}

                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Copyright Text</Label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.copyrightText.name}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "copyrightText",
                                                undefined,
                                                "name"
                                            )
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <Label>Website Name</Label>
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.copyrightText.website}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "copyrightText",
                                                undefined,
                                                "website"
                                            )
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <Label>Path</Label>
                                    <input
                                        type="text"
                                        placeholder="Path"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.copyrightText.path}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "copyrightText",
                                                undefined,
                                                "path"
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Designed By</Label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.designedBy.name}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "designedBy",
                                                undefined,
                                                "name"
                                            )
                                        }
                                    />
                                </div>
                                <div className="w-full">
                                    <Label>Website Name</Label>
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.designedBy.website}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "designedBy",
                                                undefined,
                                                "website"
                                            )
                                        }
                                    />
                                </div>

                                <div className="w-full">
                                    <Label>Path</Label>
                                    <input
                                        type="text"
                                        placeholder="Path"
                                        className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded"
                                        value={form.designedBy.path}
                                        onChange={(e) =>
                                            handleChange(
                                                e,
                                                "designedBy",
                                                undefined,
                                                "path"
                                            )
                                        }
                                    />
                                </div>
                            </div>

                        </div>
                    </>
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
                            ? "bg-primary"
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




