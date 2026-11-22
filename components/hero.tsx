"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y, opacity }}>
        <Image
          src="/images/hero.jpg"
          alt="Rakesh Kurapati between a Maserati MC20 and Lamborghini Huracán"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="hero-gradient absolute inset-0" />
      </motion.div>

      <div className="section-pad relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
        <motion.p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/80 md:text-xs"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          {site.role}
        </motion.p>

        <h1 className="font-display leading-[0.82] tracking-[0.02em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
          <motion.span
            className="block text-[17vw] text-white md:text-[9vw]"
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Rakesh
          </motion.span>
          <motion.span
            className="block text-[17vw] text-[#c8102e] md:text-[9vw]"
            initial={reduce ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Kurapati
          </motion.span>
        </h1>

        <motion.div
          className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <p className="max-w-md font-accent text-base font-medium leading-snug text-white/90 md:text-xl">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#journey"
              className="inline-flex h-11 items-center justify-center bg-[#c8102e] px-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#a50d25] md:h-12 md:px-6"
            >
              The journey
            </a>
            <a
              href="#connect"
              className="inline-flex h-11 items-center justify-center border border-white/40 px-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:border-white hover:bg-white hover:text-black md:h-12 md:px-6"
            >
              Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
