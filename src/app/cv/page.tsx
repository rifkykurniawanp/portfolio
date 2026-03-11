"use client"

import { useState } from "react"
import Image from "next/image"

const CV_DATA = {
  name: "Rifky Kurniawan Putra",
  title: "Medical Doctor · Occupational Doctor · Full-Stack Developer",
  contact: {
    phone: "+6282133070087",
    email: "Krifky14@gmail.co.id",
    location: "Pemalang, Central Java, Indonesia",
    linkedin: "https://linkedin.com",
    portfolio: "https://portfolio.com",
  },
  about:
    "An aspiring software engineer with a healthcare background who values critical thinking, precision, and evidence-based decision-making. With over 12 months of hands-on clinical experience and an Exemplary-graduated background in full-stack software engineering at RevoU, I develop modern web systems that prioritize reliability, security, and real-world usability.",

  education: [
    {
      institution: "RevoU",
      logo: "/logo/revou.png",
      subEntries: [
        {
          year: "February 2025 – August 2025",
          program: "Full Stack Software Engineering",
          description:
            "Hands-on experience in React, Node.js, PostgreSQL, Prisma ORM, RESTful APIs, Git, and SDLC. Final Project: Ruined Edu-Commerce — integrated e-commerce and e-learning platform.",
          badge: "Exemplary Graduate",
        },
      ],
    },
    {
      institution: "Universitas Muhammadiyah Semarang",
      logo: "/logo/unimus.png",
      subEntries: [
        {
          year: "November 2021 – December 2023",
          program: "Medical Doctor (Profesi Dokter)",
          description: "GPA 3.70/4.00. Clinical rotations emphasizing diagnostic reasoning and evidence-based practice.",
        },
        {
          year: "September 2016 – May 2021",
          program: "Bachelor of Medicine (S.Ked)",
          description:
            "GPA 3.00/4.00. Thesis: Analysis of Compliance Factors for Hypertension Patients' Treatment at Puskesmas Paduraksa.",
        },
      ],
    },
  ],

  experiences: [
    {
      role: "General Practitioner",
      company: "Hafida 3 Primary Clinic at PT Longwell",
      location: "Pemalang, Indonesia",
      period: "January 2026 – Present",
      points: [
        "Managed primary and occupational healthcare for company employees, contributing to reduced workplace medical incidents.",
        "Stabilized and treated up to 500 acute cases per month.",
        "Conducted fit-to-work assessments and periodic health monitoring for 10,000 employees.",
        "Coordinated referrals, reducing repeat acute episodes by 20%.",
      ],
    },
    {
      role: "General Practitioner",
      company: "Gondo Clinic",
      location: "Pemalang, Indonesia",
      period: "July 2025 – December 2025",
      points: [
        "Managed 5–10 outpatient and emergency consultations per day.",
        "Performed initial emergency assessments and stabilization for 3–5 acute cases per shift.",
        "Applied systematic clinical reasoning across high-volume patient encounters.",
      ],
    },
    {
      role: "Internship Doctor",
      company: "Puskesmas Kauman",
      location: "Tulungagung, Indonesia",
      period: "November 2024 – May 2025",
      points: [
        "Managed 80–100 outpatient examinations per day.",
        "Monitored approximately 20 inpatients daily.",
        "Maintained documentation for 100+ patient encounters daily.",
      ],
    },
    {
      role: "Internship Doctor",
      company: "Bhayangkara Hospital",
      location: "Tulungagung, Indonesia",
      period: "May 2024 – November 2024",
      points: [
        "Collaborated in multidisciplinary emergency team managing 15–20 acute cases per shift.",
        "Independently managed ≥10 emergency patients per shift.",
        "Applied standardized emergency protocols in triage and resuscitation.",
      ],
    },
    {
      role: "Teaching Assistant – Medical Skills",
      company: "UNIMUS",
      location: "Semarang, Indonesia",
      period: "2018 – 2019",
      points: [
        "Facilitated practical sessions for 200+ medical students per semester.",
        "Supervised physical examination techniques during structured labs.",
        "Assisted faculty in developing OSCE simulation materials.",
      ],
    },
  ],

  skills: {
    tech: ["TypeScript", "JavaScript", "Next.js / React", "NestJS", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Git"],
    medical: ["ACLS", "BLS", "Hiperkes", "ISO 45001", "Triage", "CPR", "Wound Suturing", "Fit-to-Work Assessment"],
    soft: ["Critical Thinking", "Problem-Solving", "Teamwork", "Analytical Thinking", "Client-Centric Approach"],
  },

  certifications: [
    "Revenue Cycle Management In Medical Billing – Udemy (Jan 2026)",
    "Belajar DevSecOps untuk Keamanan Software – Kelas.com (Dec 2025)",
    "ISO 45001:2018 Occupational H&S Management – Udemy (Dec 2025)",
    "Agile Basics for Developers – Udemy (Dec 2025)",
    "Cybersecurity Solution Architecture 101 – Udemy (Nov 2025)",
    "Jaringan Komputer Dasar – ID-Networkers (Sep 2025)",
    "Certificate of Achievement – RevoU",
    "Advanced Cardiovascular Life Support (ACLS) – Indonesian Heart Association (May 2025)",
    "Modern Circumcision Workshop – OSI (Jul 2025)",
    "Health Corporate Hygiene (Hiperkes) & Occupational Safety – Ministry of Manpower (Dec 2023)",
  ],
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400">{children}</h2>
      <div className="flex-1 h-px bg-neutral-200" />
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs border border-neutral-200 text-neutral-600 px-2.5 py-1 rounded-full">
      {children}
    </span>
  )
}

