"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, image, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <Icon size={24} className="text-white" />
            </div>
          </div>
        </div>
      )}
      <div className="p-6 lg:p-8 flex-1">
        {!image && (
          <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
            <Icon size={28} className="text-brand-primary group-hover:text-white transition-colors" />
          </div>
        )}
        <h3 className="text-xl font-bold text-brand-dark mb-3 font-heading group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
