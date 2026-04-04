"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layers } from "lucide-react";

const stats = [
  { value: "3.8", suffix: "", label: "CGPA at Seneca" },
  { value: "40", suffix: "%", label: "Cost Estimation Time Saved" },
  { value: "30", suffix: "%", label: "Site Engagement Lifted" },
  { value: "25", suffix: "%", label: "Inbox Workload Reduced" },
];

const traits = [
  { icon: Code2, label: "Full-Stack Dev", desc: "React, Next.js, Node, Python" },
  { icon: Cpu, label: "AI & Automation", desc: "LangChain, N8N, OpenAI" },
  { icon: Globe, label: "Cloud & DevOps", desc: "Google Cloud, VM setup" },
  { icon: Layers, label: "Product Thinking", desc: "ERP, UX, Analytics" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            Turning Ideas into <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">Impact</span>
          </h2>
        </motion.div>

        {/* Bio + Traits */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hi, I'm <span className="text-white font-semibold">Nishita</span>, a Computer Programming & Analysis student at Seneca Polytechnic with a passion for building things that actually work and scale.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Currently working as a <span className="text-purple-400 font-medium">Product Analyst</span> at Drone Cleaning Company Ltd, I've shipped everything from AI-powered automations and internal ERP systems to full website redesigns and cloud deployments.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I love the intersection of product thinking and engineering, and I bring both to every project I touch.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300 group"
              >
                <trait.icon className="h-6 w-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white font-semibold text-sm mb-1">{trait.label}</p>
                <p className="text-gray-500 text-xs">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 6}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300">
                {stat.value}<span className="text-purple-400">{stat.suffix}</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
