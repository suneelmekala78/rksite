"use client";

import Image from "next/image";
import { ClipReveal, FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { journey, stats } from "@/lib/site";

export function Story() {
  return (
    <section id="journey" className="relative overflow-hidden border-t border-border">
      <div className="section-pad py-20 md:py-28">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">The driver of the brand</p>
          <ClipReveal>
            <h2 className="mt-4 max-w-4xl font-display text-6xl leading-[0.9] tracking-[0.02em] md:text-8xl lg:text-9xl">
              It&apos;s the mind
              <br />
              <span className="text-muted">that makes</span>
              <br />
              the difference
            </h2>
          </ClipReveal>
        </FadeIn>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src="/images/portrait.jpg"
                alt="Rakesh Kurapati at the Jubilee Hills studio"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone">
              Rakesh Kurapati · Jubilee Hills
            </p>
          </FadeIn>

          <div>
            <FadeIn delay={0.12}>
              <p className="font-accent text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                What started as a childhood obsession with cars became India&apos;s biggest instant car
                modification studio.
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted md:text-lg">
                Rakesh built Fasttracks from the ground up — brick by brick, car by car — on one belief:
                every vehicle deserves to be extraordinary. He still shows up on the floor with the same
                hunger he had on day one.
              </p>
            </FadeIn>

            <Stagger className="mt-14 space-y-10 border-t border-border pt-10" delay={0.05}>
              {journey.map((item) => (
                <StaggerItem key={item.year}>
                  <div className="grid gap-3 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                    <p className="font-display text-3xl tracking-[0.06em] text-accent">{item.year}</p>
                    <div>
                      <h3 className="font-accent text-xl font-semibold md:text-2xl">{item.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-7 text-muted md:text-base">{item.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Stagger className="mt-20 grid grid-cols-2 gap-px bg-border md:grid-cols-4" delay={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-background px-4 py-8 md:px-6 md:py-10">
                <p className="font-display text-5xl tracking-[0.04em] text-foreground md:text-6xl">{stat.value}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
