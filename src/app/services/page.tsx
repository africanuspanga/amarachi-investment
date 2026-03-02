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
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    icon: Construction,
    title: "Civil Engineering Works",
    description: "Comprehensive civil engineering solutions for infrastructure development",
    image: "/excavation-work-progress.jpg",
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
    image: "/view-modern-construction-site.jpg",
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
    image: "/istockphoto-1999693470-612x612.jpg",
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
    image: "/heavy-excavator-digging-day-light.jpg",
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
    image: "/istockphoto-2234635526-612x612.jpg",
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
    image: "/view-modern-construction-site.jpg",
    features: [
      "Rapid deployment of machines and crews",
      "Flexible scheduling",
      "Multi-site operations support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete solutions for construction, transport, and equipment"
        backgroundImage="/excavator-digging-ground-day-light.jpg"
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
                        <div className="w-14 h-14 bg-brand-gold rounded-xl flex items-center justify-center">
                          <service.icon size={28} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center space-x-2 text-brand-blue font-medium mb-4">
                      <div className="w-8 h-0.5 bg-brand-gold" />
                      <span className="uppercase tracking-wide text-sm">Service {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-brand-blue font-semibold hover:text-brand-gold transition-colors"
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

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-brand-gold text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg"
          >
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
