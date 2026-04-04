"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Link, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "nishitavaghela209@gmail.com",
    href: "mailto:nishitavaghela209@gmail.com",
    display: "nishitavaghela209@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 289-623-4581",
    href: "tel:+12896234581",
    display: "(+1) 289-623-4581",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/nishitawaghela",
    href: "https://www.linkedin.com/in/nishitawaghela",
    display: "linkedin.com/in/nishitawaghela",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 tracking-tight">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
            Open to new opportunities, collaborations, or just a good tech conversation. Reach out. I'd love to connect.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
              className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors duration-300">
                  <link.icon className="h-5 w-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs mb-0.5">{link.label}</p>
                  <p className="text-white font-medium text-sm">{link.display}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          variants={fadeUp}
          className="text-gray-600 text-sm mt-16"
        >
          © {new Date().getFullYear()} Nishita Waghela. Designed & built with Next.js.
        </motion.p>
      </div>
    </section>
  );
}
