"use client";

import { useState } from "react";

export const FooterModel = () => {
    const [formData, setFormData] = useState({
        companyInfo: {
            logo: "",
            description: "",
            path: "",
        },

        certifications: [
            {
                title: "",
                path: "",
            },
        ],

        quickLinks: [
            {
                label: "",
                path: "",
            },
        ],

        services: [
            {
                title: "",
                path: "",
            },
        ],

        contactInfo: {
            address: [
                {
                    label: "",
                    path: "",
                },
            ],

            phone: [
                {
                    label: "",
                    path: "",
                },
            ],

            emails: [
                {
                    label: "",
                    path: "",
                },
            ],
        },

        socialLinks: [
            {
                platform: "",
                url: "",
            },
        ],

        policies: [
            {
                title: "",
                path: "",
            },
        ],

        copyrightText: {
            name: "",
            website: "",
        },

        designedBy: {
            name: "",
            website: "",
        },
    });

    /* -------------------------------------------------------------------------- */
    /*                               HANDLE CHANGE                                */
    /* -------------------------------------------------------------------------- */

    const handleCompanyChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            companyInfo: {
                ...formData.companyInfo,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleArrayChange = (
        section: string,
        index: number,
        field: string,
        value: string
    ) => {
        const updated: any = [...(formData as any)[section]];

        updated[index][field] = value;

        setFormData({
            ...formData,
            [section]: updated,
        });
    };

    const addArrayField = (section: string, template: any) => {
        setFormData({
            ...formData,
            [section]: [...(formData as any)[section], template],
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // const res = await axios.post("/api/footer", formData);

            // console.log(res.data);

            alert("Footer Created Successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 p-5 md:p-10">
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-xl md:p-10"
            >
                <h1 className="mb-10 text-3xl font-bold">
                    Footer Management
                </h1>

                {/* -------------------------------------------------------------------------- */}
                {/*                              COMPANY INFO                                  */}
                {/* -------------------------------------------------------------------------- */}

                <div className="mb-10 rounded-2xl border p-5">
                    <h2 className="mb-5 text-2xl font-semibold">
                        Company Info
                    </h2>

                    <div className="grid gap-5 md:grid-cols-2">
                        <input
                            type="text"
                            name="logo"
                            placeholder="Logo URL"
                            value={formData.companyInfo.logo}
                            onChange={handleCompanyChange}
                            className="rounded-xl border p-3 outline-none"
                        />

                        <input
                            type="text"
                            name="path"
                            placeholder="Company Path"
                            value={formData.companyInfo.path}
                            onChange={handleCompanyChange}
                            className="rounded-xl border p-3 outline-none"
                        />
                    </div>

                    <textarea
                        name="description"
                        placeholder="Company Description"
                        value={formData.companyInfo.description}
                        onChange={handleCompanyChange}
                        className="mt-5 h-32 w-full rounded-xl border p-3 outline-none"
                    />
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                               QUICK LINKS                                  */}
                {/* -------------------------------------------------------------------------- */}

                <div className="mb-10 rounded-2xl border p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                            Quick Links
                        </h2>

                        <button
                            type="button"
                            onClick={() =>
                                addArrayField("quickLinks", {
                                    label: "",
                                    path: "",
                                })
                            }
                            className="rounded-xl bg-black px-5 py-2 text-white"
                        >
                            Add Link
                        </button>
                    </div>

                    <div className="space-y-5">
                        {formData.quickLinks.map((item, index) => (
                            <div
                                key={index}
                                className="grid gap-5 md:grid-cols-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Label"
                                    value={item.label}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "quickLinks",
                                            index,
                                            "label",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Path"
                                    value={item.path}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "quickLinks",
                                            index,
                                            "path",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                                 SERVICES                                   */}
                {/* -------------------------------------------------------------------------- */}

                <div className="mb-10 rounded-2xl border p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Services</h2>

                        <button
                            type="button"
                            onClick={() =>
                                addArrayField("services", {
                                    title: "",
                                    path: "",
                                })
                            }
                            className="rounded-xl bg-black px-5 py-2 text-white"
                        >
                            Add Service
                        </button>
                    </div>

                    <div className="space-y-5">
                        {formData.services.map((item, index) => (
                            <div
                                key={index}
                                className="grid gap-5 md:grid-cols-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={item.title}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "services",
                                            index,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Path"
                                    value={item.path}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "services",
                                            index,
                                            "path",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                               SOCIAL LINKS                                 */}
                {/* -------------------------------------------------------------------------- */}

                <div className="mb-10 rounded-2xl border p-5">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                            Social Links
                        </h2>

                        <button
                            type="button"
                            onClick={() =>
                                addArrayField("socialLinks", {
                                    platform: "",
                                    url: "",
                                })
                            }
                            className="rounded-xl bg-black px-5 py-2 text-white"
                        >
                            Add Social
                        </button>
                    </div>

                    <div className="space-y-5">
                        {formData.socialLinks.map((item, index) => (
                            <div
                                key={index}
                                className="grid gap-5 md:grid-cols-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Platform"
                                    value={item.platform}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "socialLinks",
                                            index,
                                            "platform",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="URL"
                                    value={item.url}
                                    onChange={(e) =>
                                        handleArrayChange(
                                            "socialLinks",
                                            index,
                                            "url",
                                            e.target.value
                                        )
                                    }
                                    className="rounded-xl border p-3 outline-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------------------------------------------------- */}
                {/*                              SUBMIT BUTTON                                 */}
                {/* -------------------------------------------------------------------------- */}

                <button
                    type="submit"
                    className="w-full rounded-2xl bg-black py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[0.98]"
                >
                    Save Footer
                </button>
            </form>
        </div>
    );
}