import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Building2,
  Clock,
  Briefcase,
  CheckCircle,
  Target,
  ListChecks,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectIcon from "@/components/ProjectIcon";
import { projects, getProjectById } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

function RoleBadge({ role }: { role: string }) {
  const styles: Record<string, string> = {
    Subcontractor: "bg-blue-500/15 text-blue-600 border-blue-500/30",
    "Project Owner": "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
    Tenderee: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Transporter: "bg-purple-500/15 text-purple-600 border-purple-500/30",
  };
  return (
    <span
      className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-sm font-bold border ${
        styles[role] || "bg-gray-100 text-gray-600 border-gray-300"
      }`}
    >
      <Briefcase size={14} />
      <span>Role: {role}</span>
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isOngoing = status === "Ongoing";
  return (
    <span
      className={`inline-flex items-center space-x-1 px-4 py-1.5 rounded-full text-sm font-semibold ${
        isOngoing
          ? "bg-green-500/15 text-green-600 border border-green-500/30"
          : "bg-blue-500/15 text-blue-600 border border-blue-500/30"
      }`}
    >
      <Clock size={14} />
      <span>{status}</span>
    </span>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(Number(params.id));

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.category}
        backgroundImage={project.image || "/Equipments Images/WhatsApp Image 2026-03-02 at 16.00.10.jpeg"}
      />

      {/* Breadcrumb & Badges */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors mb-4"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Projects</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <RoleBadge role={project.role} />
            <StatusBadge status={project.status} />
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-brand-secondary/15 text-brand-secondary border border-brand-secondary/30">
              {project.category}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column — Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <ProjectIcon
                      name={project.iconName}
                      size={24}
                      className="text-brand-primary"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark font-heading">
                    Project Overview
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Objectives */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-brand-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark font-heading">
                    Project Objectives
                  </h2>
                </div>
                <ul className="space-y-4">
                  {project.objectives.map((objective, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle
                        size={20}
                        className="text-brand-secondary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 leading-relaxed">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope of Work */}
              {project.scope && project.scope.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <ListChecks
                        size={24}
                        className="text-brand-primary"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-brand-dark font-heading">
                      Scope of Work
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {project.scope.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle
                          size={20}
                          className="text-brand-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Amarachi's Contribution */}
              <div className="bg-brand-dark rounded-2xl p-8 shadow-lg text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/30 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} className="text-brand-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading">
                    Amarachi&apos;s Contribution
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  As a <strong className="text-white">{project.role}</strong> on
                  this project, Amarachi Investment Company Limited is
                  responsible for:
                </p>
                <ul className="space-y-4">
                  {project.workItems.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle
                        size={20}
                        className="text-brand-secondary mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-200 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column — Sidebar Info */}
            <div className="space-y-6">
              {/* Project Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-brand-dark mb-5 font-heading">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Briefcase
                      size={18}
                      className="text-brand-secondary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Role
                      </div>
                      <div className="font-semibold text-brand-dark">
                        {project.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock
                      size={18}
                      className="text-brand-secondary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Status
                      </div>
                      <div className="font-semibold text-brand-dark">
                        {project.status}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin
                      size={18}
                      className="text-brand-secondary mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        Location
                      </div>
                      <div className="font-semibold text-brand-dark">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {project.mainContractor && (
                    <div className="flex items-start space-x-3">
                      <Building2
                        size={18}
                        className="text-brand-secondary mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          Main Contractor
                        </div>
                        <div className="font-semibold text-brand-dark">
                          {project.mainContractor}
                        </div>
                      </div>
                    </div>
                  )}

                  {project.clientOrOwner && (
                    <div className="flex items-start space-x-3">
                      <Building2
                        size={18}
                        className="text-brand-secondary mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {project.role === "Project Owner"
                            ? "Project Owner"
                            : "Client / Owner"}
                        </div>
                        <div className="font-semibold text-brand-dark">
                          {project.clientOrOwner}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t">
                  <a
                    href="https://wa.me/255713057706?text=Hello Amarachi, I would like to discuss a similar project..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    <span>Discuss on WhatsApp</span>
                  </a>
                  <Link
                    href="/contact"
                    className="w-full mt-3 inline-flex items-center justify-center space-x-2 border-2 border-brand-primary text-brand-primary px-5 py-3 rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Projects */}
      <SectionWrapper className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-heading">
              Explore More Projects
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-primary/5 hover:border-brand-primary/20 border border-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <ProjectIcon
                        name={p.iconName}
                        size={20}
                        className="text-brand-primary"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-1">
                        {p.title}
                      </h4>
                      <span className="text-xs text-gray-500">{p.category}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {p.summary}
                  </p>
                  <span className="inline-flex items-center text-sm text-brand-primary font-medium group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
