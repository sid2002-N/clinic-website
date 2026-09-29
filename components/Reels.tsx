"use client";
import { useEffect, useRef, useState } from "react";
import { business as b } from "@/lib/content";
import { Title } from "./Shell";
function useNear<T extends HTMLElement>() {
  const ref = useRef<T>(null); const [near, setNear] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: "0px 500px" }); io.observe(el); return () => io.disconnect(); }, []);
  return [ref, near] as const;
}
const box = "shrink-0 mr-4 w-[260px] sm:w-[290px] aspect-[9/16] relative overflow-hidden rounded-3xl bg-[#0d1615] border border-white/10";
// Instagram's own embed, cropped so only the video area shows (header and like/comment bar are clipped).
function IG({ id }: { id: string }) {
  const [ref, near] = useNear<HTMLDivElement>(); const { top, bottom } = b.reelCrop;
  return <div ref={ref} className={box}>{near ? <iframe src={`https://www.instagram.com/reel/${id}/embed/`} title="Instagram reel" loading="lazy" allowFullScreen scrolling="no" style={{ position: "absolute", left: 0, width: "100%", top: -top, height: `calc(100% + ${top + bottom}px)`, border: 0 }} /> : <div className="w-full h-full animate-pulse bg-white/5" aria-hidden />}</div>;
}
// Clean self-hosted video (recommended for a fully chrome-free look).
function Vid({ src, poster }: { src: string; poster?: string }) {
  const [ref, near] = useNear<HTMLDivElement>(); const v = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (near) v.current?.play().catch(() => {}); }, [near]);
  return <div ref={ref} className={box}>{near && <video ref={v} src={src} poster={poster} muted loop playsInline autoPlay preload="metadata" className="w-full h-full object-cover" />}</div>;
}
export default function Reels() {
  const items = [...b.reelVideos.map(v => <Vid key={v.src} {...v} />), ...b.instagramReels.map(id => <IG key={id} id={id} />)];
  return <section id="reels" className="py-16 md:py-24 bg-ink text-white overflow-hidden">
    <div className="wrap mb-10"><p className="text-accent font-semibold mb-2">Instagram</p><Title text="Our social media presence" className="text-4xl md:text-5xl" /></div>
    <div className="marq marq-r flex w-max hover:[animation-play-state:paused]">
      <div className="flex">{items}</div><div className="flex" aria-hidden>{[...b.reelVideos.map(v => <Vid key={"d" + v.src} {...v} />), ...b.instagramReels.map(id => <IG key={"d" + id} id={id} />)]}</div></div></section>;
}
