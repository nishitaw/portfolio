'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { Bot, Brain, ChevronDown, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    icon: Bot,
    label: 'AI / NLP',
    title: 'Doc Chat',
    description:
      'Full-stack conversational PDF Q&A: ask questions in natural language and get grounded answers with page-level citations. PDFs are processed in the browser for a polished, safe upload-to-chat flow.',
    highlights: [
      'Grounded replies with explicit page references',
      'Browser-side PDF handling and chat UX',
      'API-backed LLM integration with careful prompting',
    ],
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Vercel', 'PDF'],
    liveUrl: 'https://doc-chat-phi.vercel.app/',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&crop=center&auto=format&q=85',
    accentFrom: 'from-purple-500',
    accentTo: 'to-violet-400',
  },
  {
    number: '02',
    icon: Brain,
    label: 'Machine Learning',
    title: 'Dogs vs. Cats Image Classifier',
    description:
      'A convolutional neural network built with TensorFlow that classifies dog vs. cat images with high accuracy. Features data augmentation, hyperparameter tuning, and visual performance diagnostics.',
    highlights: [
      'CNN with augmentation to reduce overfitting',
      'Hyperparameter tuning for peak accuracy',
      'Loss curves & confusion matrix diagnostics',
    ],
    stack: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib', 'scikit-learn'],
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&crop=center&auto=format&q=85',
    accentFrom: 'from-violet-500',
    accentTo: 'to-indigo-400',
  },
];

/* Scroll progress through the sticky zone (same 0→1 as useScroll on scrollZone). */
const P1_CARD_POINTER_RANGE = [0.17, 0.485] as const;
const P2_CARD_POINTER_RANGE = [0.575, 0.98] as const;

function scrollToPointerFlags(p: number) {
  return {
    p1: p >= P1_CARD_POINTER_RANGE[0] && p <= P1_CARD_POINTER_RANGE[1],
    p2: p >= P2_CARD_POINTER_RANGE[0] && p <= P2_CARD_POINTER_RANGE[1],
  };
}

export default function Projects() {
  /* ── This ref only wraps the STICKY scroll zone, not the header ── */
  const scrollZone = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollZone,
    offset: ['start start', 'end end'],
  });

  /* ── Project 1 image ── */
  const img1Opacity = useTransform(scrollYProgress, [0, 0.06, 0.44, 0.52], [0, 1, 1, 0]);
  const img1Scale  = useTransform(scrollYProgress, [0, 0.5], [1, 4]);

  /* ── Project 1 card ── */
  const p1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.38, 0.46], [0, 1, 1, 0]);
  const p1Y       = useTransform(scrollYProgress, [0.1, 0.2], [40, 0]);

  /* ── "Next project" hint ── */
  const hintOpacity = useTransform(scrollYProgress, [0.42, 0.47, 0.53, 0.58], [0, 1, 1, 0]);

  /* ── Project 2 image ── */
  const img2Opacity = useTransform(scrollYProgress, [0.5, 0.57, 0.94, 0.99], [0, 1, 1, 0]);
  const img2Scale  = useTransform(scrollYProgress, [0.5, 1], [1, 4]);

  /* ── Project 2 card ── */
  const p2Opacity = useTransform(scrollYProgress, [0.62, 0.7, 0.88, 0.95], [0, 1, 1, 0]);
  const p2Y       = useTransform(scrollYProgress, [0.62, 0.7], [40, 0]);

  const [p1Interactive, setP1Interactive] = useState(false);
  const [p2Interactive, setP2Interactive] = useState(false);

  /* Drive hit-testing from scrollYProgress — `change` on derived opacity MotionValues is not reliable. */
  useLayoutEffect(() => {
    const { p1, p2 } = scrollToPointerFlags(scrollYProgress.get());
    setP1Interactive(p1);
    setP2Interactive(p2);
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const { p1, p2 } = scrollToPointerFlags(p);
    setP1Interactive(p1);
    setP2Interactive(p2);
  });

  return (
    <section id="projects" className="bg-black">

      {/* ══════════════════════════════════════════
          HEADER: normal flow, scrolls away on its
          own before the sticky zone kicks in.
      ══════════════════════════════════════════ */}
      <div className="py-20 flex flex-col items-center justify-center px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' as const }}
          className="text-center"
        >
          <span className="text-purple-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-3 tracking-tight">
            Things I&apos;ve{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">
              Built
            </span>
          </h2>
          <p className="mt-5 text-gray-500 text-sm">Scroll to explore each project</p>
          <a
            href={projects[0].liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo: Doc Chat (opens in a new tab)"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-opacity hover:opacity-90"
          >
            Live demo
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>

      </div>

      {/* ══════════════════════════════════════════
          STICKY SCROLL ZONE: useScroll tracks
          only this div, so progress 0→1 maps
          purely to the two-project reveal.
      ══════════════════════════════════════════ */}
      <div ref={scrollZone} style={{ height: '500vh' }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* ── Project 1 background image ── */}
          <motion.div
            style={{ scale: img1Scale, opacity: img1Opacity }}
            className="absolute inset-0 origin-center pointer-events-none z-0"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          </motion.div>

          {/* ── Project 1 info card ── */}
          <motion.div
            style={{ opacity: p1Opacity, y: p1Y }}
            className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          >
            <div
              className="max-w-4xl w-full"
              style={{ pointerEvents: p1Interactive ? 'auto' : 'none' }}
            >
              <ProjectCard project={projects[0]} />
            </div>
          </motion.div>

          {/* ── Between-projects hint ── */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-gray-400 text-xs tracking-widest uppercase">Next project</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' as const }}
              className="text-purple-400"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>

          {/* ── Project 2 background image ── */}
          <motion.div
            style={{ scale: img2Scale, opacity: img2Opacity }}
            className="absolute inset-0 origin-center pointer-events-none z-0"
          >
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          </motion.div>

          {/* ── Project 2 info card ── */}
          <motion.div
            style={{ opacity: p2Opacity, y: p2Y }}
            className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          >
            <div
              className="max-w-4xl w-full"
              style={{ pointerEvents: p2Interactive ? 'auto' : 'none' }}
            >
              <ProjectCard project={projects[1]} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Reusable card ── */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const Icon = project.icon;
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-purple-500/30 bg-black/90 backdrop-blur-xl p-10 md:p-14 shadow-[0_0_60px_rgba(168,85,247,0.2),0_25px_50px_rgba(0,0,0,0.8)]">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-xs font-bold tracking-[0.25em] uppercase bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text text-transparent`}
          >
            {project.number}
          </span>
          <span className="h-px flex-1 bg-white/20" />
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
            <Icon className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs text-gray-300">{project.label}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r ${project.accentFrom} ${project.accentTo} bg-clip-text text-transparent leading-tight`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-7">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-7">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-300 text-base">
              <span
                className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-gradient-to-r ${project.accentFrom} ${project.accentTo}`}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 border border-purple-500/25 text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
