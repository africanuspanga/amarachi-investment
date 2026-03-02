"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Settings,
  ImageIcon,
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
];

const equipment = [
  {
    id: 1,
    name: "Caterpillar 320D Excavator",
    category: "Excavators",
    specs: "20-ton class, Hydraulic",
    status: "Available",
  },
  {
    id: 2,
    name: "Komatsu PC200 Excavator",
    category: "Excavators",
    specs: "20-ton class, Tier 4 Engine",
    status: "On Project",
  },
  {
    id: 3,
    name: "Caterpillar 950M Wheel Loader",
    category: "Loaders",
    specs: "3.5 cubic yard bucket",
    status: "Available",
  },
  {
    id: 4,
    name: "Komatsu WA380 Wheel Loader",
    category: "Loaders",
    specs: "3.2 cubic yard bucket",
    status: "Available",
  },
  {
    id: 5,
    name: "Caterpillar 140H Motor Grader",
    category: "Graders",
    specs: "14-foot moldboard",
    status: "Available",
  },
  {
    id: 6,
    name: "Komatsu D85 Bulldozer",
    category: "Dozers",
    specs: "205 HP, Straight blade",
    status: "On Project",
  },
  {
    id: 7,
    name: "Dynapac CA150 Roller",
    category: "Rollers",
    specs: "10-ton, Smooth drum",
    status: "Available",
  },
  {
    id: 8,
    name: "Howo Tipper Truck 30T",
    category: "Trucks",
    specs: "30-ton capacity",
    status: "Available",
  },
  {
    id: 9,
    name: "Isuzu FVR Tipper",
    category: "Trucks",
    specs: "15-ton capacity",
    status: "Available",
  },
  {
    id: 10,
    name: "Toyota Hilux Pickup",
    category: "Pickups",
    specs: "4x4, Double cab",
    status: "Available",
  },
  {
    id: 11,
    name: "Flatbed Trailer 40ft",
    category: "Trailers",
    specs: "40-foot, Heavy duty",
    status: "Available",
  },
  {
    id: 12,
    name: "Lowboy Trailer",
    category: "Trailers",
    specs: "60-ton capacity",
    status: "On Project",
  },
];

// Image Placeholder Component
function ImagePlaceholder({ text = "Image Coming Soon" }: { text?: string }) {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 h-48 w-full">
      <ImageIcon size={40} className="mb-2 opacity-50" />
      <span className="text-xs font-medium text-center px-2">{text}</span>
    </div>
  );
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
        backgroundImage="/excavation-work-progress.jpg"
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
                    ? "bg-brand-blue text-white shadow-lg"
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
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden p-4">
                    <ImagePlaceholder text={`${item.name} - Image Coming Soon`} />
                    <div className="absolute top-6 right-6">
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
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-brand-blue uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mt-1 mb-2 font-heading">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{item.specs}</p>
                    <Link
                      href={`/contact?subject=Hire ${item.name}`}
                      className="inline-flex items-center space-x-1 text-brand-gold font-semibold text-sm hover:text-yellow-600 transition-colors"
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
          <div className="bg-brand-blue rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              Need the Complete Equipment List?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Download our full equipment catalog with detailed specifications, 
              availability, and pricing information.
            </p>
            <button
              className="inline-flex items-center space-x-2 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              onClick={() => alert("Full equipment list download will be available soon.")}
            >
              <Download size={20} />
              <span>Download Full Equipment List (PDF)</span>
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Our Equipment */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand-blue font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
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
                    <CheckCircle size={20} className="text-brand-gold flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl transform -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <ImagePlaceholder text="Equipment Images Coming Soon" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
