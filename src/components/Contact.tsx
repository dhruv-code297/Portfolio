"use client";

import { createLucideIcon } from "lucide-react";
import { Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { PERSONAL } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

const contactCards = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    Icon: Mail,
  },
  { label: "GitHub", value: "github.com/dhruv-code297", href: PERSONAL.github, Icon: Github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhruv",
    href: PERSONAL.linkedin,
    Icon: Linkedin,
  },
  {
    label: "LeetCode",
    value: "leetcode.com/dhruv",
    href: PERSONAL.leetcode,
    Icon: Code2,
  },
] as const;

export default function Contact() {
  return (
    <>
      <SectionWrapper id="contact" className="pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mx-auto max-w-2xl"
        >
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              GET IN TOUCH
            </p>
            <h2 className="cyber-heading mt-2 text-3xl font-bold md:text-4xl">
              Contact Me
            </h2>
            <div className="mx-auto mt-3 mb-10 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan" />
            <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-muted">
              Whether you have a project in mind, an opportunity to share, or just want to connect — my inbox is always open. I&apos;m actively looking for internships, freelance collaborations, and open-source contributions. Let&apos;s build something meaningful together.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactCards.map(({ label, value, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative flex items-center gap-4 rounded-3xl border border-border bg-card/85 p-5 shadow-[var(--shadow-card)] backdrop-blur-xl transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-accent/70 before:to-cyan/70 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:border-accent/35 hover:shadow-[var(--shadow-card-hover)] hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/60 text-accent shadow-[var(--shadow-button)] backdrop-blur-md transition-colors group-hover:border-accent/40 group-hover:text-foreground">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-wide text-muted/80">{label}</p>
                  <p className="break-all text-sm font-semibold text-foreground">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted">
        Designed &amp; Built by Dhruv · {new Date().getFullYear()}
      </footer>
    </>
  );
}