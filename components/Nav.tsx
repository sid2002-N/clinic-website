"use client";
import { useEffect, useState } from "react";
import { m, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { business as b } from "@/lib/content";
const links = [["Services","#services"],["About","#about"],["Dentist","#dentists"],["Reels","#reels"],["FAQ","#faq"]];
export default function Nav() {
  const [s, setS] = useState(false); const [o, setO] = useState(false);
  const prog = useSpring(useScroll().scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => { const f = () => setS(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = o ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [o]);
  return <>
    <m.div style={{ scaleX: prog }} className="fixed top-0 inset-x-0 h-[3px] bg-brand origin-left z-[90]" aria-hidden />
    <m.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .8, duration: .6, ease: [.2, .8, .2, 1] }} className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
      <m.div animate={{ maxWidth: s ? 600 : 780 }} transition={{ duration: .5, ease: [.2, .8, .2, 1] }} className="glass pointer-events-auto rounded-full w-full flex items-center justify-between gap-3 pl-5 pr-2 py-2">
        <a href="#top" className="font-bold text-lg tracking-tight whitespace-nowrap">Dr. Shine's</a>
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm font-medium">{links.map(([l, h]) => <a key={l} href={h} className="group relative text-ink/80 hover:text-ink">{l}<span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-current transition-transform group-hover:scale-x-100" /></a>)}</nav>
        <a href="#contact" className="btn btn-p hidden md:inline-flex !py-2 !min-h-0 text-sm">Book</a>
        <div className="flex md:hidden gap-2"><a href={b.phoneHref} aria-label="Call the clinic" className="w-11 h-11 rounded-full bg-white/70 flex items-center justify-center"><Phone size={18} /></a>
          <button className="w-11 h-11 rounded-full bg-ink text-white flex items-center justify-center" aria-label="Open menu" aria-expanded={o} onClick={() => setO(true)}><Menu size={20} /></button></div>
      </m.div></m.header>
    <AnimatePresence>{o && <m.div role="dialog" aria-modal="true" aria-label="Menu" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .35 }}
      className="fixed inset-0 z-[95] glass-dark !rounded-none overflow-y-auto px-6 pt-24 pb-8 flex flex-col">
      <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center" aria-label="Close menu" onClick={() => setO(false)}><X size={20} /></button>
      <nav aria-label="Mobile" className="flex flex-col gap-1">{[...links, ["Contact", "#contact"]].map(([l, h], i) => <m.a key={l} href={h} onClick={() => setO(false)} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .1 + i * .06 }} className="font-bold text-[11vw] leading-[1.15] tracking-tight">{l}</m.a>)}</nav>
      <div className="mt-auto pt-8 text-sm text-white/80"><a href={b.phoneHref} className="font-semibold text-lg text-white block">{b.phone}</a><p>{b.address[0]}, {b.address[1]}</p></div>
    </m.div>}</AnimatePresence></>;
}
