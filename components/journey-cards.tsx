"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { site, stats } from "@/lib/site";

type CardKind =
  | "driver"
  | "infos"
  | "stats"
  | "quote"
  | "studio"
  | "garage"
  | "results";

type Card = {
  id: string;
  kind: CardKind;
  start: number;
  end: number;
  rotate: number;
  width: string;
};

const cards: Card[] = [
  { id: "c1", kind: "driver", start: 0.0, end: 0.36, rotate: -4, width: "w-[min(56vw,420px)]" },
  { id: "c2", kind: "infos", start: 0.1, end: 0.46, rotate: 3, width: "w-[min(42vw,320px)]" },
  { id: "c3", kind: "stats", start: 0.2, end: 0.56, rotate: -2, width: "w-[min(34vw,260px)]" },
  { id: "c4", kind: "quote", start: 0.3, end: 0.66, rotate: 4, width: "w-[min(48vw,360px)]" },
  { id: "c5", kind: "studio", start: 0.4, end: 0.76, rotate: -3, width: "w-[min(52vw,400px)]" },
  { id: "c6", kind: "garage", start: 0.5, end: 0.86, rotate: 2, width: "w-[min(40vw,300px)]" },
  { id: "c7", kind: "results", start: 0.6, end: 0.96, rotate: -3, width: "w-[min(50vw,380px)]" },
];

/** Sequential windows — only one card fully visible at a time. */
function sequentialWindow(index: number, count: number) {
  const slot = 0.92 / count;
  const start = 0.04 + index * slot;
  const end = Math.min(0.98, start + slot + 0.01);
  return { start, end };
}

function TabHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </span>
    </div>
  );
}

function CardFace({ kind }: { kind: CardKind }) {
  if (kind === "driver") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="The builder" />
        <div className="p-5 md:p-6">
          <p className="font-accent text-xl font-semibold leading-snug md:text-2xl">
            <span className="font-bold">Obsession. Craft. Consistency.</span> Qualities that built
            Fasttracks from the ground up.
          </p>
          <div className="mt-5 grid grid-cols-1 items-start gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[160px] overflow-hidden rounded-xl bg-black sm:max-w-none">
              <Image
                src="/images/portrait.jpg"
                alt="Rakesh Kurapati"
                fill
                sizes="200px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs leading-5 text-white/65 md:text-sm md:leading-6">
              What started as a childhood obsession with cars became India&apos;s biggest instant car
              modification studio — brick by brick, car by car.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "infos") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="General infos" />
        <div className="p-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
            <Image
              src="/images/hero.jpg"
              alt="Lifestyle"
              fill
              sizes="280px"
              className="object-cover object-[center_35%]"
            />
          </div>
          <div className="mt-4 space-y-3 px-1 pb-1">
            <div className="border-t border-white/10 pt-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">
                Based in
              </p>
              <p className="mt-1 font-display text-2xl tracking-[0.04em]">Jubilee Hills</p>
            </div>
            <div className="border-t border-white/10 pt-3">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">
                Role
              </p>
              <p className="mt-1 font-display text-2xl tracking-[0.04em]">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "stats") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="Stats" />
        <div className="px-4 pb-4 pt-1">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 py-4 first:border-t-0 first:pt-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-4xl tracking-[0.04em] md:text-5xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "quote") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="Beginnings" />
        <div className="p-5 md:p-6">
          <p className="font-accent text-xl font-semibold leading-snug md:text-2xl">
            &ldquo;Dad, this is what I want to do when I grow up.&rdquo;
          </p>
          <p className="mt-4 text-xs leading-5 text-white/65 md:text-sm md:leading-6">
            When Rakesh found cars, he never climbed back out. Years on the floor became a workshop,
            then a studio, then a culture in Jubilee Hills.
          </p>
          <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-xl bg-black">
            <Image
              src="/images/studio-5.jpg"
              alt="Beginnings"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "studio") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="The studio" />
        <div className="p-5 md:p-6">
          <p className="font-accent text-lg font-semibold leading-snug md:text-xl">
            When the floor became the brand, Fasttracks took off on an extraordinary trajectory.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[0.95fr_1.05fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-xl bg-black sm:max-w-none">
              <Image
                src="/images/studio-4.jpg"
                alt="Fasttracks"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-xs leading-5 text-white/65 md:text-sm">
                PPF, recliners, audio, vinyl — India&apos;s biggest instant modification studio under
                one roof.
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                {site.studioHandle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "garage") {
    return (
      <div className="bg-[#141418] text-white">
        <TabHeader label="Garage" />
        <div className="p-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
            <Image
              src="/images/hero.jpg"
              alt="MC20"
              fill
              sizes="260px"
              className="object-cover object-[18%_55%]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-sm font-medium text-white/85">MC20 · Rosso</p>
            <p className="font-display text-3xl tracking-[0.04em] text-accent">01</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141418] text-white">
      <TabHeader label="Floor results" />
      <div className="grid grid-cols-2 gap-2 p-3">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
          <Image src="/images/studio-2.jpg" alt="Detail" fill sizes="160px" className="object-cover" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
          <Image
            src="/images/hero.jpg"
            alt="Fleet"
            fill
            sizes="160px"
            className="object-cover object-[center_40%]"
          />
        </div>
      </div>
      <p className="px-4 pb-4 text-xs leading-5 text-white/60">
        Hundreds of builds a month. Same hunger as day one.
      </p>
    </div>
  );
}

