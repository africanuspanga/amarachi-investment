"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Mbezi Beach, Plot No. 2346 Kilongawima\nP.O. Box 20914, Dar es Salaam, Tanzania",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "0713 057706 / 0713 333177\n0658 068760",
    href: "tel:0713057706",
  },
  {
    icon: Mail,
    title: "Email",
    content: "amarachiinvestmentcoltd@gmail.com",
    href: "mailto:amarachiinvestmentcoltd@gmail.com",
  },
];

const serviceOptions = [
  "Civil Engineering",
  "Building Construction",
  "Transportation",
  "Equipment Hire",
  "ECTS Tracking",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    let message = `*Contact Form Submission*\n\n`;
    message += `*Name:* ${formData.fullName}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    if (formData.email) message += `*Email:* ${formData.email}\n`;
    message += `*Service Needed:* ${formData.service}\n\n`;
    message += `*Message:*\n${formData.message}`;

    // Encode and open WhatsApp
    const phoneNumber = "255713057706";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Request a quote, book a site visit, or ask about equipment availability"
        backgroundImage="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (2).jpeg"
      />

      {/* Contact Cards */}
      <SectionWrapper className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-600 whitespace-pre-line hover:text-brand-primary transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 font-heading">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Opening WhatsApp...</h3>
                  <p className="text-green-700">
                    Your message will be sent via WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                        placeholder="Lucas Msuya"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                        placeholder="0713 057706"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="lucas@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Quick Contact */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.054739226083!2d39.192635!3d-6.782431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c4d6e0e6b5e3b1%3A0x8c5e8e0e6b5e3b1!2sMbezi%20Beach%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Quick Contact Options */}
              <div className="bg-brand-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 font-heading">
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:0713057706"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-medium">Call Us Now</div>
                      <div className="text-white/70 text-sm">0713 057706</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/255713057706?text=Hello Amarachi, I need a quote for..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-green-500/20 rounded-xl hover:bg-green-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp Us</div>
                      <div className="text-white/70 text-sm">Quick response guaranteed</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <SectionWrapper className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock size={32} className="text-brand-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 font-heading">
            Working Hours
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is available to assist you during the following hours
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="font-semibold text-brand-dark mb-2">Monday - Friday</div>
              <div className="text-gray-600">8:00 AM - 5:00 PM</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="font-semibold text-brand-dark mb-2">Saturday</div>
              <div className="text-gray-600">8:00 AM - 12:00 PM</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
