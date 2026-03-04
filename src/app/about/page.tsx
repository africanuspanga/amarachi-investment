"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";

const values = [
  { title: "Professionalism", description: "Maintaining the highest standards in all our operations" },
  { title: "Integrity", description: "Honest and transparent dealings with all stakeholders" },
  { title: "Safety", description: "Prioritizing the safety of our people and projects" },
  { title: "Reliability", description: "Delivering on our promises, on time, every time" },
  { title: "Innovation", description: "Embracing modern solutions for better outcomes" },
  { title: "Client Satisfaction", description: "Putting our clients' needs at the center of everything" },
];

const leaders = [
  {
    name: "Bernard Akilimali",
    role: "Director of Operations",
    image: null,
  },
  {
    name: "Avelin Simon Riwa",
    role: "Director of Finance & Administration",
    image: null,
  },
  {
    name: "Christopher Kirama Temu",
    role: "Director of Strategy & New Business",
    image: null,
  },
];

// Image Placeholder Component for team members
function TeamImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center">
      <div className="text-center p-4">
        <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-brand-primary/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-brand-primary">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="text-xs text-gray-500">Photo coming soon</span>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Amarachi"
        subtitle="Transporters | Civil & Building Contractors"
        backgroundImage="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.07.jpeg"
      />

      {/* Company Overview */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-secondary/10 rounded-3xl transform rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.08.jpeg"
                  alt="Construction Professional"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-secondary" />
                <span className="uppercase tracking-wide text-sm">Company Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-heading">
                Building Tanzania&apos;s Future
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Amarachi Investment Company Ltd is a Tanzania-registered company delivering 
                transport logistics, civil works, building construction, and equipment solutions. 
                We combine professional teams with modern machinery and tracking systems to 
                ensure efficient delivery.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has made us a preferred partner for government 
                agencies, institutions, contractors, and private clients across the country.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Mission */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become one of Tanzania&apos;s most trusted partners in civil construction, 
                transportation, and infrastructure development. We aim to set the standard 
                for quality, reliability, and innovation in the industry.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
            >
              <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 font-heading">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide professional, safe, and reliable construction and logistics services 
                using modern equipment, skilled personnel, and efficient systems. We are committed 
                to exceeding client expectations while contributing to Tanzania&apos;s development.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">What We Stand For</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-brand-primary/5 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary-light font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Our Team</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Leadership Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experienced professionals guiding our company towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-brand-secondary/30">
                  <TeamImagePlaceholder name={leader.name} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{leader.name}</h3>
                <p className="text-brand-secondary font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Partner with Tanzania&apos;s trusted civil and building contractors. 
            Let&apos;s discuss how we can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              <span>Request a Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/255713057706?text=Hello Amarachi, I need a quote for..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:0713057706"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
