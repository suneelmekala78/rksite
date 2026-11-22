"use client";

import Image from "next/image";
import { FadeIn, Reveal } from "@/components/motion";
import { site } from "@/lib/site";

export function DualWorld() {
  return (
    <section className="border-t border-border">
      <div className="grid lg:grid-cols-2">
        <a
          id="studio"
          href={site.studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative isolate min-h-[70vh] overflow-hidden bg-surface"
        >
          <Reveal className="absolute inset-0">
            <Image
              src="/images/studio-4.jpg"
              alt="Inside the Fasttracks Car Care studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
          </Reveal>
          <div className="section-pad relative z-10 flex h-full min-h-[70vh] flex-col justify-end py-12 md:py-16">
            <FadeIn>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">01</p>
              <h2 className="mt-3 font-display text-7xl leading-[0.85] tracking-[0.02em] md:text-8xl lg:text-9xl">
                On
                <br />
                Studio
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/75">
                Fasttracks — PPF, recliners, audio, and builds that leave the floor as statements.
              </p>
              <span className="mt-8 inline-flex text-[11px] font-bold uppercase tracking-[0.28em] text-foreground underline-offset-4 group-hover:underline">
                Visit Fasttracks →
              </span>
            </FadeIn>
          </div>
        </a>

        <div
          id="life"
          className="group relative isolate min-h-[70vh] overflow-hidden bg-surface"
        >
          <Reveal className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Rakesh Kurapati lifestyle with supercars"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/25" />
          </Reveal>
          <div className="section-pad relative z-10 flex h-full min-h-[70vh] flex-col justify-end py-12 md:py-16">
            <FadeIn delay={0.08}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">02</p>
              <h2 className="mt-3 font-display text-7xl leading-[0.85] tracking-[0.02em] md:text-8xl lg:text-9xl">
                Off
                <br />
                Track
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/75">
                Travel, machines, and the lifestyle that fuels the craft — captured for {site.instagramHandle}.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex text-[11px] font-bold uppercase tracking-[0.28em] text-foreground underline-offset-4 hover:underline"
              >
                Follow the feed →
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
