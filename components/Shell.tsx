"use client";
import { useRef } from "react";
import { LazyMotion, domAnimation, MotionConfig, m, useScroll, useTransform } from "framer-motion";
export default function Shell({ children }: { children: React.ReactNode }) { return <LazyMotion features={domAnimation}><MotionConfig reducedMotion="user">{children}</MotionConfig></LazyMotion>; }
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <m.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .65, delay, ease: [.2, .8, .2, 1] }}>{children}</m.div>;
}
export function Title({ text, className = "" }: { text: string; className?: string }) {
  return <h2 className={className} aria-label={text}>{text.split(" ").map((w, i) => <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[.12em] mr-[.25em]"><m.span className="inline-block" initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .7, delay: i * .06, ease: [.2, .8, .2, 1] }}>{w}</m.span></span>)}</h2>;
}
export function Parallax({ children, dist = 40, className = "" }: { children: React.ReactNode; dist?: number; className?: string }) {
  const ref = useRef(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [dist, -dist]);
  return <div ref={ref} className={className}><m.div style={{ y }}>{children}</m.div></div>;
}
