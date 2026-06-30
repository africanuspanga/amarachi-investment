"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Building2,
  ChevronRight,
  Clock,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectIcon from "@/components/ProjectIcon";
import { ongoingProjects, executedProjects, type Project } from "@/data/projects";

function StatusBadge({ status }: { status: string }) {
  const isOngoing = status === "Ongoing";
  return (
    <span
      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
        isOngoing
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      }`}
    >
      <Clock size={12} />
      <span>{status}</span>
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30">
      {category}
    </span>
  );
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    Subcontractor:
      "bg-blue-500/15 text-blue-600 border-blue-500/30",
    "Project Owner":
      "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    Tenderee:
      "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Transporter:
      "bg-purple-500/15 text-purple-600 border-purple-500/30",
    Contractor:
      "bg-rose-500/15 text-rose-600 border-rose-500/30",
  };
  return (
    <span
      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold border ${
        styles[role] || "bg-gray-100 text-gray-600 border-gray-300"
      }`}
    >
      <Briefcase size={12} />
      <span>Role: {role}</span>
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
    >
      {/* Card Header */}
      <div className="relative h-56 overflow-hidden">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-light">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                <ProjectIcon name={project.iconName} size={40} className="text-white" />
              </div>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <CategoryBadge category={project.category} />
          <RoleBadge role={project.role} />
        </div>
        <div className="absolute top-4 right-4 z-10">
          <StatusBadge status={project.status} />
        </div>

        {/* Title at bottom */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-tight line-clamp-2">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Location & Client/Contractor */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start space-x-2 text-sm">
            <MapPin
              size={16}
              className="text-brand-secondary mt-0.5 flex-shrink-0"
            />
            <span className="text-gray-600 line-clamp-2">{project.location}</span>
          </div>
          {project.mainContractor && (
            <div className="flex items-start space-x-2 text-sm">
              <Building2
                size={16}
                className="text-brand-primary mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600 line-clamp-2">
                Main Contractor: {project.mainContractor}
              </span>
            </div>
          )}
          {project.clientOrOwner && !project.mainContractor && (
            <div className="flex items-start space-x-2 text-sm">
              <Building2
                size={16}
                className="text-brand-primary mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-600 line-clamp-2">
                {project.role === "Project Owner"
                  ? "Owner"
                  : "Client"}
                : {project.clientOrOwner}
              </span>
            </div>
          )}
        </div>

        {/* Summary */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.summary}
        </p>

        {/* Scope */}
        {project.scope && project.scope.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-brand-dark mb-2">
              Key Scope:
            </h4>
            <ul className="space-y-1">
              {project.scope.slice(0, 3).map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2 text-sm text-gray-600"
                >
                  <ChevronRight
                    size={14}
                    className="text-brand-secondary mt-0.5 flex-shrink-0"
                  />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Work Items Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.workItems.slice(0, 3).map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Read More CTA */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center space-x-1 text-brand-primary font-semibold text-sm hover:text-brand-secondary transition-colors group/link"
        >
          <span>Read More</span>
          <ArrowRight
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects & Experience"
        subtitle="Amarachi Investment Company Limited has contributed to major infrastructure, mining, quarrying, road maintenance, and logistics projects across Tanzania."
        backgroundImage="/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg"
      />

      {/* Stats Section */}
      <SectionWrapper className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Ongoing Projects" },
              { value: "3+", label: "Completed Projects" },
              { value: "2115MW", label: "Power Generation" },
              { value: "1016km", label: "Railway Construction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-primary font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Ongoing Projects */}
      <SectionWrapper className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Current Work</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Ongoing Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Major infrastructure projects we are currently executing across Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Executed Projects */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-brand-primary font-medium mb-4">
              <div className="w-8 h-0.5 bg-brand-secondary" />
              <span className="uppercase tracking-wide text-sm">Completed</span>
              <div className="w-8 h-0.5 bg-brand-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
              Executed Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successfully completed projects that showcase our capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Amarachi Investment can bring your infrastructure
            project to life with our expertise and equipment fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <span>View Our Equipment</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
