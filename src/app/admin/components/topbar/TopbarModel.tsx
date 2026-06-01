"use client";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

export const TopbarModel = ({ mode, onClose, onSave, initialData }: any) => {
    const [tooltip, setTooltip] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(
        initialData || {
            contactDetails: [{ contctType: "", contactUrl: "" }],
            socialMedia: [{ socialMediaType: "", socialMediaUrl: "" }],
        }
    );

    const showTooltip = (message: string, type: any = "info") => {
        setTooltip({ message, type });
        setTimeout(() => setTooltip(null), 3000);
    };

    const handleContactChange = (index: number, field: string, value: string) => {
        const updated = [...form.contactDetails];
        updated[index][field] = value;
        setForm({ ...form, contactDetails: updated });
    };

    const handleSocialChange = (index: number, field: string, value: string) => {
        const updated = [...form.socialMedia];
        updated[index][field] = value;
        setForm({ ...form, socialMedia: updated });
    };

    const addContactField = () => {
        setForm({
            ...form,
            contactDetails: [...form.contactDetails, { contctType: "", contactUrl: "" }],
        });
    };

    const removeContactField = (index: number) => {
        const updated = form.contactDetails.filter((_: any, i: number) => i !== index);
        setForm({ ...form, contactDetails: updated });
    };

    const addSocialField = () => {
        setForm({
            ...form,
            socialMedia: [...form.socialMedia, { socialMediaType: "", socialMediaUrl: "" }],
        });
    };
    const removeSocialField = (index: number) => {
        const updated = form.socialMedia.filter((_: any, i: number) => i !== index);
        setForm({ ...form, socialMedia: updated });
    };

    const handleSubmit = () => {
        setLoading(true);

        if (
            form.contactDetails.some((c: any) => !c.contctType || !c.contactUrl) ||
            form.socialMedia.some((s: any) => !s.socialMediaType || !s.socialMediaUrl)
        ) {
            showTooltip("Please fill all fields!", "error");
            setLoading(false);
            return;
        }

        onSave(form);
    };

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
            onClick={onClose}
        >
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
            <div
                className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[800px]"} max-h-[90vh] shadow-lg overflow-y-auto`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl">
                        {mode === "edit" ? "Update" : "Add"} Topbar
                    </h2>

                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure you want to delete this topbar?</p>
                ) :
                    <>
                        <div className="space-y-3">
                            <Label>Contact Details</Label>
                            {form.contactDetails.map((item: any, index: number) => (
                                <div key={index} className="flex gap-2">
                                    <select
                                        className="border capitalize cursor-pointer border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                                        value={item.contctType}
                                        onChange={(e) =>
                                            handleContactChange(index, "contctType", e.target.value)
                                        }
                                    >
                                        <option value="">Select Contact Type</option>
                                        {
                                            ["telephone", "phone", "email"].map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>

                                    <input
                                        type="text"
                                        placeholder="Contact Value"
                                        className="border capitalize border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                                        value={item.contactUrl}
                                        onChange={(e) =>
                                            handleContactChange(index, "contactUrl", e.target.value)
                                        }
                                    />

                                    {form.contactDetails.length > 1 && (
                                        <button
                                            onClick={() => removeContactField(index)}
                                            className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                                        >
                                            <FiMinus />
                                        </button>
                                    )}

                                    {index === form.contactDetails.length - 1 && (
                                        <button
                                            onClick={addContactField}
                                            className="bg-success h-10 w-10 text-white px-3 py-1 rounded"
                                        >
                                            <IoIosAdd />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 space-y-3">
                            <Label>Social Media</Label>
                            {form.socialMedia.map((item: any, index: number) => (
                                <div key={index} className="flex items-center gap-2">
                                    <select
                                        className="border capitalize cursor-pointer border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                                        value={item.socialMediaType}
                                        onChange={(e) =>
                                            handleSocialChange(index, "socialMediaType", e.target.value)
                                        }
                                    >
                                        <option value="">Select Social Media Type</option>
                                        {
                                            ["youtube", "facebook", "instagram", "linkedin", "twitter"].map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Social Media URL"
                                        className="border capitalize border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                                        value={item.socialMediaUrl}
                                        onChange={(e) =>
                                            handleSocialChange(index, "socialMediaUrl", e.target.value)
                                        }
                                    />
                                    {form.socialMedia.length > 1 && (
                                        <button
                                            onClick={() => removeSocialField(index)}
                                            className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                                        >
                                            <FiMinus />
                                        </button>
                                    )}
                                    {index === form.socialMedia.length - 1 && (
                                        <button
                                            onClick={addSocialField}
                                            className="bg-success h-10 w-10 text-white px-3 py-1 rounded"
                                        >
                                            <IoIosAdd />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                }
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
};