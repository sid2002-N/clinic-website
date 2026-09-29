"use client";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { business as b, stats, services } from "@/lib/content";
const words = ["Gentle,", "clearly", "explained", "dental care."];
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(p, [0, 1], ["0%", "10%"]); const scale = useTransform(p, [0, 1], [1.02, 1.15]); const tY = useTransform(p, [0, 1], [0, -40]);
  const txt = services.map(s => s[0]).join("  ✦  ") + "  ✦  ";
  return <>
    <section ref={ref} className="relative bg-sage overflow-hidden min-h-[100svh] flex items-center">
      <m.div aria-hidden animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-10 right-0 w-80 h-80 rounded-full bg-[#7fe3d6] blur-3xl opacity-60" />
      <m.div aria-hidden animate={{ y: [0, 26, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-10 -left-10 w-72 h-72 rounded-full bg-[#ffd3b8] blur-3xl opacity-70" />
      <m.div aria-hidden animate={{ x: [0, -30, 0] }} transition={{ duration: 16, repeat: Infinity }} className="hidden md:block absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#d2c8f7] blur-3xl opacity-60" />
      <div className="wrap relative grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center pt-28 pb-16 w-full">
        <m.div style={{ y: tY }}>
          <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="text-brand font-semibold mb-4 text-sm sm:text-base">Dental clinic & orthodontic speciality centre · Pathanamthitta</m.p>
          <h1 className="text-[11.5vw] sm:text-7xl lg:text-[4.75rem] leading-[1.03]">{words.map((w, i) => <span key={w} className="block overflow-hidden pb-[.1em]"><m.span className={`block ${i === 1 ? "bg-gradient-to-r from-brand to-[#2bb8aa] bg-clip-text text-transparent" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .3 + i * .14, duration: .9, ease: [.2, .8, .2, 1] }}>{w}</m.span></span>)}</h1>
          <m.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 text-base sm:text-lg max-w-xl text-ink/70">Orthodontics, clear aligners, dental implants and complete family dentistry with Dr. Shine Meerasahib, MDS and team.</m.p>
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="btn btn-p justify-center"><Calendar size={18} />Book an Appointment</a><a href={b.phoneHref} className="btn glass justify-center"><Phone size={18} />{b.phone}</a></m.div>
        </m.div>
        <m.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .5, duration: 1, type: "spring" }} className="w-full max-w-[460px] lg:ml-auto">
          <div className="overflow-hidden aspect-[4/3] rounded-[2.5rem] shadow-2xl"><m.img style={{ y: imgY, scale }} src="/images/front.jpg" alt="Entrance of Dr. Shine's Dental Clinic and Orthodontic Speciality Centre in Pathanamthitta" width={408} height={254} decoding="async" className="w-full h-full object-cover" /></div>
          <div className="mt-4 grid grid-cols-2 gap-3"><div className="glass rounded-3xl px-4 py-3"><div className="font-bold text-2xl leading-none">★ {stats.rating}</div><div className="text-xs text-ink/70 mt-1">{stats.count} {stats.countLabel}</div></div>
            <div className="glass rounded-3xl px-4 py-3 flex flex-col justify-center text-sm"><span className="flex items-center gap-2 font-semibold"><span className="w-2 h-2 rounded-full bg-green-500" />Open now</span><span className="text-xs text-ink/70 mt-1">{b.hours[0][1]}</span></div></div>
        </m.div>
      </div></section>
    <div className="overflow-hidden bg-ink text-white py-4" aria-hidden><div className="marq flex w-max">{[0, 1, 2, 3].map(i => <span key={i} className="whitespace-nowrap font-semibold text-xl sm:text-2xl tracking-tight">{txt}</span>)}</div></div>
  </>;
}
