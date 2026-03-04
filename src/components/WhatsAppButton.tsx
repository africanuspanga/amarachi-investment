"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const phoneNumber = "255713057706";
  const message = "Hello Amarachi, I need a quote for...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        fill
        className="object-cover"
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat on WhatsApp
      </span>
    </a>
  );
}
