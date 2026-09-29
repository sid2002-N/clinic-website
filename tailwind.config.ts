import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{fontFamily:{serif:["var(--font-sans)","system-ui","sans-serif"],display:["var(--font-sans)","system-ui","sans-serif"],sans:["var(--font-sans)","system-ui","sans-serif"]},
colors:{brand:"#0a7c78",brand2:"#1d1d1f",sage:"#f5f5f7",cream:"#fbfbfd",ink:"#1d1d1f",accent:"#5be3d3"}}},plugins:[]} satisfies Config;
