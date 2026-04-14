"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Code2, Mail, createLucideIcon } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      key: "github",
    },
  ],
]);

const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "linkedin-1",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "9",
      width: "4",
      height: "12",
      key: "linkedin-2",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "4",
      r: "2",
      key: "linkedin-3",
    },
  ],
]);

const ROLES = [
  "Full-Stack Developer",
  "ML Enthusiast",
  "DSA Practitioner",
] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
} as const;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentRole = ROLES[roleIndex];

  return (
    <motion.section
      id="home"
      className="relative min-h-screen"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="order-2 lg:order-1"
            variants={containerVariants}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-normal text-muted"
            >
              Hey there 👋
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="cyber-heading">
                {PERSONAL.name}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-3 h-8 overflow-hidden text-xl font-semibold text-accent md:text-2xl"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="block"
                >
                  {currentRole}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-lg text-base leading-relaxed text-muted"
            >
              {PERSONAL.bio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-cyan px-6 py-3 font-semibold text-white shadow-[var(--shadow-button)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                View Projects
              </a>
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/60 px-6 py-3 font-semibold text-foreground shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex gap-5"
            >
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/60 text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/60 text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/60 text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Code2 size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/60 text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgb(var(--accent)_/_0.18)_0%,_rgb(var(--cyan)_/_0.08)_45%,_transparent_70%)]" />

                <Image
                  src={PERSONAL.avatarUrl}
                  alt="Dhruv"
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full border-4 border-border/70 object-cover shadow-[var(--shadow-card)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={24} className="text-muted" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}