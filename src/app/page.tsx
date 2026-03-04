"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  HardHat,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Construction,
  MapPin,
  Settings,
  TrendingUp,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import SectionWrapper from "@/components/SectionWrapper";

const heroHighlights = [
  { icon: Settings, text: "Modern Fleet & Equipment" },
  { icon: Users, text: "Skilled Engineers & Operators" },
  { icon: Shield, text: "Safety & Quality Focused" },
];

const services = [
  {
    title: "Civil Engineering Works",
    description: "Earthworks, roads, drainage, and infrastructure support.",
    icon: Construction,
  },
  {
    title: "Building Construction",
    description: "Residential, commercial, and industrial projects.",
    icon: Building2,
  },
  {
    title: "Transportation & Logistics",
    description: "Materials haulage, heavy cargo, and project logistics.",
    icon: Truck,
  },
  {
    title: "Equipment & Machinery Supply",
    description: "Excavators, loaders, graders, dozers, rollers, and more.",
    icon: Settings,
  },
  {
    title: "ECTS Tracking System",
    description: "Real-time monitoring for equipment security and productivity.",
    icon: MapPin,
  },
  {
    title: "Project Support & Mobilization",
    description: "Fast deployment of teams, machines, and transport to site.",
    icon: TrendingUp,
  },
];

const trustItems = [
  { icon: Truck, label: "Heavy Equipment Fleet" },
  { icon: MapPin, label: "Transport & Logistics Support" },
  { icon: Construction, label: "Civil & Building Works" },
  { icon: Settings, label: "ECTS Tracking Enabled" },
];

const equipmentCategories = [
  "Excavators",
  "Wheel Loaders",
  "Graders",
  "Bulldozers",
  "Backhoes",
  "Tipper Trucks",
  "Rollers",
  "Trailers & Flatbeds",
  "Pickups",
];

const processSteps = [
  {
    number: "01",
    title: "Initiation",
    description: "Requirements, site understanding, and budget alignment",
  },
  {
    number: "02",
    title: "Planning",
    description: "Scheduling, engineering review, resource allocation",
  },
  {
    number: "03",
    title: "Mobilization",
    description: "Equipment and manpower deployment",
  },
  {
    number: "04",
    title: "Execution",
    description: "Supervised work with quality checks",
  },
  {
    number: "05",
    title: "Handover",
    description: "Final inspection and client approval",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg"
            alt="Construction Site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-secondary/20 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                <span>Transporters | Civil & Building Contractors</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                Building Infrastructure.<br />
                <span className="text-brand-secondary">Moving Progress.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                Amarachi Investment Company Ltd delivers dependable civil works, 
                building construction, transportation logistics, and heavy equipment 
                solutions across Tanzania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-brand-dark transition-all duration-300"
                >
                  View Our Services
                </Link>
              </div>

              {/* Hero Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                {heroHighlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 text-white"
                  >
                    <div className="w-10 h-10 bg-brand-primary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-brand-primary-light" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-secondary/20 rounded-3xl transform rotate-3" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08.jpeg"
                    alt="Heavy Equipment"
                    width={600}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <SectionWrapper className="bg-brand-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 text-white"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-brand-secondary" />
                </div>
                <span className="font-medium text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Snapshot */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary-light/10 rounded-3xl transform -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg"
                  alt="Construction Worker"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-secondary text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">Trusted</div>
                <div className="text-sm opacity-90">Contractor</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-secondary" />
                <span className="uppercase tracking-wide text-sm">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-heading">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Amarachi Investment Company Ltd is a Tanzania-based company providing 
                transport, civil engineering, and building construction services supported 
                by a strong equipment fleet and professional teams.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We work with government, institutions, contractors, and private clients 
                to deliver projects efficiently, safely, and on schedule.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Civil & building project execution",
                  "Equipment leasing & operations",
                  "Logistics support for construction sites",
                  "Real-time fleet monitoring (ECTS)",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-brand-secondary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Preview */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">What We Do</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for construction, transport, and equipment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark transition-all duration-300"
            >
              <span>Explore All Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment Fleet Preview */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-secondary" />
                <span className="uppercase tracking-wide text-sm">Our Fleet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-heading">
                Equipment & Machinery Fleet
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our operations are powered by a wide range of heavy-duty machinery 
                and transport vehicles to support projects of all sizes.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {equipmentCategories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-brand-primary/5 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/10"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <Link
                href="/equipment"
                className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
              >
                <span>View Fleet List</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09.jpeg"
                    alt="Excavator"
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11.jpeg"
                    alt="Construction Equipment"
                    width={300}
                    height={200}
                    className="object-cover w-full h-64"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.12.jpeg"
                    alt="Grader"
                    width={300}
                    height={200}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13.jpeg"
                    alt="Excavation Work"
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Our Work</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Major infrastructure projects we are currently executing across Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Julius Nyerere Hydropower Plant",
                location: "Stigler's Gorge, Morogoro",
                description: "2115MW hydropower plant construction",
                image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg",
              },
              {
                title: "Standard Gauge Railway",
                location: "Dar es Salaam - Tabora",
                description: "1,016km railway construction",
                image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.14.jpeg",
              },
              {
                title: "Kabulo-Kiwira Coal Mine",
                location: "Kiwira-Ileje District",
                description: "Coal mining and power plant project",
                image: "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15.jpeg",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* How We Work - Process */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary-light font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Our Process</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Our Project Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering successful projects
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                  <span className="text-2xl font-bold text-brand-secondary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-brand-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Safety & Quality */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Shield size={28} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">
                Safety First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We follow strict HSE practices including PPE compliance, risk assessments, 
                and continuous site safety training. Our commitment to safety ensures 
                the well-being of our team and the success of your projects.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle size={28} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We apply structured supervision, equipment maintenance routines, and 
                consistent quality checks to meet project specifications. Every project 
                undergoes rigorous inspection before handover.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (1).jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Need equipment, transport, or a contractor you can trust?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Talk to our team today for quotations, site visits, and project planning support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255713057706?text=Hello Amarachi, I need a quote for..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:0713057706"
              className="inline-flex items-center justify-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
