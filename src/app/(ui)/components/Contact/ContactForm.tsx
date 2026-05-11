"use client";
import { contactPageDetails } from "@/app/api/data";
import { RiLoader2Fill } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import Toast from "../Common/Toast";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { GoogleMap } from "./GoogleMap";

export const ContactForm = () => {
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({ name: "", phone: "", });

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const captchaRef = useRef<ReCAPTCHA | null>(null);
    const [processing, setProcessing] = useState<boolean>(false)

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (!/^[A-Za-z\s]*$/.test(value)) {
                setErrors((prev) => ({
                    ...prev,
                    name: "Only characters are allowed.",
                }));
                return;
            }
            if (value.length > 20) {
                setErrors((prev) => ({
                    ...prev,
                    name: "Maximum 20 characters allowed.",
                }));
                return;
            }
            setErrors((prev) => ({ ...prev, name: "" }));
        }
        if (name === "phone") {
            if (!/^\d*$/.test(value)) {
                setErrors((prev) => ({
                    ...prev,
                    phone: "Only numbers are allowed.",
                }));
                return;
            }
            if (value.length > 10) {
                setErrors((prev) => ({
                    ...prev,
                    phone: "Phone number must be 10 digits",
                }));
                return;
            }
            setErrors((prev) => ({ ...prev, phone: "" }));
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true);
        if (!captchaValue) {
            setToast({ message: "Please verify the CAPTCHA before contact to SOUL IT Networks!.", type: "error" });
            setProcessing(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/contact-us", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, captcha: captchaValue }),
            });
            const data = await res.json();
            if (res.ok) {
                setToast({ message: data.message, type: "success" });
            } else {
                setToast({ message: data.message, type: "error" });
            }
        } catch (error) {
            setToast({ message: "Internal server error....", type: "error" });
        } finally {
            captchaRef.current?.reset();
            setCaptchaValue(null);
            setProcessing(false);
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
            setErrors({
                name: "",
                phone: "",
            });
        }
    };

    return (
        <section className="pt-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container items-stretch">
                <form onSubmit={handleSubmit} className="shadow-2xl shadow-secondary/50 border border-secondary p-8 rounded-xl space-y-4" data-aos="fade-right">
                    <h2 className="text-2xl uppercase text-primary mb-4 font-semibold"
                        data-aos="fade-up">
                        We’d be glad{" "}
                        <span className="text-MidnightNavyText">to hear from you</span>
                    </h2>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleOnchange}
                            required
                            className="w-full p-3 border border-MidnightNavyText rounded-md outline-none text-MidnightNavyText"
                        />
                        {errors.name && (
                            <p className="text-primary text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleOnchange}
                            required
                            className="w-full p-3 border border-MidnightNavyText rounded-md outline-none text-MidnightNavyText"
                        />
                        {errors.phone && (
                            <p className="text-primary text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border border-MidnightNavyText rounded-md outline-none text-MidnightNavyText"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border border-MidnightNavyText rounded-md outline-none text-MidnightNavyText"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border border-MidnightNavyText rounded-md outline-none resize-none text-MidnightNavyText"
                    />
                    <div className="flex flex-col-reverse sm:flex-row  gap-2 items-center">
                        <div className="w-[230px] origin-left scale-75">
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                onChange={(value) => setCaptchaValue(value)}
                                ref={captchaRef}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full font-semibold btn btn-1 hover-filled-slide-down rounded-lg"
                        >
                            {
                                processing ? <span className="!flex items-center justify-center gap-2">
                                    Sending... <RiLoader2Fill className="animate-spin" />
                                </span>
                                    : <span className="!flex items-center justify-center gap-2">
                                        Send Message <FiSend />
                                    </span>
                            }
                        </button>
                    </div>
                </form>

                <div className="p-8 shadow-2xl shadow-secondary/50 border border-secondary/50 rounded-xl space-y-4">
                    <h2
                        className="text-2xl uppercase text-primary mb-4 font-semibold"
                        data-aos="fade-up">
                        Contact{" "}
                        <span className="text-MidnightNavyText">Information</span>
                    </h2>
                    <div className="space-y-6">
                        {
                            (Array.isArray(contactPageDetails) ? contactPageDetails : []).map((item, i) => (
                                <div key={i} className="bg-white border shadow-md shadow-MidnightNavyText/50  p-6 rounded-2xl">
                                    <div className="flex flex-col items-center gap-2  justify-center">
                                        {
                                            item.locationUrl &&
                                            <div className="flex w-full gap-3 items-center">

                                                <FaMapMarkerAlt size={20} className="text-primary" />
                                                <Link
                                                    target="_blank"
                                                    href={item.locationUrl}
                                                    className="rounded-2xl">
                                                    <div className={`${i !== 3 ? "flex-col" : "flex-col"} text-justify`}>
                                                        <p className="text-SlateBlueText break-all sm:break-normal">
                                                            {item.location}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        }

                                        <div className="flex w-full gap-3">
                                            {
                                                (Array.isArray(item?.phone) ? item.phone : []).map((ph, ind) => (
                                                    <div key={ind} className="flex gap-2 items-center">
                                                        {
                                                            ph.includes("0522") ? <FaPhoneAlt size={13} className="text-primary" /> : <MdPhoneIphone size={20} className="text-primary" />
                                                        }
                                                        <Link

                                                            href={`tel:${ph.includes("0522") ? `${ph}` : `+91${ph}`}`}
                                                            className="rounded-2xl">
                                                            <div className={`gap-5 text-center`}>
                                                                <p className="text-SlateBlueText break-all sm:break-normal">
                                                                    {ph}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        <div className="flex items-center w-full gap-3">
                                            <FaEnvelope size={18} className="text-primary" />
                                            <Link
                                                href={`mailto:${item.email}`}
                                                className="items-center gap-4 rounded-2xl">
                                                <div className={`flex justify-center ${i !== 3 ? "flex-col" : "flex-col"} items-center gap-5 text-center`}>
                                                    <p className="text-SlateBlueText break-all sm:break-normal">
                                                        {item.email}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <GoogleMap />
                    </div>

                </div>

            </div>

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </section>


    );
}




