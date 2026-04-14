"use client";

import { BrainCircuit, Code2, Layers } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { EDUCATION, SKILLS } from "@/lib/data";

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

const HIGHLIGHTS = [
  { label: "100+ DSA Problems Solved", Icon: Code2 },
  { label: "MERN Stack Developer", Icon: Layers },
  { label: "ML & Data Science", Icon: BrainCircuit },
] as const;

export default function About() {
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const fillProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 35,
    mass: 0.25,
  });

  return (
    <SectionWrapper id="about">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            GET TO KNOW ME
          </p>
          <h2 className="cyber-heading mt-2 text-3xl font-bold md:text-4xl">
            About Me
          </h2>
          <div className="mt-3 mb-10 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-3">
          {HIGHLIGHTS.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/35 hover:text-foreground hover:shadow-[var(--shadow-button-hover)]"
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Technical Skills
          </h3>

          <motion.div variants={containerVariants}>
            {SKILLS.map((group) => (
              <motion.div key={group.category} variants={itemVariants}>
                <p className="mb-3 text-sm font-semibold tracking-wide text-accent">
                  {group.category}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.category}-${skill}`}
                      className="cursor-default rounded-2xl border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/35 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <h3 className="mt-10 mb-6 text-xl font-semibold text-foreground">
            Education
          </h3>

          <div ref={timelineRef} className="relative pl-6">
            <div className="pointer-events-none absolute left-[1px] top-[0.8125rem] bottom-0 w-[2px] rounded-full bg-border/55" />

            <motion.div
              style={{ scaleY: reduceMotion ? 1 : fillProgress }}
              className="pointer-events-none absolute left-[1px] top-[0.8125rem] bottom-0 w-[2px] origin-top overflow-hidden rounded-full bg-gradient-to-b from-accent to-cyan shadow-[0_0_24px_rgb(var(--cyan)_/_0.12)] will-change-transform"
              aria-hidden="true"
            >
              <div className="absolute inset-0 timeline-sparkle" />
            </motion.div>

            <div className="space-y-8">
              {EDUCATION.map((item, index) => (
                <motion.div
                  key={`${item.school}-${item.period}`}
                  className="relative"
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`absolute -left-[29px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full p-[1px] ${
                      item.current
                        ? "bg-gradient-to-br from-accent to-cyan shadow-[0_0_22px_rgb(var(--cyan)_/_0.16)]"
                        : "bg-border/70"
                    }`}
                    aria-hidden="true"
                  >
                    <div className="grid h-full w-full place-items-center rounded-full bg-background">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.current
                            ? "bg-gradient-to-br from-accent to-cyan"
                            : "bg-muted/70"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card/85 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl transition-colors duration-300 hover:border-accent/35 hover:shadow-[var(--shadow-card-hover)]">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-foreground">
                        {item.school}
                      </p>
                      <p className="rounded-xl border border-border bg-card/60 px-2 py-0.5 font-mono text-xs text-accent shadow-[var(--shadow-button)] backdrop-blur-md">
                        {item.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.degree}</p>
                    {item.note ? (
                      <p className="mt-1 text-xs text-muted/70">{item.note}</p>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}