"use client";
import { useState } from "react";
import ImageUploader from "../../ImageUploader";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PhotoModal({ mode, onClose, onSave, initialData, flag }: any) {
    const [form, setForm] = useState(initialData || { title: "", subtitle: "", image: "", public_Id: "" });
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
         setLoading(true);
        if (!form.title || !form.subtitle || !form.image || !form.public_Id) {
            alert("Please fill all fields!");
            setLoading(false);
            return;
        }
        onSave(form);
    };

    return (
        <div onClick={onClose} className="fixed inset-0 bg-opacity-50  flex bg-black/60 items-center justify-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg w-[95%] max-w-[800px] max-h-[90vh] space-y-4 overflow-y-auto scroll-smooth hide-scrollbar">
                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Upload"}{" "}
                        {
                            flag ? "Hero Image" : "Photo"
                        }
                    </h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
                    >
                        <RxCross2 size={20} />
                    </button>
                </div>

                {mode === "delete" ? (
                    <p>Are you sure you want to delete this {
                        flag ? "Hero Image" : "Photo"}?</p>
                ) :
                    (
                        <>
                            <input name="title" placeholder="Title" className="border border-MidnightNavyText shadow-md shadow-MidnightNavyText/50 outline-none w-full p-2 rounded" value={form.title} onChange={handleChange} />
                            <input name="subtitle" placeholder="Subtitle" className="border border-MidnightNavyText shadow-md shadow-MidnightNavyText/50 outline-none w-full p-2 rounded" value={form.subtitle} onChange={handleChange} />

                            <ImageUploader label={` ${flag ? "Hero Image" : "Photo"}`} folder={` ${flag ? "Hero-Image" : "Gallery-Photo"}`}
                                onUpload={(url, public_Id) => setForm({ ...form, image: url || "", public_Id: public_Id || null })}
                                defaultPreview={form.image}
                            />
                        </>
                    )
                }
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        className="bg-SlateBlueText/30 text-MidnightNavyText cursor-pointer flex items-center gap-2 px-3 py-1 rounded hover:opacity-80"
                        onClick={onClose}
                    >
                        <span>Cancel</span>
                        <GiCancel />
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
