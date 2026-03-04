"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Settings,
  ExternalLink,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const categories = [
  "All",
  "Trucks",
  "Excavators",
  "Loaders",
  "Graders",
  "Dozers",
  "Rollers",
  "Pickups",
  "Trailers",
  "Cranes",
  "Backhoes",
];

const equipment = [
  { id: 1, name: "HOWO 371", code: "T 278 DRU", category: "Trucks", specs: "371 HP", status: "Available" },
  { id: 2, name: "HOWO 371", code: "T 289 DRU", category: "Trucks", specs: "371 HP", status: "Available" },
  { id: 3, name: "HOWO 371", code: "T 280 DRU", category: "Trucks", specs: "371 HP", status: "Available" },
  { id: 4, name: "HOWO 371", code: "T 283 DRU", category: "Trucks", specs: "371 HP", status: "Available" },
  { id: 5, name: "HOWO 371", code: "T 282 DRU", category: "Trucks", specs: "371 HP", status: "Available" },
  { id: 6, name: "FAW HP 280", code: "T 563 DKD", category: "Trucks", specs: "280 HP", status: "Available" },
  { id: 7, name: "FAW HP 280", code: "T 561 DKD", category: "Trucks", specs: "280 HP", status: "Available" },
  { id: 8, name: "FAW HP 280", code: "T 967 DEF", category: "Trucks", specs: "280 HP", status: "Available" },
  { id: 9, name: "FAW HP 380", code: "T 645 DQV", category: "Trucks", specs: "380 HP", status: "Available" },
  { id: 10, name: "FAW HP 380", code: "T 626 DZE", category: "Trucks", specs: "380 HP", status: "Available" },
  { id: 11, name: "FAW HP 380", code: "T 475 EAR", category: "Trucks", specs: "380 HP", status: "Available" },
  { id: 12, name: "HOWO 8*4", code: "T 351 EDN", category: "Trucks", specs: "8x4 Configuration", status: "Available" },
  { id: 13, name: "HOWO 8*4", code: "T 354 EDN", category: "Trucks", specs: "8x4 Configuration", status: "Available" },
  { id: 14, name: "HOWO 8*4", code: "T 348 EDN", category: "Trucks", specs: "8x4 Configuration", status: "Available" },
  { id: 15, name: "Mitsubishi Double Cabin L200", code: "T 976 DTT", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 16, name: "Mitsubishi Double Cabin L200", code: "T 140 DTV", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 17, name: "Mitsubishi Double Cabin L200", code: "T 291 DTS", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 18, name: "Mitsubishi Double Cabin L200", code: "T 270 DGR", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 19, name: "Mitsubishi Double Cabin L200", code: "T 313 DDU", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 20, name: "Mitsubishi Double Cabin L200", code: "T 751 DEN", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 21, name: "JCB R3DX", code: "T 919 DPW", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 22, name: "JCB R3DX", code: "T 700 DXS", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 23, name: "CAT Backhoe", code: "T 684 DZN", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 24, name: "Wheel Loader SDLG L956F", code: "T 488 DTQ", category: "Loaders", specs: "Heavy Duty Loader", status: "Available" },
  { id: 25, name: "Wheel Loader SDLG L956F", code: "T 879 DTS", category: "Loaders", specs: "Heavy Duty Loader", status: "Available" },
  { id: 26, name: "Wheel Loader SDLG L956F", code: "T 862 DAE", category: "Loaders", specs: "Heavy Duty Loader", status: "Available" },
  { id: 27, name: "Wheel Loader SDLG LG936L", code: "T 653 CXC", category: "Loaders", specs: "Medium Duty Loader", status: "Available" },
  { id: 28, name: "Wheel Loader SDLG", code: "T 756 ECM", category: "Loaders", specs: "Wheel Loader", status: "Available" },
  { id: 29, name: "Roller SDLG RS8140", code: "T 958 DPX", category: "Rollers", specs: "Road Roller", status: "Available" },
  { id: 30, name: "Excavator SDLG E6225F", code: "T 875 DXD", category: "Excavators", specs: "22.5 Ton", status: "Available" },
  { id: 31, name: "Excavator SDLG E6225F", code: "T 654 DXX", category: "Excavators", specs: "22.5 Ton", status: "Available" },
  { id: 32, name: "Excavator SDLG E6360F", code: "T 876 DXD", category: "Excavators", specs: "36 Ton", status: "Available" },
  { id: 33, name: "SDLG Excavator", code: "T 646 EBZ", category: "Excavators", specs: "Crawler Excavator", status: "Available" },
  { id: 34, name: "Grader SDLG G9190F", code: "T 704 DAX", category: "Graders", specs: "190 HP Motor Grader", status: "Available" },
  { id: 35, name: "Wheel Excavator SDLG", code: "T 402 ECA", category: "Excavators", specs: "Wheeled Excavator", status: "Available" },
  { id: 36, name: "Wheel Excavator SDLG", code: "T 647 EBZ", category: "Excavators", specs: "Wheeled Excavator", status: "Available" },
  { id: 37, name: "Wheel Loader XCMG QY50KD", code: "T 460 DTW", category: "Loaders", specs: "50 Ton Crane Loader", status: "Available" },
  { id: 38, name: "Crane XCMG 50TON", code: "T 326 DVM", category: "Cranes", specs: "50 Ton Mobile Crane", status: "Available" },
  { id: 39, name: "Semi Tipper Hongyan", code: "T 209 DYB", category: "Trailers", specs: "Semi Tipper Trailer", status: "Available" },
];

