"use client";

import { RiLoader2Fill } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import Toast from "../Common/Toast";


const locations = [
    "Indira Nagar",
    "Jankipuram",
    "Rajaji Puram",
    "Gomti Nagar-1",
    "Gomti Nagar-2",
    "Krishna Nagar",
    "Alambagh-2",
    "S.G.P.G.I",
    "Cantt. Road",
    "Jankipuram Extn.",
    "Ashiyana",
    "Ghokhale Marg",
    "Raebareli Road",
    "Nirala Nagar(H.O)",
    "Nirala Nagar"
];

export const AppointmentRequestForm = () => {
    const [toast, setToast] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        date: ""
    });

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

        if (name === "date") {
            const selectedDate = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (!value || isNaN(selectedDate.getTime())) {
                setErrors((prev) => ({
                    ...prev,
                    date: "Please select a valid date.",
                }));
                return;
            }
            if (selectedDate < today) {
                setErrors((prev) => ({
                    ...prev,
                    date: "Past dates are not allowed.",
                }));
                return;
            }
            const maxDate = new Date();
            maxDate.setDate(today.getDate() + 30);

            if (selectedDate > maxDate) {
                setErrors((prev) => ({
                    ...prev,
                    date: "You can only book within 30 days.",
                }));
                return;
            }
            setErrors((prev) => ({ ...prev, date: "" }));
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setProcessing(true);
        if (!captchaValue) {
            setToast({ message: "Kindly verify the CAPTCHA before submitting your request.", type: "error" });
            setProcessing(false);
            return;
        }

        try {
            const res = await fetch("/api/auth/appointment-request", {
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
            setFormData({
                name: "",
                phone: "",
                email: "",
                date: "",
                message: ""
            });
            setErrors({
                name: "",
                phone: "",
                date: ""
            });
        }
    };

    return (
        <section className="pt-12">
            <div className="container mb-10">
                <p className="text-SlateBlueText text-17 leading-relaxed text-justify">
                    <sup className="text-error text-17 font-black">*</sup>
                    Please note that we are accepting online request during our operational hours that is <span className="font-semibold">8:00 A.M to 7:00 P.M (Monday to Saturday) and 8:00 A.M to 2:00 P.M (Sunday).</span>  All Online request will be processed after confirmation call from our executive.</p>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit} className="p-8   space-y-4 rounded-xl shadow-2xl shadow-secondary/50 border border-secondary/50" data-aos="fade-right">
                    <div className="grid grid-cols-2 gap-5">
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
                                <p className="text-error text-xs mt-1">{errors.name}</p>
                            )}

                        </div>

                        <div >
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleOnchange}
                                required
                                className="w-full p-3 border border-MidnightNavyText rounded-md outline-none"
                            />
                            {errors.phone && (
                                <p className="text-error text-xs mt-1">{errors.phone}</p>
                            )}
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleOnchange}
                                required
                                className="w-full p-3 border border-MidnightNavyText rounded-md outline-none"
                            />
                        </div>

                        <div>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleOnchange}
                                required
                                className="w-full p-3 border border-MidnightNavyText rounded-md outline-none"
                            />
                            {errors.date && (
                                <p className="text-error text-xs mt-1">{errors.date}</p>
                            )}
                        </div>
                    </div>
                    <textarea
                        name="message"
                        placeholder="Say about your request..."
                        rows={6}
                        value={formData.message}
                        onChange={handleOnchange}
                        required
                        className="w-full p-3 border border-MidnightNavyText rounded-md outline-none resize-none"
                    />
                    <div className="flex flex-col-reverse sm:flex-row  gap-2 items-center justify-center">
                        <div className="w-[230px] origin-left scale-75">
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                onChange={(value) => setCaptchaValue(value)}
                                ref={captchaRef}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[230px] font-semibold btn btn-1 hover-filled-slide-down rounded-lg"
                        >
                            {
                                processing ? <span className="!flex items-center justify-center gap-2">
                                    Sending... <RiLoader2Fill className="animate-spin" />
                                </span> :
                                    <span className="!flex items-center justify-center gap-2">
                                        Send Request <FiSend />
                                    </span>
                            }
                        </button>
                    </div>
                </form>
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

