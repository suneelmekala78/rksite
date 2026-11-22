"use client";

import Image from "next/image";
import { FadeIn, Reveal } from "@/components/motion";
import { garage } from "@/lib/site";

export function Garage() {
  return (
    <section id="garage" className="border-t border-border bg-surface">
      <div className="section-pad py-20 md:py-28">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">The garage</p>
              <h2 className="mt-3 font-display text-6xl leading-none tracking-[0.02em] md:text-8xl">
                Machines
                <br />
                that move him
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-muted">
              MC20 and Huracán — the personal fleet that mirrors the standard set on the Fasttracks floor.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
          {garage.map((car, i) => (
            <Reveal key={car.name}>
              <article className="group relative aspect-[16/11] overflow-hidden bg-background">
                <Image
                  src="/images/hero.jpg"
                  alt={car.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    car.focus === "left" ? "object-[18%_55%]" : "object-[82%_55%]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-4xl tracking-[0.04em] md:text-5xl">{car.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{car.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["/images/studio-1.jpg", "/images/studio-2.jpg", "/images/studio-3.jpg"].map((src, i) => (
            <Reveal key={src}>
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={src}
                  alt={`Automotive detail ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
