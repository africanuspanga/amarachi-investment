"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  text = "Image Coming Soon", 
  className = "" 
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 ${className}`}
    >
      <ImageIcon size={48} className="mb-3 opacity-50" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
