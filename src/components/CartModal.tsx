"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Trash2, Send, ShoppingCart, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeItem, clearCart, updateItemDates } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    projectLocation: "",
    specialInfo: "",
  });

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    let message = `*Equipment Rental Request*\n\n`;
    message += `*Customer Information:*\n`;
    message += `Name: ${formData.fullName}\n`;
    message += `Phone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    if (formData.companyName) message += `Company: ${formData.companyName}\n`;
    message += `\n*Project Details:*\n`;
    message += `Location: ${formData.projectLocation}\n`;
    if (formData.specialInfo) message += `Special Info: ${formData.specialInfo}\n`;
    message += `\n*Equipment Requested:*\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.code})\n`;
      message += `   Category: ${item.category}\n`;
      message += `   Specs: ${item.specs}\n`;
      message += `   Dates: ${formatDate(item.startDate)} - ${formatDate(item.endDate)}\n\n`;
    });

    // Encode and open WhatsApp
    const phoneNumber = "255713057706";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setShowCheckout(false);
      clearCart();
      onClose();
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        companyName: "",
        projectLocation: "",
        specialInfo: "",
      });
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {showSuccess ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle size={40} className="text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Request Sent!</h3>
                <p className="text-gray-600">Opening WhatsApp to complete your request...</p>
              </div>
            ) : showCheckout ? (
              <div className="p-6 overflow-y-auto max-h-[90vh]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-brand-dark">Complete Your Request</h2>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="0713 057706"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Dar es Salaam, Tanzania"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Information / Additional Requirements
                    </label>
                    <textarea
                      value={formData.specialInfo}
                      onChange={(e) => setFormData({ ...formData, specialInfo: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                      placeholder="Any special requirements..."
                    />
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-brand-dark mb-2">Selected Equipment:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {items.map((item) => (
                        <li key={item.id}>
                          • {item.name} ({item.code}) - {formatDate(item.startDate)} to {formatDate(item.endDate)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <>
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <ShoppingCart size={24} className="text-brand-primary" />
                      <h2 className="text-xl font-bold text-brand-dark">Your Cart</h2>
                      <span className="bg-brand-secondary text-white px-2 py-0.5 rounded-full text-sm font-medium">
                        {items.length}
                      </span>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-500">Your cart is empty</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Add equipment to get started
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-gray-50 rounded-xl p-4 space-y-3"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-brand-dark">
                                {item.name}
                              </h3>
                              <p className="text-sm text-brand-secondary font-medium">
                                {item.code}
                              </p>
                              <p className="text-sm text-gray-500">{item.specs}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                <Calendar size={12} className="inline mr-1" />
                                Start Date
                              </label>
                              <input
                                type="date"
                                value={item.startDate}
                                onChange={(e) =>
                                  updateItemDates(item.id, e.target.value, item.endDate)
                                }
                                className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                <Calendar size={12} className="inline mr-1" />
                                End Date
                              </label>
                              <input
                                type="date"
                                value={item.endDate}
                                onChange={(e) =>
                                  updateItemDates(item.id, item.startDate, e.target.value)
                                }
                                className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="p-6 border-t bg-gray-50">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-brand-secondary text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Proceed to Checkout</span>
                      <Send size={18} />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
