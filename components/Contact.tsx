"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { springConfig } from "@/lib/animation-config";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: "Recipel Contact Form",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again later.");
        }
    };

    const contactInfo = [
        { icon: Mail, label: "Email", value: "mistahjzj@gmail.com", href: "mailto:mistahjzj@gmail.com" },
        { icon: MapPin, label: "Location", value: "Kerala, India", href: null },
        { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX", href: "tel:+91XXXXXXXXXX" }
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-32 px-4 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springConfig}
                    className="mb-16 md:mb-24 text-left border-b border-charcoal/10 pb-8 relative"
                >
                    <div className="absolute right-0 top-0 w-8 h-8 flex-col justify-between hidden md:flex">
                        <div className="w-full h-px bg-orange" />
                        <div className="w-full h-px border-t border-dashed border-orange" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium text-charcoal mb-6 tracking-tight">
                        Connect
                    </h2>
                    
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-px bg-orange" />
                        <p className="text-xs tracking-[0.2em] text-charcoal/40 uppercase font-sans">
                            Reach Out
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={springConfig}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-charcoal/20 bg-transparent focus:border-orange focus:outline-none transition-colors text-charcoal rounded-none"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-charcoal/20 bg-transparent focus:border-orange focus:outline-none transition-colors text-charcoal rounded-none"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-charcoal/20 bg-transparent focus:border-orange focus:outline-none transition-colors text-charcoal rounded-none"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-charcoal/20 bg-transparent focus:border-orange focus:outline-none transition-colors text-charcoal resize-none rounded-none"
                                />
                            </div>

                            {/* Status Messages */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="font-medium">Message sent successfully! We&rsquo;ll get back to you soon.</span>
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800"
                                >
                                    <AlertCircle className="w-5 h-5" />
                                    <span className="font-medium">{errorMessage}</span>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={{ backgroundColor: "rgba(26, 26, 26, 1)", color: "#F5F2EB" }}
                                className="w-full bg-orange text-cream font-medium tracking-widest uppercase py-4 px-6 border border-orange hover:border-charcoal transition-colors duration-300 rounded-none cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {status === "loading" ? (
                                    <>
                                        <div className="w-4 h-4 border border-cream border-t-transparent rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Transmit
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={springConfig}
                        className="space-y-6 flex flex-col justify-between"
                    >
                        <div className="border border-charcoal/10 p-8 md:p-12 h-full flex flex-col relative">
                            {/* Decorative square */}
                            <div className="absolute top-0 right-0 w-3 h-3 bg-orange m-4" />
                            
                            <h3 className="text-3xl font-serif font-medium text-charcoal mb-6">
                                Information
                            </h3>
                            <p className="text-charcoal/60 font-light mb-12 leading-relaxed">
                                We welcome inquiries and collaborations. Speak with us.
                            </p>

                            <div className="space-y-6 flex-grow">
                                {contactInfo.map((info, index) => (
                                    <div key={info.label} className="border-b border-charcoal/10 pb-6 last:border-0">
                                        {info.href ? (
                                            <a href={info.href} className="flex items-start gap-4 group">
                                                <info.icon className="w-5 h-5 text-charcoal/40 group-hover:text-orange transition-colors mt-0.5" />
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">
                                                        {info.label}
                                                    </div>
                                                    <div className="text-charcoal group-hover:text-orange transition-colors font-serif">
                                                        {info.value}
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4">
                                                <info.icon className="w-5 h-5 text-charcoal/40 mt-0.5" />
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">
                                                        {info.label}
                                                    </div>
                                                    <div className="text-charcoal font-serif">
                                                        {info.value}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minimal CTA */}
                        <div className="border border-charcoal bg-charcoal text-cream p-8 md:p-12">
                            <h4 className="text-2xl font-serif font-medium mb-4">
                                Community
                            </h4>
                            <p className="text-cream/60 font-light mb-8 text-sm">
                                Join the pursuit of culinary mastery. Let us notify you of our findings.
                            </p>
                            <button className="border border-cream/20 hover:border-cream/100 text-xs uppercase tracking-[0.2em] py-3 px-6 transition-colors duration-300 rounded-none w-full text-left flex justify-between items-center group">
                                <span>Subscribe</span>
                                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
