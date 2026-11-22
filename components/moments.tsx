"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-media-query";

type Shot = {
  id: string;
  src: string;
  focus: string;
  caption: string;
  side: -1 | 1;
  kind?: "image" | "video";
};

const shots: Shot[] = [
  {
    id: "s1",
    src: "/images/portrait.jpg",
    focus: "center top",
    caption: "Jubilee Hills — Portrait",
    side: -1,
  },
  {
    id: "s2",
    src: "/images/studio-4.jpg",
    focus: "center",
    caption: "The floor — Fasttracks",
    side: 1,
  },
  {
    id: "s3",
    src: "/videos/studio.mp4",
    focus: "center",
    caption: "Studio reel — On the floor",
    side: -1,
    kind: "video",
  },
  {
    id: "s4",
    src: "/images/hero.jpg",
    focus: "center 40%",
    caption: "Lifestyle — MC20 & Huracán",
    side: 1,
  },
  {
    id: "s5",
    src: "/images/studio-2.jpg",
    focus: "center",
    caption: "Craft — Detail",
    side: -1,
  },
  {
    id: "s6",
    src: "/images/studio-3.jpg",
    focus: "center",
    caption: "Finish — Gloss & protection",
    side: 1,
  },
  {
    id: "s7",
    src: "/images/hero.jpg",
    focus: "18% 55%",
    caption: "Garage — Maserati MC20",
    side: -1,
  },
];

function shotWindow(index: number) {
  const duration = 0.3;
  const stagger = duration / 2;
  const start = index * stagger;
  const end = Math.min(1, start + duration);
  const mid = start + (end - start) * 0.5;
  return { start, mid, end };
}

function DepthShot({
  shot,
  index,
  progress,
  reduce,
  mobile,
}: {
  shot: Shot;
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
  mobile: boolean;
}) {
  const { start, mid, end } = shotWindow(index);

  const lane = mobile ? 12 : 26;
  const farLane = mobile ? 8 : 18;
  const pastLane = mobile ? 18 : 34;

  const nearX = `${shot.side * lane}vw`;
  const farX = `${shot.side * farLane}vw`;
  const pastX = `${shot.side * pastLane}vw`;

  const scale = useTransform(
    progress,
    [start, mid, end],
    mobile ? [0.42, 0.92, 1.2] : [0.34, 1.02, 1.4],
  );
  const y = useTransform(
    progress,
    [start, mid, end],
    mobile ? ["4vh", "0vh", "-6vh"] : ["6vh", "-2vh", "-8vh"],
  );
  const x = useTransform(progress, [start, mid, end], [farX, nearX, pastX]);
  const opacity = useTransform(
    progress,
    [start, start + 0.025, mid, end - 0.05, end],
    [0, 1, 1, 1, 0],
  );
  const blur = useTransform(progress, [start, mid * 0.7, mid, end], [7, 1, 0, 1.2]);
  const filter = useTransform(blur, (b) => `blur(${Math.max(0, b)}px)`);
  const zIndex = useTransform(scale, (s) => Math.round(10 + s * 55));

  const panelClass = mobile
    ? "relative aspect-[3/4] w-[min(58vw,240px)] overflow-hidden border border-white/15 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
    : "relative aspect-[3/4] w-[min(40vw,400px)] overflow-hidden border border-white/15 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.75)]";

  if (reduce) {
    const t = index / Math.max(1, shots.length - 1);
    const s = 0.45 + t * 0.5;
    return (
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `translate(-50%, -50%) translateX(${shot.side * (mobile ? 14 : 22)}vw) scale(${s})`,
          zIndex: index,
          opacity: 0.45 + t * 0.55,
        }}
      >
        <figure className={panelClass}>
          <ShotMedia shot={shot} />
        </figure>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      transformTemplate={({ x: tx, y: ty, scale: sc }) =>
        `translate(-50%, -50%) translate(${tx}, ${ty}) scale(${sc})`
      }
      style={{
        x,
        y,
        scale,
        opacity,
        filter,
        zIndex,
        willChange: "transform, opacity, filter",
      }}
    >
      <figure className={panelClass}>
        <ShotMedia shot={shot} />
      </figure>
    </motion.div>
  );
}

function ShotMedia({ shot }: { shot: Shot }) {
  if (shot.kind === "video") {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={shot.src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  return (
    <Image
      src={shot.src}
      alt={shot.caption}
      fill
      sizes="(max-width: 767px) 60vw, 45vw"
      className="object-cover"
      style={{ objectPosition: shot.focus }}
    />
  );
}

export function Moments() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const [caption, setCaption] = useState(shots[0].caption);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const streakX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.03, 0.94, 1], [0, 1, 1, 0.35]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let active = 0;
    for (let i = 0; i < shots.length; i++) {
      const { start, mid } = shotWindow(i);
      if (v >= start) active = i;
      if (v >= mid) active = i;
    }
    setCaption(shots[Math.min(active, shots.length - 1)].caption);
  });

  return (
    <section
      id="moments"
      ref={ref}
      className="relative bg-background h-[320vh] md:h-[480vh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/studio-4.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover opacity-30 blur-md"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,9,0.1)_0%,rgba(8,8,9,0.75)_50%,rgba(8,8,9,0.97)_100%)]" />
          <motion.div
            className="moments-streaks absolute inset-y-[10%] left-[-20%] w-[160%] opacity-55"
            style={{ x: reduce ? 0 : streakX }}
          />
        </div>

        <div className="absolute inset-0 z-10">
          {shots.map((shot, index) => (
            <DepthShot
              key={shot.id}
              shot={shot}
              index={index}
              progress={scrollYProgress}
              reduce={reduce}
              mobile={mobile}
            />
          ))}
        </div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-2 px-4 text-center md:bottom-10 md:px-6"
          style={{ opacity: reduce ? 1 : captionOpacity }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent">Moments</p>
          <p className="max-w-[90vw] font-accent text-sm font-medium text-white/85 md:text-base">
            {caption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
