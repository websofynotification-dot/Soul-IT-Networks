"use client";
import { useState } from "react";
import Label from "../form/Label";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader, FiMinus } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import Tooltip from "../common/Tooltip";
import { IoIosAdd } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RmlCentersModel({ mode, onClose, onSave, initialData, centerArea, loading, setLoading, showTooltip, tooltip }: any) {
    const [form, setForm] = useState(initialData || { title: "", file: null });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index?: number) => {
        if (e.target.name === "phone") {
            const updatedPhone = [...form.phone];
            updatedPhone[index!] = e.target.value;
            setForm({ ...form, phone: updatedPhone });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const addPhoneNoField = () => {
        setForm({ ...form, phone: [...form.phone, ""] });
    };

    const removePhoneNoField = (index: number) => {
        const updatedPhone = form.phone.filter(
            (_: string, i: number) => i !== index
        );
        setForm({ ...form, phone: updatedPhone });
    };

    const handleSubmit = () => {
        setLoading(true);
        if (!form.address || !form.area || !form.mapUrl || form.phone.some((ph: string) => !ph.trim())) {
            showTooltip("Please fill all fields!", "error");
            setLoading(false);
            return;
        }
        onSave(form);
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60" onClick={onClose}>
            {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}

            <div
                className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : " max-w-[800px]"} max-h-[90vh] shadow-lg  overflow-y-auto scroll-smooth hide-scrollbar`} onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">

                    <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Center</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure want to delete this center?</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">

                                <div className="w-full">
                                    <Label>Area</Label>
                                    <select
                                        name="area"
                                        className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded cursor-pointer"
                                        value={form.area}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Area</option>
                                        {
                                            centerArea?.map((item: any, index: number) => (
                                                <option key={index} value={item.area}>{item.area}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="w-full">
                                    <Label>Google map url</Label>
                                    <input
                                        name="mapUrl"
                                        placeholder="Google map url"
                                        className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded"
                                        value={form.mapUrl}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                                <div className="w-full">
                                    <Label>Address</Label>
                                    <textarea
                                        name="address"
                                        placeholder="Address"
                                        className="border border-MidnightNavyText shadow-MidnightNavyText/50 shadow-md  outline-none w-full p-2 rounded resize-none"
                                        value={form.address}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Phone No.</Label>
                                <div className="flex flex-col gap-3">
                                    {form.phone.map((ph: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder={`Phone No. ${index + 1}`}
                                                className="border w-full p-2 rounded border-formbg shadow-md shadow-formbg/50 outline-none"
                                                value={ph}
                                                onChange={(e) =>
                                                    handleChange(e, index)
                                                }
                                            />

                                            {form.phone.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removePhoneNoField(index)
                                                    }
                                                    className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                                                >
                                                    <FiMinus />
                                                </button>
                                            )}
                                            {index === form.phone.length - 1 && (
                                                <button
                                                    type="button"
                                                    onClick={addPhoneNoField}
                                                    className="bg-success h-10 w-10 text-white px-3 py-1 rounded"
                                                >
                                                    <IoIosAdd />
                                                </button>
                                            )}
                                        </div>
                                    ))}
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

