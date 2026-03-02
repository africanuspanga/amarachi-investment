"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
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
    image: "/istockphoto-1297763380-612x612.jpg",
  },
  {
    name: "Avelin Simon Riwa",
    role: "Director of Finance & Administration",
    image: "/istockphoto-1297777893-612x612.jpg",
  },
  {
    name: "Christopher Kirama Temu",
    role: "Director of Strategy & New Business",
    image: "/istockphoto-1413088692-612x612.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Amarachi"
        subtitle="Transporters | Civil & Building Contractors"
        backgroundImage="/heavy-excavator-digging-day-light.jpg"
      />

      {/* Company Overview */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl transform rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/young-african-american-builder-man-wearing-construction-vest-safety-helmet-looking-aside-pointing-with-finger-side-standing.jpg"
                  alt="Construction Professional"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 text-brand-blue font-medium mb-4">
                <div className="w-8 h-0.5 bg-brand-gold" />
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
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-brand-blue" />
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
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-brand-gold" />
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
            <div className="inline-flex items-center space-x-2 text-brand-blue font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="uppercase tracking-wide text-sm">What We Stand For</span>
              <div className="w-8 h-0.5 bg-brand-gold" />
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
                className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-brand-blue/5 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-brand-gold" />
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
            <div className="inline-flex items-center space-x-2 text-brand-light font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="uppercase tracking-wide text-sm">Our Team</span>
              <div className="w-8 h-0.5 bg-brand-gold" />
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
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-brand-gold/30">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{leader.name}</h3>
                <p className="text-brand-gold font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
