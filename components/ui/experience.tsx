"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experience = {
  company: "Drone Cleaning Company Ltd",
  role: "Product Analyst",
  period: "Dec 2024 – Present",
  location: "Toronto, ON",
  points: [
    "Delivered an internal-use pricing calculator that reduced project cost-estimation time by 40%.",
    "Led a complete redesign of the company's 13-page website, improving UX and visual appeal and increasing site engagement by 30%.",
    "Implemented SEO and content optimization strategies, improving discoverability on search engines and AI models.",
    "Developed N8N-based AI automations to streamline customer inquiry handling, reducing manual inbox workload by 25%.",
    "Built a full-scale internal ERP system to manage clients, operations, hardware, checklists, and quotes.",
    "Deployed and configured a production environment on Google Cloud Compute Engine, handling VM setup, networking, and service management.",
    "Presented monthly analytics reports on website traffic, user behavior, and LinkedIn performance to leadership.",
    "Supervised and mentored an intern, delegating tasks and ensuring project quality and progress.",
  ],
};

const education = {
  degree: "Advanced Diploma, Computer Programming and Analysis",
  school: "Seneca Polytechnic",
  location: "Toronto, ON",
  period: "2023 – 2026",
  gpa: "3.8 GPA",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Where I've <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">Made an Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Experience Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-2 p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-purple-400" />
                  <span className="text-purple-400 font-semibold text-sm">{experience.role}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{experience.company}</h3>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1 justify-end">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-end">
                  <MapPin className="h-3 w-3" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-purple-500/20 via-white/10 to-transparent mb-6" />

            <ul className="space-y-3">
              {experience.points.map((point, i) => (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 2}
                  variants={fadeUp}
                  className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Currently here</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] flex flex-col"
          >
            <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6">Education</span>

            <div className="flex-1">
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <span className="text-purple-300 text-xs font-bold">{education.gpa}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug mb-2">{education.degree}</h3>
                <p className="text-gray-400 font-medium">{education.school}</p>
              </div>

              <div className="h-px bg-white/10 mb-6" />

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-purple-400/60" />
                  {education.location}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="h-3.5 w-3.5 text-purple-400/60" />
                  {education.period}
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-gray-400 text-xs leading-relaxed">
                Specializing in systems design, full-stack development, AI, and software engineering fundamentals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
