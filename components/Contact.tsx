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
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg sm:text-xl text-charcoal/60 max-w-2xl mx-auto">
                        Have a question about a recipe or want to collaborate? We&rsquo;d love to hear from you!
                    </p>
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
                                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-charcoal/10 bg-white focus:border-orange focus:outline-none transition-colors text-charcoal"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-charcoal/10 bg-white focus:border-orange focus:outline-none transition-colors text-charcoal"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border-2 border-charcoal/10 bg-white focus:border-orange focus:outline-none transition-colors text-charcoal"
                                    placeholder="Recipe Inquiry"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-charcoal/10 bg-white focus:border-orange focus:outline-none transition-colors text-charcoal resize-none"
                                    placeholder="Tell us what&rsquo;s on your mind..."
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
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-orange text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
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
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-3xl p-8 md:p-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6">
                                Contact Information
                            </h3>
                            <p className="text-charcoal/70 mb-8 leading-relaxed">
                                Reach out to us through any of these channels. We&rsquo;re always happy to connect
                                with food enthusiasts and answer your culinary questions!
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ ...springConfig, delay: 0.1 * index }}
                                        className="group"
                                    >
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                                            >
                                                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                                                    <info.icon className="w-6 h-6 text-orange" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-charcoal/60 mb-1">
                                                        {info.label}
                                                    </div>
                                                    <div className="text-charcoal font-medium group-hover:text-orange transition-colors">
                                                        {info.value}
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md">
                                                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                                                    <info.icon className="w-6 h-6 text-orange" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-charcoal/60 mb-1">
                                                        {info.label}
                                                    </div>
                                                    <div className="text-charcoal font-medium">
                                                        {info.value}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Additional CTA or Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...springConfig, delay: 0.3 }}
                            className="bg-charcoal text-white rounded-3xl p-8 md:p-10"
                        >
                            <h4 className="text-xl sm:text-2xl font-bold mb-4">
                                Join Our Culinary Community
                            </h4>
                            <p className="text-white/80 mb-6">
                                Stay updated with our latest recipes, cooking tips, and exclusive content.
                                Subscribe to our newsletter for weekly inspiration!
                            </p>
                            <button className="bg-orange text-white font-bold py-3 px-6 rounded-xl hover:bg-orange/90 transition-colors">
                                Subscribe Now
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
