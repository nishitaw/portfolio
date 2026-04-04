"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL"],
    accent: "purple",
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "CSS", "Bootstrap", "Ajax"],
    accent: "violet",
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js"],
    accent: "indigo",
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL"],
    accent: "fuchsia",
  },
  {
    name: "AI & Automation",
    skills: ["LangChain", "OpenAI API", "N8N", "Hugging Face", "TensorFlow"],
    accent: "purple",
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Google Cloud", "Jira", "Blender", "Unity", "Unreal Engine", "Adobe Suite", "Canva", "Cursor", "Augment", "Sora", "SketchUp"],
    accent: "violet",
  },
];

const accentMap: Record<string, { pill: string; header: string }> = {
  purple: {
    pill: "border-purple-500/30 text-purple-300 bg-purple-500/10 hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]",
    header: "text-purple-400",
  },
  violet: {
    pill: "border-violet-500/30 text-violet-300 bg-violet-500/10 hover:border-violet-400 hover:bg-violet-500/20 hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]",
    header: "text-violet-400",
  },
  indigo: {
    pill: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10 hover:border-indigo-400 hover:bg-indigo-500/20 hover:shadow-[0_0_12px_rgba(99,102,241,0.25)]",
    header: "text-indigo-400",
  },
  fuchsia: {
    pill: "border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10 hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:shadow-[0_0_12px_rgba(217,70,239,0.25)]",
    header: "text-fuchsia-400",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

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
          <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const accent = accentMap[cat.accent];
            return (
              <motion.div
                key={cat.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className={`text-xs font-semibold tracking-widest uppercase mb-4 ${accent.header}`}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-default ${accent.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
