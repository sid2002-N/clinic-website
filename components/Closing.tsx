"use client";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Plus, Star, Calendar, Phone } from "lucide-react";
import { business as b, testimonials, faqs, formServices } from "@/lib/content";
import { Reveal } from "./Shell";

function Reviews() {
  const list = [...testimonials, ...testimonials];
  return <section className="py-16 md:py-24 overflow-hidden"><div className="wrap mb-10"><p className="text-brand font-semibold mb-2">Patient reviews</p><h2 className="text-4xl md:text-5xl">What our patients say</h2></div>
    <div className="group"><div className="marq marq-slow flex w-max group-hover:[animation-play-state:paused]">{list.map(([q, a], i) => <figure key={i} aria-hidden={i >= testimonials.length} className="w-[290px] sm:w-[360px] shrink-0 mr-4 bg-white rounded-3xl border border-black/5 p-6 flex flex-col">
      <div className="flex text-brand mb-3" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map(k => <Star key={k} size={16} fill="currentColor" />)}</div><blockquote className="font-medium flex-1">“{q}”</blockquote><figcaption className="mt-4 text-sm text-ink/60">{a} · Google review</figcaption></figure>)}</div></div></section>;
}
function FAQ() {
  const [o, setO] = useState<number | null>(0);
  return <section id="faq" className="py-20"><div className="wrap max-w-3xl"><h2 className="text-3xl md:text-4xl mb-10">Frequently asked questions</h2>
    {faqs.map(([q, a], i) => <div key={q} className="border-b border-brand/15"><h3><button id={`q${i}`} aria-expanded={o === i} aria-controls={`a${i}`} onClick={() => setO(o === i ? null : i)} className="w-full flex justify-between items-center gap-4 py-5 text-left font-semibold">{q}<m.span animate={{ rotate: o === i ? 45 : 0 }} className="text-brand"><Plus /></m.span></button></h3>
      <m.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={false} animate={{ height: o === i ? "auto" : 0, opacity: o === i ? 1 : 0 }} className="overflow-hidden"><p className="pb-5 text-ink/75">{a}</p></m.div></div>)}</div></section>;
}
function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const f: Record<string, string> = {
      first: String(form.get("first") ?? ""),
      last: String(form.get("last") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      day: String(form.get("day") ?? ""),
      message: String(form.get("message") ?? "")
    };
    const body = `Appointment enquiry\n\nName: ${f.first} ${f.last}\nPhone: ${f.phone}\nEmail: ${f.email}\nService: ${f.service}\nPreferred day: ${f.day}\n\nMessage: ${f.message}`;
    location.href = b.email ? `mailto:${b.email}?subject=${encodeURIComponent("Appointment enquiry — " + f.service)}&body=${encodeURIComponent(body)}` : `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(body)}`; setSent(true);
  };
  const inp = "mt-1 w-full rounded-lg border border-brand/30 bg-white px-3 py-2.5 focus:border-brand focus:ring-2 focus:ring-brand/30 outline-none";
  const F = ({ n, l, t = "text", req = true }: { n: string; l: string; t?: string; req?: boolean }) => <label className="block text-sm font-medium">{l}{req && " *"}<input name={n} type={t} required={req} className={inp} /></label>;
  return <section id="contact" className="py-20 bg-sage"><div className="wrap grid lg:grid-cols-5 gap-12">
    <div className="lg:col-span-2"><h2 className="text-3xl md:text-4xl">Book your appointment</h2>
      <p className="mt-4 text-ink/80">Send an enquiry and our team will follow up to confirm availability. An enquiry is not a confirmed appointment.</p>
      <a href={b.phoneHref} className="btn btn-s mt-6">Call {b.phone}</a>
      <div className="mt-10 space-y-1"><h3 className="font-bold">Location</h3><p>{b.address[0]}<br />{b.address[1]}<br /><span className="text-sm text-ink/70">Plus code {b.plusCode}</span></p>{b.hours.map(([d, h]) => <p key={d} className="text-sm">{d}: {h}</p>)}
        <a target="_blank" rel="noopener" className="text-brand font-semibold underline" href={b.mapsUrl}>Get Directions ↗</a></div></div>
    <form onSubmit={submit} className="lg:col-span-3 bg-white rounded-2xl p-8 grid sm:grid-cols-2 gap-5 shadow-sm">
      <F n="first" l="First name" /><F n="last" l="Last name" /><F n="phone" l="Phone" t="tel" /><F n="email" l="Email" t="email" req={false} />
      <label className="block text-sm font-medium">Preferred service<select name="service" className={inp}>{formServices.map(s => <option key={s}>{s}</option>)}</select></label><F n="day" l="Preferred day" req={false} />
      <label className="sm:col-span-2 block text-sm font-medium">Message<textarea name="message" rows={4} className={inp} /></label>
      <div className="sm:col-span-2"><button className="btn btn-p">Send enquiry</button><p className="mt-3 text-sm text-ink/70" role="status">{sent ? "Your message app should open with your enquiry. " : ""}The studio will follow up to confirm availability.</p></div></form></div></section>;
}
function Footer() {
  const col = "text-sm text-ink/70 space-y-2"; const h = "font-semibold text-sm mb-3";
  return <footer id="footer" className="bg-white border-t border-black/5 pt-14 pb-10"><div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div><div className="font-semibold text-lg">Dr. Shine's Dental Clinic</div><p className="text-sm text-ink/70">& Orthodontic Speciality Centre</p><p className="text-sm text-ink/70 mt-3 max-w-xs">{b.tagline}</p></div>
    <nav aria-label="Footer"><h3 className={h}>Explore</h3><ul className={col}>{[["Services", "#services"], ["About", "#about"], ["Dentist", "#dentists"], ["Social media", "#reels"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, u]) => <li key={l}><a href={u} className="hover:text-ink">{l}</a></li>)}</ul></nav>
    <div><h3 className={h}>Visit</h3><address className={`not-italic ${col}`}><p>{b.address[0]}<br />{b.address[1]}</p><p><a href={b.mapsUrl} target="_blank" rel="noopener" className="text-brand font-medium">Get directions ↗</a></p></address></div>
    <div><h3 className={h}>Contact</h3><ul className={col}><li><a href={b.phoneHref} className="font-medium text-ink">{b.phone}</a></li><li><a href={b.website} rel="noopener" className="hover:text-ink">drshinesdentalclinic.com</a></li>{b.hours.map(([d, t]) => <li key={d}>{d}: {t}</li>)}</ul></div>
  </div><div className="wrap mt-10 pt-6 border-t border-black/5 text-xs text-ink/50 flex flex-wrap justify-between gap-2"><span>© {new Date().getFullYear()} {b.fullName}</span><span>Individual results vary.</span></div></footer>;
}
function StickyBar() {
  const [hide, setHide] = useState(false);
  useEffect(() => { const vis = new Set<string>(); const io = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? vis.add(e.target.id) : vis.delete(e.target.id)); setHide(vis.size > 0); });
    ["contact", "footer"].forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); }); return () => io.disconnect(); }, []);
  return <div aria-hidden={hide} className={`md:hidden fixed z-40 inset-x-3 glass rounded-full p-1.5 grid grid-cols-2 gap-1.5 transition-all duration-300 ${hide ? "translate-y-24 opacity-0 pointer-events-none" : ""}`} style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + .75rem)" }}>
    <a href={b.phoneHref} className="btn justify-center bg-white/80"><Phone size={18} />Call</a><a href="#contact" className="btn btn-p justify-center"><Calendar size={18} />Book</a></div>;
}
export default function Closing() { return <><Reviews /><FAQ /><Contact /><Footer /><StickyBar /></>; }
