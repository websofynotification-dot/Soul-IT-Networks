"use client";
import { useState, useMemo, useRef, ChangeEvent } from "react";
import dynamic from "next/dynamic";
import Label from "../../form/Label";
import Tooltip from "../../common/Tooltip";
import { ModalProps } from "@/types/modelContext";
import { job } from "@/types/jobContext";
import { category } from "@/types/categoryContext";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader, FiMinus } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import { IoIosAdd } from "react-icons/io";

const JoditEditor = dynamic(
  () => import("jodit-react"),
  { ssr: false }
);

export const JobOpeningModel: React.FC<ModalProps & { initialData?: job } & { jobCategorydata: category[] }> = ({ mode, onClose, onSave, initialData, jobCategorydata, loading, setLoading, showTooltip, tooltip }) => {

  const editor = useRef(null);

  const [form, setForm] = useState<job>(
    initialData || {
      title: "",
      subTitle: "",
      category: "",
      type: "",
      experience: "",
      location: "",
      content: "",
      slug: "",
      schemaMarkup: {},
      metaTitle: "",
      metaDescription: "",
      metaKeywords: [""],
    }
  );

  const filterJobCategory = jobCategorydata.filter(item => item.categoryType === "Job");


  const [schemaInput, setSchemaInput] = useState(
    JSON.stringify(form.schemaMarkup, null, 2)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, index?: number) => {
    if (e.target.name === "metaKeywords") {
      const updatedMetaKeywords = [...form.metaKeywords];
      updatedMetaKeywords[index!] = e.target.value;
      setForm({ ...form, metaKeywords: updatedMetaKeywords });
    } else if (e.target.name === "schemaMarkup") {
      const value = e.target.value;
      setSchemaInput(value);
      try {
        const parsed = JSON.parse(value);
        setForm({
          ...form,
          schemaMarkup: parsed
        });
      } catch { }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }


  const addmetaKeywordsField = () => {
    setForm({ ...form, metaKeywords: [...form.metaKeywords, ""] });
  };

  const removemetaKeywordsField = (index: number) => {
    const updatedMetaKeywords = form.metaKeywords.filter(
      (_: string, i: number) => i !== index
    );
    setForm({ ...form, metaKeywords: updatedMetaKeywords });
  };


  const handleSubmit = () => {
    if (
      !form.title ||
      !form.subTitle ||
      !form.category ||
      !form.type ||
      !form.experience ||
      !form.location ||
      !form.content ||
      !form.slug ||
      !form.schemaMarkup ||
      !form.metaTitle ||
      !form.metaDescription ||
      !form.metaKeywords
    ) {
      showTooltip({ message: "Please fill all fields!", type: "error" });
      setLoading(false);
      return;
    }
    onSave(form);
  };

  const placeholder = 'Write your job descrcription...'
  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Write your descrcription here...'
  }),
    [placeholder]
  );

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60">
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[1150px]"} max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"} Job</h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this job?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Title</Label>
                  <input
                    name="title"
                    placeholder="Job Title"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Subtitle</Label>
                  <input
                    name="subTitle"
                    placeholder="Subtitle"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.subTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Job Category</Label>
                  <select
                    name="category"
                    className="border border-secondary shadow-secondary/20 shadow-md cursor-pointer  outline-none w-full p-2 rounded"
                    value={form.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {
                      filterJobCategory?.map((item: category, index: number) => (
                        <option key={index} value={item.category}>{item.category}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="w-full">
                  <Label>Job Type</Label>
                  <select
                    name="type"
                    className="border border-secondary shadow-secondary/20 shadow-md cursor-pointer  outline-none w-full p-2 rounded"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {
                      ["Full time", "Internship"]?.map((item: string, index: number) => (
                        <option key={index} value={item}>{item}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Job Location</Label>
                  <input
                    type="text"
                    name="location"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label>Experience</Label>
                  <input
                    type="text"
                    name="experience"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Slug</Label>
                  <input
                    name="slug"
                    placeholder="Slug"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.slug}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Meta Title</Label>
                  <input
                    name="metaTitle"
                    placeholder="Meta Title"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.metaTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <Label>Meta Description</Label>
                  <input
                    name="metaDescription"
                    placeholder="Meta Description"
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                    value={form.metaDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                <div className="w-full">
                  <Label>Meta Keywords</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {form.metaKeywords.map((meta: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="text"
                          name="metaKeywords"
                          placeholder={`Meta Keywords ${index + 1}`}
                          className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                          value={meta}
                          onChange={(e) =>
                            handleChange(e, index)
                          }
                        />

                        {form.metaKeywords.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removemetaKeywordsField(index)
                            }
                            className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                          >
                            <FiMinus />
                          </button>
                        )}

                        {index === form.metaKeywords.length - 1 && (
                          <button
                            type="button"
                            onClick={addmetaKeywordsField}
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

              <div className="w-full">
                <Label>Job Schema Markup</Label>
                <textarea
                  name="schemaMarkup"
                  value={schemaInput}
                  placeholder="Write your schema markup..."
                  rows={15}
                  onChange={handleChange}
                  className="border border-secondary shadow-secondary/20 shadow-md outline-none w-full p-2 rounded resize-none"
                />
              </div>

              <div>
                <Label>Write your job description...</Label>
                <JoditEditor
                  name="content"
                  ref={editor}
                  value={form.content}
                  config={config}
                  tabIndex={1}
                  onChange={newContent => setForm({ ...form, content: newContent })}
                />
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



