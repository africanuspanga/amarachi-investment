"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Building2,
  Truck,
  Settings,
  MapPin,
  TrendingUp,
  Construction,
  Calendar,
  DollarSign,
  FileText,
  User,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "civil-engineering", label: "Civil Engineering Works" },
  { value: "building-construction", label: "Building Construction" },
  { value: "transportation", label: "Transportation & Logistics" },
  { value: "equipment-hire", label: "Equipment & Machinery Hire" },
  { value: "ects-tracking", label: "ECTS Tracking System" },
  { value: "project-mobilization", label: "Project Mobilization & Support" },
  { value: "multiple", label: "Multiple Services" },
];

const projectTypes = [
  { value: "", label: "Select project type..." },
  { value: "residential", label: "Residential Construction" },
  { value: "commercial", label: "Commercial Building" },
  { value: "industrial", label: "Industrial Project" },
  { value: "infrastructure", label: "Infrastructure/Roads" },
  { value: "earthworks", label: "Earthworks/Excavation" },
  { value: "hauling", label: "Material Hauling" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "", label: "Select budget range..." },
  { value: "under-10m", label: "Under TZS 10 Million" },
  { value: "10m-50m", label: "TZS 10 Million - 50 Million" },
  { value: "50m-100m", label: "TZS 50 Million - 100 Million" },
  { value: "100m-500m", label: "TZS 100 Million - 500 Million" },
  { value: "500m-1b", label: "TZS 500 Million - 1 Billion" },
  { value: "over-1b", label: "Over TZS 1 Billion" },
  { value: "discuss", label: "To be discussed" },
];

const timelineOptions = [
  { value: "", label: "Select timeline..." },
  { value: "immediate", label: "Immediate (Within 1 week)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "6-months", label: "Within 6 months" },
  { value: "planning", label: "Still planning" },
];

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    projectType: "",
    service: "",
    budgetRange: "",
    timeline: "",
    projectLocation: "",
    projectDescription: "",
    specialRequirements: "",
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
    let message = `*Quote Request*\n\n`;
    message += `*Personal Information:*\n`;
    message += `Name: ${formData.fullName}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    if (formData.companyName) message += `Company: ${formData.companyName}\n`;
    
    message += `\n*Project Information:*\n`;
    message += `Project Type: ${projectTypes.find(p => p.value === formData.projectType)?.label || formData.projectType}\n`;
    message += `Service Needed: ${serviceOptions.find(s => s.value === formData.service)?.label || formData.service}\n`;
    message += `Budget Range: ${budgetRanges.find(b => b.value === formData.budgetRange)?.label || formData.budgetRange}\n`;
    message += `Timeline: ${timelineOptions.find(t => t.value === formData.timeline)?.label || formData.timeline}\n`;
    message += `Location: ${formData.projectLocation}\n`;
    
    message += `\n*Project Description:*\n${formData.projectDescription}\n`;
    
    if (formData.specialRequirements) {
      message += `\n*Special Requirements:*\n${formData.specialRequirements}\n`;
    }

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
        companyName: "",
        projectType: "",
        service: "",
        budgetRange: "",
        timeline: "",
        projectLocation: "",
        projectDescription: "",
        specialRequirements: "",
      });
    }, 3000);
  };

  return (
    <>
      <PageHero
        title="Request a Quote"
        subtitle="Tell us about your project and we'll provide a customized quote"
        backgroundImage="/view-modern-construction-site.jpg"
      />

      {/* Form Section */}
      <SectionWrapper className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-2xl mb-4">
                <Send size={32} className="text-brand-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 font-heading">
                Get Your Custom Quote
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Fill in the details below about your project and requirements. 
                Our team will review and get back to you with a comprehensive quote via WhatsApp.
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
                <h3 className="text-xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                <p className="text-green-700">
                  Opening WhatsApp to send your quote request...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                    <User size={20} className="mr-2 text-brand-primary" />
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                        placeholder="Lucas Msuya"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                          placeholder="0713 057706"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                          placeholder="lucas@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                    <Construction size={20} className="mr-2 text-brand-primary" />
                    Project Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      >
                        {serviceOptions.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        Estimated Budget
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      >
                        {timelineOptions.map((timeline) => (
                          <option key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Location */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                    <MapPinned size={20} className="mr-2 text-brand-primary" />
                    Project Location
                  </h3>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                      placeholder="Enter project location (e.g., Dar es Salaam, Mwanza, etc.)"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                    <FileText size={20} className="mr-2 text-brand-primary" />
                    Project Description
                  </h3>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your project in detail. Include scope of work, specific requirements, expected deliverables, etc."
                  />
                </div>

                {/* Special Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-4 flex items-center">
                    <Settings size={20} className="mr-2 text-brand-primary" />
                    Special Requirements
                  </h3>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                    placeholder="Any special requirements, equipment specifications, or additional information..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Quote Request via WhatsApp</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Your request will be sent to us via WhatsApp for quick response.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Request a Quote */}
      <SectionWrapper className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 font-heading">
              Why Request a Quote from Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide competitive pricing and comprehensive solutions tailored to your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Competitive Pricing",
                description: "We offer fair and transparent pricing for all our services, ensuring you get the best value for your investment.",
              },
              {
                icon: Calendar,
                title: "Quick Turnaround",
                description: "Receive your detailed quote within 24-48 hours of your request, so you can plan your project timeline effectively.",
              },
              {
                icon: TrendingUp,
                title: "Expert Consultation",
                description: "Our experienced team provides professional advice and recommendations to optimize your project requirements.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
