"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  CheckCircle,
  Plus,
  ShoppingCart,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import DatePickerModal from "@/components/DatePickerModal";
import { useCart } from "@/contexts/CartContext";

type EquipmentItem = {
  id: number;
  name: string;
  code: string;
  category: string;
  specs: string;
  status: string;
};

const categories = [
  "All",
  "Trucks",
  "Excavators",
  "Wheel Excavators",
  "Loaders",
  "Graders",
  "Dozers",
  "Rollers",
  "Pickups",
  "Trailers",
  "Cranes",
  "Backhoes",
];

// Specific images mapped by registration number
const specificImages: Record<string, string> = {
  "T 278 DRU": "/New-Equipments/T 278 DRU-HOWO 371.jpeg",
  "T 875 DXD": "/New-Equipments/EXCAVATOR SDLG E6225F-T 875 DXD.jpeg",
  "T339EDN": "/New-Equipments/HOWO NX 6*4-T339EDN.jpeg",
  "T 326 DXM": "/New-Equipments/T 326 DXM-CRANE XCMG 50TON.jpeg",
  "T 351 EDN": "/New-Equipments/T 351 EDN-HOWO.jpeg",
  "T 958 DPX": "/New-Equipments/T 958 DPX-ROLLER SDLG RS8140.jpeg",
  "T 684 DZN": "/New-Equipments/CAT Backhoe.jpg",
  "T342 DV": "/New-Equipments/Ford Pickup.png",
  "T 209 DYB": "/New-Equipments/Semi Tipper Hongyan.jpg",
};

// Generic images by equipment type
const genericImages: Record<string, string> = {
  "HOWO 371": "/New-Equipments/HOWO NX 6_4-GENERIC-Photoroom.png",
  "HOWO 8*4": "/New-Equipments/HOWO NX 6_4-GENERIC-Photoroom.png",
  "HOWO NX 6*4": "/New-Equipments/HOWO NX 6_4-GENERIC-Photoroom.png",
  "EXCAVATOR SDLG E6225F": "/New-Equipments/exacator -generic-Photoroom.png",
  "EXCAVATOR SDLG E6360F": "/New-Equipments/exacator -generic-Photoroom.png",
  "SDLG EXCAVATOR": "/New-Equipments/exacator -generic-Photoroom.png",
  "EXCAVATOR JCB JS": "/New-Equipments/exacator -generic-Photoroom.png",
  "WHEEL LOADER SDLG L956F": "/New-Equipments/Wheel Loader SDLG-generic-Photoroom.png",
  "WHEEL LOADER SDLG L936L": "/New-Equipments/Wheel Loader SDLG-generic-Photoroom.png",
  "WHEEL LOADER SDLG": "/New-Equipments/Wheel Loader SDLG-generic-Photoroom.png",
  "WHEEL LOADER XCMG QY50KD": "/New-Equipments/Wheel Loader SDLG-generic-Photoroom.png",
  "ROLLER SDLG RS8140": "/New-Equipments/Drum-roller-generic-Photoroom.png",
  "ROLLER SDLG RS8141": "/New-Equipments/Drum roller generic 2-Photoroom.png",
  "GRADER SDLG G9190F": "/New-Equipments/Grader SDLG G9190F-generic.jpg",
  "CAT Backhoe": "/New-Equipments/CAT Backhoe.jpg",
  "Backhoe JCB 3DX": "/New-Equipments/CAT Backhoe.jpg",
  "JCB R3DX": "/New-Equipments/CAT Backhoe.jpg",
  "Flat Bed Trailer": "/New-Equipments/Flat Bed Trailer.png",
  "Trailer": "/New-Equipments/Heavy Duty Trailer-Photoroom.png",
  "Semi Tipper Hongyan": "/New-Equipments/Semi Tipper Hongyan.jpg",
  "Ford Pickup": "/New-Equipments/Ford Pickup.png",
  "Dozer LIUGONG CLGB 230": "/New-Equipments/exacator -generic-Photoroom.png",
};