// Equipment images mapping - using real equipment images
const equipmentImages: Record<string, string[]> = {
  Trucks: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09.jpeg",
  ],
  Excavators: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11.jpeg",
  ],
  Loaders: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.12.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13.jpeg",
  ],
  Graders: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.14.jpeg",
  ],
  Pickups: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.14 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15.jpeg",
  ],
  Backhoes: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15 (1).jpeg",
  ],
  Rollers: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15 (2).jpeg",
  ],
  default: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (2).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (2).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (3).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13 (2).jpeg",
  ],
};

function getEquipmentImage(category: string, index: number): string {
  const images = equipmentImages[category] || equipmentImages.default;
  return images[index % images.length];
}

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEquipment =
    activeCategory === "All"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        title="Equipment & Fleet"
        subtitle="Modern machinery and transport vehicles ready for your project"
        backgroundImage="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (2).jpeg"
      />

      {/* Intro */}
      <SectionWrapper className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-600 leading-relaxed">
            We maintain an extensive fleet to support civil works, hauling, and 
            construction operations. All equipment is regularly serviced and maintained 
            to ensure optimal performance and safety on your projects.
          </p>
        </div>
      </SectionWrapper>

      {/* Equipment Grid */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Equipment Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredEquipment.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getEquipmentImage(item.category, index)}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Available"
                            ? "bg-green-500 text-white"
                            : "bg-orange-500 text-white"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-primary rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-dark mt-1 mb-1 font-heading">
                      {item.name}
                    </h3>
                    <p className="text-brand-secondary font-semibold text-sm mb-2">{item.code}</p>
                    <p className="text-gray-500 text-sm mb-4">{item.specs}</p>
                    <Link
                      href={`/contact?subject=Hire ${item.name} (${item.code})`}
                      className="inline-flex items-center space-x-1 text-brand-primary font-semibold text-sm hover:text-brand-secondary transition-colors"
                    >
                      <span>Hire This Equipment</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <Settings size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No equipment found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <SectionWrapper className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              Need the Complete Equipment List?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              View and download our full equipment catalog with detailed specifications, 
              availability, and pricing information.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/11_IvmHP2w7IHUg6-AUVHXAolEWIppVjx/edit?usp=sharing&ouid=111485313206214396180&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Download size={20} />
              <span>Download Full Equipment List</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment Gallery */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Gallery</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Our Equipment in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real photos of our machinery and fleet at work sites across Tanzania
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.12.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13.jpeg",
              "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.14.jpeg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Equipment ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Our Equipment */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-secondary" />
                <span className="uppercase tracking-wide text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-heading">
                Quality Equipment, Reliable Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our equipment fleet is maintained to the highest standards to ensure 
                your projects run smoothly and efficiently. We provide experienced 
                operators with all equipment rentals.
              </p>
              <ul className="space-y-4">
                {[
                  "Regular maintenance and safety inspections",
                  "Experienced certified operators included",
                  "Flexible rental terms - daily, weekly, monthly",
                  "24/7 support and breakdown assistance",
                  "GPS tracking on all equipment",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-brand-secondary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-secondary/10 rounded-3xl transform -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.15.jpeg"
                  alt="Equipment at work"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
