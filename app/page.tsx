import Shell from "@/components/Shell";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import Closing from "@/components/Closing";
export default function Page() {
  return <Shell><Nav /><main id="top"><Hero /><Sections /><Closing /></main></Shell>;
}
