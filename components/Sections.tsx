"use client";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { services, principles, steps, doctor } from "@/lib/content";
import { Reveal, Title, Parallax } from "./Shell";
import Reels from "./Reels";
const H = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => <div className="max-w-2xl mb-10 md:mb-12"><p className="text-brand font-semibold mb-2">{eyebrow}</p><Title text={title} className="text-4xl md:text-5xl" />{sub && <p className="mt-3 text-ink/70">{sub}</p>}</div>;
export default function Sections() {
  return <>
    <section id="services" className="py-16 md:py-24"><div className="wrap"><H eyebrow="Services" title="Complete dental care under one roof" sub="From routine check-ups to specialist orthodontic and implant treatment." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">{services.map(([n, d], i) => <Reveal key={n} delay={(i % 4) * .07}><article className="group h-full bg-white rounded-3xl border border-black/5 p-6 hover:bg-brand hover:text-white transition-colors duration-300"><div className="flex justify-between text-brand group-hover:text-white"><span className="font-bold text-3xl">{String(i + 1).padStart(2, "0")}</span><ArrowUpRight className="transition-transform group-hover:rotate-45" /></div><h3 className="text-xl mt-4">{n}</h3><p className="mt-2 text-sm opacity-70">{d}</p></article></Reveal>)}</div></div></section>
    <section id="about" className="py-16 md:py-24 bg-sage"><div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"><div><H eyebrow="About the clinic" title="Care that's explained, comfortable and modern" />
      <div className="grid gap-3">{principles.map(([t, d], i) => <Reveal key={t} delay={i * .07}><div className="flex gap-4 bg-white rounded-2xl p-5"><CheckCircle2 className="text-brand shrink-0 mt-1" /><div><h3 className="text-lg">{t}</h3><p className="text-ink/70 text-sm">{d}</p></div></div></Reveal>)}</div></div>
      <div className="grid grid-cols-2 gap-3 md:gap-4"><Parallax dist={30}><img loading="lazy" src="/images/interior.jpg" width={224} height={298} decoding="async" alt="Treatment room with dental chairs inside the clinic" className="rounded-3xl w-full h-64 md:h-80 object-cover" /></Parallax><Parallax dist={-30} className="mt-8"><img loading="lazy" src="/images/team.jpg" width={342} height={298} decoding="async" alt="Clinic team member presenting a treatment kit at the reception" className="rounded-3xl w-full h-64 md:h-80 object-cover" /></Parallax></div></div></section>
    <section id="dentists" className="py-16 md:py-24"><div className="wrap"><H eyebrow="Your dentist" title="Meet Dr. Shine" />
      <div className="grid md:grid-cols-2 gap-8 items-center"><Reveal><article className="bg-brand2 text-white rounded-3xl p-7 md:p-10"><div className="w-20 h-20 rounded-full bg-accent text-ink flex items-center justify-center text-2xl font-bold mb-5" role="img" aria-label="Portrait placeholder">DS</div><h3 className="text-3xl">{doctor.name}</h3><p className="text-accent font-semibold mt-1">{doctor.role}</p><p className="mt-4 text-white/80">{doctor.bio}</p></article></Reveal>
        <Reveal delay={.1}><figure><img loading="lazy" src="/images/case.jpg" width={529} height={298} decoding="async" alt="Smile after a completed dental bridge case shared by Dr. Shine" className="rounded-3xl w-full" /><figcaption className="text-sm text-ink/60 mt-2">A completed case shared by Dr. Shine. Individual results vary.</figcaption></figure></Reveal></div></div></section>
    <Reels />
    <section id="visit" className="py-16 md:py-24 bg-sage"><div className="wrap"><H eyebrow="Your visit" title="What to expect" />
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">{steps.map(([n, t, d], i) => <Reveal key={n} delay={i * .08}><li className="border-t-2 border-brand/30 pt-4"><span className="font-bold text-5xl text-brand leading-none">{n}</span><h3 className="text-xl mt-2">{t}</h3><p className="text-sm text-ink/70">{d}</p></li></Reveal>)}</ol></div></section>
  </>;
}
