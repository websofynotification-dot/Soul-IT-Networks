"use client";
import { useState } from "react";
import Label from "../form/Label";
import Tooltip from "../common/Tooltip";
import { LiaCheckCircle } from "react-icons/lia";
import { FiLoader, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { ModalProps } from "@/types/modelContext";
import { HeaderItem } from "@/types/HeaderItem";

export const MenubarModel: React.FC<
  ModalProps & { initialData?: HeaderItem }
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
  const [form, setForm] = useState<HeaderItem>({
    primaryMenu: initialData?.primaryMenu || "",
    href: initialData?.href || "",
    subMenu: initialData?.subMenu || false,
    secondaryMenu:
      initialData?.secondaryMenu?.length! > 0
        ? initialData!.secondaryMenu
        : [{ label: "", href: "" }],
  });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setLoading(true);

    if (!form.primaryMenu) {
      showTooltip({ message: "Primary menu is required!", type: "error" });
      setLoading(false);
      return;
    }

    if (!form.subMenu && !form.href) {
      showTooltip({
        message: "URL is required for primary menu!",
        type: "error",
      });
      setLoading(false);
      return;
    }

    if (
      form.subMenu &&
      form.secondaryMenu.some((item: any) => !item.label || !item.href)
    ) {
      showTooltip({ message: "Fill all submenu fields!", type: "error" });
      setLoading(false);
      return;
    }

    onSave(form);
  };

  const addSubMenuField = () => {
    setForm({
      ...form,
      secondaryMenu: [...form.secondaryMenu, { label: "", href: "" }],
    });
  };

  const removeSubMenuField = (index: number) => {
    const updated = form.secondaryMenu.filter(
      (_: any, i: number) => i !== index,
    );
    setForm({ ...form, secondaryMenu: updated });
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      {tooltip && <Tooltip message={tooltip.message} type={tooltip.type} />}

      <div
        className={`bg-white p-6 rounded-lg w-[95%] ${mode === "delete" ? "max-w-[500px]" : "max-w-[800px]"}  max-h-[90vh] shadow-lg overflow-y-auto `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">
            {mode === "edit" ? "Update" : mode === "delete" ? "Delete" : "Add"}{" "}
            Menu
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors hover:bg-transparent hover:text-secondary hover:border hover:border-secondary/30 sm:right-6 sm:top-6 sm:h-9 sm:w-9"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {mode === "delete" ? (
          <p>Are you sure want to delete this menu?</p>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <Label>Primary Menu</Label>
                <input
                  name="primaryMenu"
                  placeholder="Label"
                  value={form.primaryMenu}
                  onChange={handleChange}
                  className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                />
              </div>

              <div>
                <Label>Menu Type</Label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={!form.subMenu}
                      onChange={() =>
                        setForm((prev: any) => ({
                          ...prev,
                          subMenu: false,
                        }))
                      }
                    />
                    Primary
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={form.subMenu}
                      onChange={() =>
                        setForm((prev: any) => ({
                          ...prev,
                          subMenu: true,
                          href: "",
                          secondaryMenu:
                            prev.secondaryMenu?.length > 0
                              ? prev.secondaryMenu
                              : [{ label: "", href: "" }],
                        }))
                      }
                    />
                    Submenu
                  </label>
                </div>
              </div>

              {!form.subMenu && (
                <div>
                  <Label>URL</Label>
                  <input
                    name="href"
                    value={form.href}
                    placeholder="Primary menu url"
                    onChange={handleChange}
                    className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                  />
                </div>
              )}

              {form.subMenu && (
                <div>
                  <Label>Submenu Items</Label>

                  {form.secondaryMenu.map((item: any, index: number) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        placeholder="Label"
                        value={item.label}
                        onChange={(e) => {
                          const updated = [...form.secondaryMenu];
                          updated[index].label = e.target.value;
                          setForm({ ...form, secondaryMenu: updated });
                        }}
                        className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                      />

                      <input
                        placeholder="Secondary menu url"
                        value={item.href}
                        onChange={(e) => {
                          const updated = [...form.secondaryMenu];
                          updated[index].href = e.target.value;
                          setForm({ ...form, secondaryMenu: updated });
                        }}
                        className="border border-secondary shadow-secondary/20 shadow-md  outline-none w-full p-2 rounded"
                      />
                      {form.secondaryMenu.length > 1 && (
                        <button
                          onClick={() => removeSubMenuField(index)}
                          className="bg-error h-10 w-10 text-white px-3 py-1 rounded"
                        >
                          <FiMinus />
                        </button>
                      )}

                      {index === form.secondaryMenu.length - 1 && (
                        <button
                          onClick={addSubMenuField}
                          className="bg-success h-10 w-10 text-white px-3 py-1 rounded"
                        >
                          <IoIosAdd />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
