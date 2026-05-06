"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Construction,
  HardHat,
  Truck,
  Settings,
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  Clock,
  Gem,
  Mountain,
  Layers,
  CircleDot,
  Radio,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const services = [
  {
    icon: HardHat,
    title: "Mining",
    description: "Licensed mining operations for industrial materials. We hold Primary Mining Licenses (PMLs) for feldspar, dolomite, aggregates, and other industrial minerals, with expertise in open pit and underground mining.",
    image: "/Equipments Images/Mining.jpg",
    features: [
      "Primary Mining Licenses (PMLs) for feldspar, dolomite & aggregates",
      "Open pit and underground mining",
      "Quarry extraction and stone crushing",
      "Drilling and blasting operations",
      "Aggregate classification and separation",
      "Coal and mineral extraction",
    ],
  },
  {
    icon: Construction,
    title: "Civil & Building Contractors",
    description: "Comprehensive civil engineering and building construction solutions for infrastructure development",
    image: "/Equipments Images/Civil construction.jpg",
    features: [
      "Earthworks & excavation",
      "Road works & rehabilitation",
      "Drainage and stormwater systems",
      "Residential & commercial buildings",
      "Industrial facilities",
      "Turnkey project delivery",
    ],
  },
  {
    icon: Settings,
    title: "Equipment Rental",
    description: "Heavy equipment leasing and operation services with experienced operators",
    image: "/Equipments Images/Equipment-rental.jpeg",
    features: [
      "Equipment leasing with operator",
      "Short and long-term hire",
      "Excavators, loaders, graders, dozers",
      "Standby support for project sites",
      "Preventive maintenance programs",
    ],
  },
  {
    icon: Truck,
    title: "Transportation",
    description: "Reliable transport solutions for construction and project needs",
    image: "/Equipments Images/Transportation.jpeg",
    features: [
      "Construction material haulage",
      "Heavy cargo transportation",
      "Site logistics planning",
      "Equipment mobilization",
    ],
  },
  {
    icon: Radio,
    title: "ECTS Tracking",
    description: "TRA-authorized Electronic Cargo Tracking System for real-time fleet and cargo monitoring",
    image: "/Equipments Images/ECTS.jpeg",
    features: [
      "Containerized cargo tracking",
      "Wet Cargo (Fuel/Oil) monitoring",
      "IT vehicles (Trucks/LIV's) tracking",
      "Loose Cargo (Flatbed/box body) tracking",
      "Real-time seal status monitoring",
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
        backgroundImage="/istockphoto-2191101045-612x612.jpg"
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
                        className="object-cover w-full h-64 sm:h-80"
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
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
                      href="/quote-request"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Why Choose Amarachi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through experience, equipment, and commitment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-heading">
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
                href="/quote-request"
                className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-sm sm:text-base"
              >
                <span>Get ECTS Solution</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/20 rounded-3xl transform rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/istockphoto-1665924932-612x612.jpg"
                  alt="ECTS Tracking"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mining Licenses Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary-light font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Licensed Operations</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-heading">
              Primary Mining Licenses (PMLs)
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Mining of industrial materials is one of the business activities generating 
              significant revenue for our company. We hold several Primary Mining Licenses 
              for different materials, showcasing our strength and active involvement in the mining sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gem,
                title: "Feldspar",
                description: "Licensed extraction and processing of feldspar for industrial and ceramic applications.",
                image: "/mining/Feldspar.jpg",
              },
              {
                icon: Mountain,
                title: "Dolomite",
                description: "Primary Mining License for dolomite used in construction, steel, and glass manufacturing.",
                image: "/mining/Dolomite.webp",
              },
              {
                icon: Layers,
                title: "Aggregates",
                description: "Licensed quarry operations producing crushed stone, sand, and gravel for infrastructure.",
                image: "/mining/Aggregates.jpg",
              },
              {
                icon: CircleDot,
                title: "Other Industrial Materials",
                description: "Additional PMLs covering various industrial minerals and raw material extraction.",
                image: "/mining/other industrial materials.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-brand-secondary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <item.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-1">
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <Link
            href="/quote-request"
            className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
