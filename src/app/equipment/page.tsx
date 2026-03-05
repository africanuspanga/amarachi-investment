"use client";

import { useState } from "react";
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

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof equipment[0] | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const { addItem, items } = useCart();

  const filteredEquipment =
    activeCategory === "All"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: typeof equipment[0]) => {
    // Check if item is already in cart
    if (items.some((cartItem) => cartItem.id === item.id)) {
      return; // Item already in cart
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

          {/* Equipment Cards - No Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredEquipment.map((item, index) => {
                const inCart = isItemInCart(item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                      inCart ? "border-green-500" : "border-gray-100"
                    } group`}
                  >
                    {/* Card Header with Category Badge */}
                    <div className="bg-gradient-to-r from-brand-primary to-brand-primary-light p-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
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

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-brand-dark mb-1 font-heading">
                        {item.name}
                      </h3>
                      <p className="text-brand-secondary font-semibold text-sm mb-2">
                        {item.code}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">{item.specs}</p>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={inCart}
                        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                          inCart
                            ? "bg-green-500 text-white cursor-default"
                            : "bg-brand-secondary text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {inCart ? (
                          <>
                            <CheckCircle size={16} />
                            <span>In Cart</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>Add to Cart</span>
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
