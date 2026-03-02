"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Equipment", href: "/equipment" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Civil Engineering", href: "/services" },
  { name: "Building Construction", href: "/services" },
  { name: "Transportation & Logistics", href: "/services" },
  { name: "Equipment Hire", href: "/equipment" },
  { name: "ECTS Tracking", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/amarachi logo.png"
                  alt="Amarachi Investment Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">
                  AMARACHI INVESTMENT
                </h3>
                <p className="text-[10px] text-brand-gold uppercase">
                  Civil & Building Contractors
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering dependable civil works, building construction, 
              transportation logistics, and heavy equipment solutions across Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mbezi Beach, Plot No. 2346 Kilongawima<br />
                  P.O. Box 20914, Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-light flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  0713 057706 / 0713 333177<br />
                  0658 068760
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-light flex-shrink-0" />
                <a
                  href="mailto:amarachiinvestmentcoltd@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  amarachiinvestmentcoltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Amarachi Investment Company Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
