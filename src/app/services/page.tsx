"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Construction,
  Building2,
  Truck,
  Settings,
  MapPin,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    icon: Construction,
    title: "Civil Engineering Works",
    description: "Comprehensive civil engineering solutions for infrastructure development",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg",
    features: [
      "Earthworks & excavation",
      "Road works & rehabilitation",
      "Drainage and stormwater systems",
      "Site preparation & leveling",
      "Concrete and structural works support",
    ],
  },
  {
    icon: Building2,
    title: "Building Construction",
    description: "Quality construction services for various building types",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11.jpeg",
    features: [
      "Residential & commercial buildings",
      "Industrial facilities",
      "Renovation & maintenance",
      "Turnkey project delivery",
    ],
  },
  {
    icon: Truck,
    title: "Transportation & Logistics",
    description: "Reliable transport solutions for construction and project needs",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg",
    features: [
      "Construction material haulage",
      "Heavy cargo transportation",
      "Site logistics planning",
      "Equipment mobilization",
    ],
  },
  {
    icon: Settings,
    title: "Equipment & Machinery Supply",
    description: "Heavy equipment leasing and operation services",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.12.jpeg",
    features: [
      "Equipment leasing with operator",
      "Short and long-term hire",
      "Standby support for project sites",
      "Preventive maintenance programs",
    ],
  },
  {
    icon: MapPin,
    title: "ECTS Tracking System",
    description: "Advanced fleet and equipment monitoring solutions",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13.jpeg",
    features: [
      "Real-time equipment visibility",
      "Fuel monitoring",
      "Security and theft prevention",
      "Maintenance scheduling",
      "Productivity reporting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Project Mobilization & Support",
    description: "Rapid deployment and support for your projects",
    image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.14.jpeg",
    features: [
      "Rapid deployment of machines and crews",
      "Flexible scheduling",
      "Multi-site operations support",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safety Guaranteed",
    description: "Strict HSE practices and continuous safety training for all personnel",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Structured supervision and quality checks on every project",
  },
  {
    icon: Settings,
    title: "Modern Equipment",
    description: "Well-maintained fleet with GPS tracking and experienced operators",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Commitment to completing projects on schedule, every time",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete solutions for construction, transport, and equipment"
        backgroundImage="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08.jpeg"
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <SectionWrapper key={service.title}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 bg-brand-secondary rounded-xl flex items-center justify-center">
                          <service.icon size={28} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
                      <div className="w-8 h-0.5 bg-brand-secondary" />
                      <span className="uppercase tracking-wide text-sm">Service {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Why Us</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Why Choose Amarachi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through experience, equipment, and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ECTS Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-primary-light font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-secondary" />
                <span className="uppercase tracking-wide text-sm">TRA Authorized</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Electronic Cargo Tracking System (ECTS)
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Amarachi Investment Company Limited is an AUTHORISED VENDOR by Tanzania Revenue Authority (TRA) 
                to supply Hardware/Tracking solutions for all transit cargos under the Electronic Cargo Tracking System (ECTS).
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Containerized cargo tracking",
                  "Wet Cargo (Fuel/Oil) monitoring",
                  "IT vehicles (Trucks/LIV's) tracking",
                  "Loose Cargo (Flatbed/box body) tracking",
                  "Real-time seal status monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-brand-secondary flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                <span>Get ECTS Solution</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/20 rounded-3xl transform rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15 (1).jpeg"
                  alt="ECTS Tracking"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
          >
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
