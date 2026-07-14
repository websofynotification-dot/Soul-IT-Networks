"use client";
import { ChangeEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiLoader, FiMinus } from "react-icons/fi";
import { LiaCheckCircle } from "react-icons/lia";
import Tooltip from "../../common/Tooltip";
import Label from "../../form/Label";
import { ModalProps } from "@/types/modelContext";
import { teams } from "@/types/teamsContext";
import { IoIosAdd } from "react-icons/io";
import ImageUploader from "../../common/ImageUploader";

export const TeamsModel: React.FC<
  ModalProps & { initialData?: teams } 
> = ({
  mode,
  onClose,
  onSave,
  initialData,
  loading,
  setLoading,
  showTooltip,
  tooltip,
}) => {
  const [form, setForm] = useState<teams>(
    initialData || {
      name: "",
      description: "",
      designation: "",
      image: "",
      image_public_Id: "",
      socialMedia: [{ socialMediaType: "", socialMediaUrl: "" }],
    },
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    setLoading(true);
    if (
      !form.name ||
      !form.description ||
      !form.designation ||
      !form.image ||
      !form.image_public_Id ||
      form.socialMedia.some(
        (s: {
          socialMediaType: string;
          socialMediaUrl: string;
          _id?: string;
        }) => !s.socialMediaType || !s.socialMediaUrl,
      )
    ) {
      showTooltip({ message: "Please fill all fields!", type: "error" });
      setLoading(false);
      return;
    }
    onSave(form);
  };

  const handleSocialChange = (
    index: number,
    field: keyof (typeof form.socialMedia)[number],
    value: string,
  ) => {
    const updated = [...form.socialMedia];
    updated[index][field] = value;
    setForm({ ...form, socialMedia: updated });
  };

  const addSocialField = () => {
    setForm({
      ...form,
      socialMedia: [
        ...form.socialMedia,
        { socialMediaType: "", socialMediaUrl: "" },
      ],
    });
  };

  const removeSocialField = (index: number) => {
    const updated = form.socialMedia.filter((_: any, i: number) => i !== index);
    setForm({ ...form, socialMedia: updated });
  };

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999] bg-black/60"
      onClick={onClose}
    >
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}
      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[800px]"} max-h-[90vh] shadow-lg 
                   overflow-y-auto scroll-smooth hide-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            {mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"}{" "}
            Team Member
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this team member?</p>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="w-full">
                <Label>Name</Label>
                <input
                  name="name"
                  placeholder="Name"
                  className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <Label>Designation</Label>
                <input
                  name="designation"
                  placeholder="Designation"
                  className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                  value={form.designation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <Label>Social Media</Label>
              {form.socialMedia.map(
                (
                  item: {
                    socialMediaType: string;
                    socialMediaUrl: string;
                    _id?: string;
                  },
                  index: number,
                ) => (
                  <div key={index} className="flex items-center gap-2">
                    <select
                      className="border capitalize cursor-pointer border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                      value={item.socialMediaType}
                      onChange={(e) =>
                        handleSocialChange(
                          index,
                          "socialMediaType",
                          e.target.value,
                        )
                      }
                    >
                      <option value="">Select Social Media Type</option>
                      {[
                        "youtube",
                        "facebook",
                        "instagram",
                        "linkedin",
                        "twitter",
                      ].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Social Media URL"
                      className="border border-secondary shadow-md shadow-secondary/20 outline-none w-[50%] p-2 rounded"
                      value={item.socialMediaUrl}
                      onChange={(e) =>
                        handleSocialChange(
                          index,
                          "socialMediaUrl",
                          e.target.value,
                        )
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
                ),
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="w-full">
                <Label>Description</Label>
                <textarea
                  name="description"
                  value={form.description}
                  placeholder="What about your team member ?"
                  rows={5}
                  onChange={handleChange}
                  className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded resize-none"
                />
              </div>
            </div>
            <Label>Image</Label>
            <ImageUploader
              label="Team Member Image"
              folder="team-member-image"
              onUpload={(url, public_Id) =>
                setForm({
                  ...form,
                  image: url || "",
                  image_public_Id: public_Id || null,
                })
              }
              defaultPreview={form.image}
            />
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
            className={`${
              mode === "delete" ? "bg-primary" : "bg-primary"
            } text-white px-3 py-1 flex items-center gap-2 cursor-pointer rounded hover:opacity-80`}
            onClick={handleSubmit}
          >
            <span>{mode === "delete" ? "Delete" : "Save"}</span>
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
