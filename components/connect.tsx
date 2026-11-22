"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

export function Connect() {
  return (
    <section id="connect" className="border-t border-border">
      <div className="section-pad py-20 md:py-28">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">What&apos;s up</p>
          <h2 className="mt-3 font-display text-6xl leading-none tracking-[0.02em] md:text-8xl lg:text-9xl">
            On socials
            <br />
            <span className="text-muted">&amp; connect</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.08}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[280px] flex-col justify-between border border-border bg-surface p-8 transition-colors hover:border-accent md:p-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">Instagram</p>
                <p className="mt-4 font-display text-5xl tracking-[0.04em] md:text-6xl">{site.instagramHandle}</p>
                <p className="mt-4 max-w-md text-base text-muted">
                  Entrepreneur · Automotive lifestyle · Travel — the daily feed behind the builds.
                </p>
              </div>
              <span className="mt-10 inline-flex text-[11px] font-bold uppercase tracking-[0.28em] text-accent group-hover:underline">
                Open profile →
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={0.14}>
            <a
              href={site.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[280px] overflow-hidden border border-border bg-surface"
            >
              <Image
                src="/images/fasttracks-logo.png"
                alt="Fasttracks Car Care"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-center p-16 opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="relative z-10 mt-auto p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">The studio</p>
                <p className="mt-2 font-accent text-2xl font-semibold">Fasttracks Car Care</p>
                <span className="mt-4 inline-flex text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                  Visit website →
                </span>
              </div>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center bg-foreground px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-90"
          >
            WhatsApp
          </a>
          <a
            href={site.studioInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center border border-border px-6 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors hover:border-foreground"
          >
            {site.studioHandle}
          </a>
          <a
            href={site.email}
            className="inline-flex h-12 items-center border border-border px-6 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors hover:border-foreground"
          >
            Business enquiries
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