// Fallback category images
const categoryImages: Record<string, string[]> = {
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
  "Wheel Excavators": [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg",
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
  Dozers: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (2).jpeg",
  ],
  Cranes: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (3).jpeg",
  ],
  Trailers: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (1).jpeg",
  ],
  default: [
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.09 (2).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10 (2).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.11 (1).jpeg",
    "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.13 (2).jpeg",
  ],
};

function getEquipmentImage(item: EquipmentItem, index: number): string {
  // 1. Specific image by registration number
  if (specificImages[item.code]) return specificImages[item.code];
  // 2. Generic image by equipment name
  if (genericImages[item.name]) return genericImages[item.name];
  // 3. Fallback by category
  const images = categoryImages[item.category] || categoryImages.default;
  return images[index % images.length];
}

const equipment = [
  { id: 1, name: "HOWO 371", code: "T 278 DRU", category: "Trucks", specs: "371 HP Heavy Duty Truck", status: "Available" },
  { id: 2, name: "HOWO 371", code: "T 289 DRU", category: "Trucks", specs: "371 HP Heavy Duty Truck", status: "Available" },
  { id: 3, name: "HOWO 371", code: "T 280 DRU", category: "Trucks", specs: "371 HP Heavy Duty Truck", status: "Available" },
  { id: 4, name: "HOWO 371", code: "T 283 DRU", category: "Trucks", specs: "371 HP Heavy Duty Truck", status: "Available" },
  { id: 5, name: "HOWO 371", code: "T 282 DRU", category: "Trucks", specs: "371 HP Heavy Duty Truck", status: "Available" },
  { id: 6, name: "FAW HP 280", code: "T 563 DKD", category: "Trucks", specs: "280 HP Cargo Truck", status: "Available" },
  { id: 7, name: "FAW HP 280", code: "T 561 DKD", category: "Trucks", specs: "280 HP Cargo Truck", status: "Available" },
  { id: 8, name: "FAW HP 280", code: "T 967 DEF", category: "Trucks", specs: "280 HP Cargo Truck", status: "Available" },
  { id: 9, name: "FAW HP 380", code: "T 645 DQV", category: "Trucks", specs: "380 HP Heavy Duty Truck", status: "Available" },
  { id: 10, name: "FAW HP 380", code: "T 626 DZE", category: "Trucks", specs: "380 HP Heavy Duty Truck", status: "Available" },
  { id: 11, name: "FAW HP 380", code: "T 475 EAR", category: "Trucks", specs: "380 HP Heavy Duty Truck", status: "Available" },
  { id: 12, name: "Mitsubishi Double Cabin L200", code: "T 976 DTT", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 13, name: "Mitsubishi Double Cabin L200", code: "T 140 DTV", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 14, name: "Mitsubishi Double Cabin L200", code: "T 291 DTS", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 15, name: "Mitsubishi Double Cabin L200", code: "T 270 DGR", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 16, name: "Mitsubishi Double Cabin L200", code: "T 313 DDU", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 17, name: "Mitsubishi Double Cabin L200", code: "T 751 DEN", category: "Pickups", specs: "Double Cabin 4x4", status: "Available" },
  { id: 18, name: "JCB R3DX", code: "T 919 DPW", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 19, name: "JCB R3DX", code: "T 700 DXS", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 20, name: "Wheel Loader SDLG L956F", code: "T 488 DTQ", category: "Loaders", specs: "Heavy Duty Wheel Loader", status: "Available" },
  { id: 21, name: "Roller SDLG RS8140", code: "T 958 DPX", category: "Rollers", specs: "Road Roller", status: "Available" },
  { id: 22, name: "Wheel Loader SDLG L936L", code: "T 653 CXC", category: "Loaders", specs: "Medium Duty Wheel Loader", status: "Available" },
  { id: 23, name: "Wheel Loader SDLG L956F", code: "T 819 DRR", category: "Loaders", specs: "Heavy Duty Wheel Loader", status: "Available" },
  { id: 24, name: "Wheel Loader SDLG L956F", code: "T 879 DTS", category: "Loaders", specs: "Heavy Duty Wheel Loader", status: "Available" },
  { id: 25, name: "Excavator SDLG E6225F", code: "T 862 DAE", category: "Excavators", specs: "22.5 Ton Crawler Excavator", status: "Available" },
  { id: 26, name: "Excavator SDLG E6360F", code: "T 876 DXD", category: "Excavators", specs: "36 Ton Crawler Excavator", status: "Available" },
  { id: 27, name: "Excavator SDLG E6225F", code: "T 875 DXD", category: "Excavators", specs: "22.5 Ton Crawler Excavator", status: "Available" },
  { id: 28, name: "Grader SDLG G9190F", code: "T 654 DXX", category: "Graders", specs: "190 HP Motor Grader", status: "Available" },
  { id: 29, name: "Grader SDLG G9190F", code: "T 704 DAX", category: "Graders", specs: "190 HP Motor Grader", status: "Available" },
  { id: 30, name: "Wheel Loader XCMG QY50KD", code: "T 460 DTW", category: "Loaders", specs: "50 Ton Crane Loader", status: "Available" },
  { id: 31, name: "Crane XCMG 50TON", code: "T 326 DXM", category: "Cranes", specs: "50 Ton Mobile Crane", status: "Available" },
  { id: 32, name: "CAT Backhoe", code: "T 684 DZN", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 33, name: "Semi Tipper Hongyan", code: "T 209 DYB", category: "Trailers", specs: "Semi Tipper Trailer", status: "Available" },
  { id: 34, name: "SDLG Excavator", code: "T 646 EBZ", category: "Excavators", specs: "Crawler Excavator", status: "Available" },
  { id: 35, name: "Wheel Excavator SDLG", code: "T 402 ECA", category: "Wheel Excavators", specs: "Wheeled Excavator", status: "Available" },
  { id: 36, name: "Wheel Excavator SDLG", code: "T 647 EBZ", category: "Wheel Excavators", specs: "Wheeled Excavator", status: "Available" },
  { id: 37, name: "Wheel Loader SDLG", code: "T 756 ECM", category: "Loaders", specs: "Wheel Loader", status: "Available" },
  { id: 38, name: "HOWO 8*4", code: "T 351 EDN", category: "Trucks", specs: "8x4 Configuration Dump Truck", status: "Available" },
  { id: 39, name: "HOWO 8*4", code: "T 354 EDN", category: "Trucks", specs: "8x4 Configuration Dump Truck", status: "Available" },
  { id: 40, name: "HOWO 8*4", code: "T 348 EDN", category: "Trucks", specs: "8x4 Configuration Dump Truck", status: "Available" },
  { id: 41, name: "HOWO 8*4", code: "T 347 EDN", category: "Trucks", specs: "8x4 Configuration Dump Truck", status: "Available" },
  { id: 42, name: "HOWO NX 6*4", code: "T338EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 43, name: "HOWO NX 6*4", code: "T344EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 44, name: "HOWO NX 6*4", code: "T356EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 45, name: "HOWO NX 6*4", code: "T345EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 46, name: "HOWO NX 6*4", code: "T355EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 47, name: "HOWO NX 6*4", code: "T358EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 48, name: "HOWO NX 6*4", code: "T335EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 49, name: "HOWO NX 6*4", code: "T339EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 50, name: "HOWO NX 6*4", code: "T342EDN", category: "Trucks", specs: "6x4 Heavy Duty Truck", status: "Available" },
  { id: 51, name: "Roller SDLG RS8140", code: "T 898 EAE", category: "Rollers", specs: "Road Roller", status: "Available" },
  { id: 52, name: "Roller SDLG RS8141", code: "T 897 EAE", category: "Rollers", specs: "Road Roller", status: "Available" },
  { id: 53, name: "Dozer LIUGONG CLGB 230", code: "T895 EAM", category: "Dozers", specs: "Bulldozer", status: "Available" },
  { id: 54, name: "Excavator JCB JS", code: "T269 DXX", category: "Excavators", specs: "Crawler Excavator", status: "Available" },
  { id: 55, name: "Excavator JCB JS", code: "T271 DXX", category: "Excavators", specs: "Crawler Excavator", status: "Available" },
  { id: 56, name: "Backhoe JCB 3DX", code: "T570 DWP", category: "Backhoes", specs: "Backhoe Loader", status: "Available" },
  { id: 57, name: "Flat Bed Trailer", code: "T763 EDN", category: "Trailers", specs: "Flat Bed Trailer", status: "Available" },
  { id: 58, name: "Trailer", code: "T760 EDN", category: "Trailers", specs: "Heavy Duty Trailer", status: "Available" },
  { id: 59, name: "Ford Pickup", code: "T342 DV", category: "Pickups", specs: "Pickup Truck", status: "Available" },
  { id: 60, name: "Flat Bed Trailer", code: "T341 EDN", category: "Trailers", specs: "Flat Bed Trailer", status: "Available" },
  { id: 61, name: "Trailer", code: "T340 EDN", category: "Trailers", specs: "Heavy Duty Trailer", status: "Available" },
  { id: 62, name: "Flat Bed Trailer", code: "T159 CFE", category: "Trailers", specs: "Flat Bed Trailer", status: "Available" },
];

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const { addItem, items } = useCart();

  const filteredEquipment =
    activeCategory === "All"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: EquipmentItem) => {
    if (items.some((cartItem) => cartItem.id === item.id)) {
      return;
    }
    setSelectedItem(item);
    setIsDatePickerOpen(true);
  };

  const handleDateConfirm = (startDate: string, endDate: string) => {
    if (selectedItem) {
      addItem(selectedItem, startDate, endDate);
    }
  };

  const isItemInCart = (itemId: number) => {
    return items.some((cartItem) => cartItem.id === itemId);
  };

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
          <div className="inline-flex items-center justify-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart size={16} />
            <span>Add equipment to cart and request a quote</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We maintain an extensive fleet of <strong className="text-brand-dark">62+ machines</strong> to support civil works, 
            hauling, mining, and construction operations. All equipment is regularly serviced and maintained 
            to ensure optimal performance and safety on your projects.
          </p>
        </div>
      </SectionWrapper>

      {/* Equipment Grid */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-primary text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Equipment Count */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">
              Showing <strong className="text-brand-dark">{filteredEquipment.length}</strong> {activeCategory === "All" ? "equipment" : activeCategory.toLowerCase()}
            </p>
          </div>

          {/* Equipment Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
            >
              {filteredEquipment.map((item, index) => {
                const inCart = isItemInCart(item.id);
                const image = getEquipmentImage(item, index);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      inCart ? "border-green-500" : "border-gray-100"
                    } group flex flex-col`}
                  >
                    {/* Image Container */}
                    <div className="relative h-36 sm:h-44 overflow-hidden bg-gray-100">
                      <Image
                        src={image}
                        alt={`${item.name} - ${item.code}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Available"
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-brand-primary rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* In Cart Indicator */}
                      {inCart && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-green-500 text-white rounded-full text-xs font-semibold flex items-center space-x-1">
                            <CheckCircle size={12} />
                            <span>In Cart</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-brand-dark font-heading line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-brand-secondary font-semibold text-xs sm:text-sm mb-1">{item.code}</p>
                      <p className="text-gray-500 text-xs mb-3 line-clamp-1">{item.specs}</p>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={inCart}
                        className={`mt-auto w-full py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-1.5 ${
                          inCart
                            ? "bg-green-500 text-white cursor-default"
                            : "bg-brand-secondary text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {inCart ? (
                          <>
                            <CheckCircle size={14} />
                            <span>In Cart</span>
                          </>
                        ) : (
                          <>
                            <Plus size={14} />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
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

      {/* Why Choose Our Equipment */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Quality Equipment, Reliable Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regular Maintenance",
                desc: "All equipment undergoes regular maintenance and safety inspections",
              },
              {
                title: "Experienced Operators",
                desc: "Certified operators included with all equipment rentals",
              },
              {
                title: "Flexible Rental Terms",
                desc: "Daily, weekly, and monthly rental options available",
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock support and breakdown assistance",
              },
              {
                title: "GPS Tracking",
                desc: "All equipment equipped with GPS tracking for security",
              },
              {
                title: "Competitive Rates",
                desc: "Affordable pricing without compromising on quality",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Date Picker Modal */}
      <DatePickerModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onConfirm={handleDateConfirm}
        itemName={selectedItem?.name || ""}
      />
    </>
  );
}