export default function CVPage() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills" | "certifications">("experience")

  return (
    <main className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header Card */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">{CV_DATA.name}</h1>
              <p className="text-sm text-neutral-500 mt-1">{CV_DATA.title}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-neutral-400">
                <span>📍 {CV_DATA.contact.location}</span>
                <span>📞 {CV_DATA.contact.phone}</span>
                <span>✉️ {CV_DATA.contact.email}</span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 shrink-0 flex items-center justify-center text-2xl font-bold text-neutral-300">
              RK
            </div>
          </div>
          <p className="mt-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-5">
            {CV_DATA.about}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 bg-white border border-neutral-200 rounded-xl p-1">
          {(["experience", "education", "skills", "certifications"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-xs font-medium py-2 rounded-lg capitalize transition-colors ${
                activeTab === tab
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="bg-white border border-neutral-200 rounded-2xl p-7 space-y-7">
            <SectionTitle>Work Experience</SectionTitle>
            {CV_DATA.experiences.map((exp, i) => (
              <div key={i} className="relative pl-4 border-l-2 border-neutral-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-sm text-neutral-900">{exp.role}</p>
                    <p className="text-xs text-neutral-500">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-xs text-neutral-400 whitespace-nowrap shrink-0">{exp.period}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-xs text-neutral-600 leading-relaxed flex gap-2">
                      <span className="text-neutral-300 mt-0.5">–</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="bg-white border border-neutral-200 rounded-2xl p-7 space-y-6">
            <SectionTitle>Education</SectionTitle>
            {CV_DATA.education.map((edu, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Image src={edu.logo} alt={edu.institution} width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-neutral-900">{edu.institution}</p>
                  <div className="mt-3 space-y-4">
                    {edu.subEntries.map((sub, j) => (
                      <div key={j} className="relative flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-1 shrink-0" />
                          {j < edu.subEntries.length - 1 && <div className="w-px flex-1 bg-neutral-200 mt-1" />}
                        </div>
                        <div className="pb-2">
                          <p className="text-xs text-neutral-400">{sub.year}</p>
                          <p className="text-sm font-medium text-neutral-800">{sub.program}</p>
                          <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{sub.description}</p>
                          {/* {sub.badge && <Tag>{sub.badge}</Tag>} */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="bg-white border border-neutral-200 rounded-2xl p-7 space-y-6">
            <SectionTitle>Skills</SectionTitle>

            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Technical</p>
              <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.tech.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Medical & Clinical</p>
              <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.medical.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.soft.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="bg-white border border-neutral-200 rounded-2xl p-7">
            <SectionTitle>Certifications</SectionTitle>
            <ul className="space-y-3">
              {CV_DATA.certifications.map((cert, i) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-700">
                  <span className="text-neutral-300 shrink-0 mt-0.5">✦</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </main>
  )
}