/** Mobile: centered, one card at a time — no diagonal flight, no overlap. */
function MobileCard({
  card,
  progress,
  index,
}: {
  card: Card;
  progress: MotionValue<number>;
  index: number;
}) {
  const { start, end } = sequentialWindow(index, cards.length);
  const mid = (start + end) / 2;
  const fade = Math.min(0.03, (end - start) * 0.2);

  const opacity = useTransform(
    progress,
    [start, start + fade, mid, end - fade, end],
    [0, 1, 1, 1, 0],
  );
  const y = useTransform(progress, [start, mid, end], [28, 0, -28]);
  const scale = useTransform(progress, [start, mid, end], [0.96, 1, 0.98]);

  return (
    <motion.div
      className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center px-4"
      style={{ opacity, y, scale, zIndex: 10 + index }}
    >
      <article className="max-h-[70svh] w-full max-w-[340px] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
        <CardFace kind={card.kind} />
      </article>
    </motion.div>
  );
}

/** Desktop: flying BR → TL collage. */
function FlyingCard({
  card,
  progress,
  reduce,
  index,
}: {
  card: Card;
  progress: MotionValue<number>;
  reduce: boolean | null;
  index: number;
}) {
  const x = useTransform(progress, [card.start, card.end], ["62vw", "-72vw"]);
  const y = useTransform(progress, [card.start, card.end], ["46vh", "-52vh"]);
  const opacity = useTransform(
    progress,
    [card.start, card.start + 0.03, card.end - 0.045, card.end],
    [0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    [card.start, (card.start + card.end) / 2, card.end],
    [0.9, 1, 1.04],
  );
  const rotate = useTransform(progress, [card.start, card.end], [card.rotate - 1, card.rotate + 4]);

  if (reduce) {
    return (
      <article
        className={`overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.55)] ${card.width}`}
        style={{ transform: `rotate(${card.rotate}deg)` }}
      >
        <CardFace kind={card.kind} />
      </article>
    );
  }

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 10 + index }}
    >
      <motion.article
        className={`overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.55)] ${card.width}`}
        style={{
          x,
          y,
          opacity,
          scale,
          rotate,
          willChange: "transform, opacity",
        }}
      >
        <CardFace kind={card.kind} />
      </motion.article>
    </div>
  );
}

export function JourneyCards() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.14], [1, 1, 0]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="chapters" ref={ref} className="relative h-[560vh] bg-background md:h-[440vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-20 blur-lg"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(200,16,46,0.12),transparent_45%),linear-gradient(180deg,rgba(8,8,9,0.55),rgba(8,8,9,0.96))]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <motion.div
            className="moments-streaks absolute inset-y-[10%] left-[-15%] w-[140%] opacity-35"
            style={{ x: reduce ? 0 : bgX }}
          />
        </div>

        <motion.div
          className="section-pad absolute inset-x-0 top-16 z-20 md:top-28"
          style={{ opacity: reduce ? 1 : titleOpacity }}
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Chapters
          </p>
          <h2 className="mt-2 max-w-xl font-display text-3xl leading-[0.9] tracking-[0.02em] text-white sm:text-5xl md:mt-3 md:text-7xl">
            Stories in
            <br />
            <span className="text-white/35">motion</span>
          </h2>
        </motion.div>

        {/* Mobile: centered sequential cards (CSS gate — no JS media race) */}
        <div className="relative z-10 h-full md:hidden">
          {reduce ? (
            <div className="section-pad flex h-full flex-col items-center justify-start gap-5 overflow-auto py-28">
              {cards.map((card) => (
                <article
                  key={card.id}
                  className="w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
                >
                  <CardFace kind={card.kind} />
                </article>
              ))}
            </div>
          ) : (
            cards.map((card, index) => (
              <MobileCard key={card.id} card={card} progress={scrollYProgress} index={index} />
            ))
          )}
        </div>

        {/* Desktop: flying collage */}
        <div className="relative z-10 hidden h-full md:block">
          {reduce ? (
            <div className="section-pad flex h-full flex-wrap items-center justify-center gap-8 overflow-auto py-28">
              {cards.map((card, index) => (
                <FlyingCard
                  key={card.id}
                  card={card}
                  progress={scrollYProgress}
                  reduce
                  index={index}
                />
              ))}
            </div>
          ) : (
            cards.map((card, index) => (
              <FlyingCard
                key={card.id}
                card={card}
                progress={scrollYProgress}
                reduce={false}
                index={index}
              />
            ))
          )}
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 px-4 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/35 md:bottom-8">
          Scroll through chapters
        </div>
      </div>
    </section>
  );
}
