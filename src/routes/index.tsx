import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Profile from "../components/Profile";
import Intro from "@/components/Intro";
import Timeline from "@/components/TmeLine";
import Actions from "@/components/Action";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="w-full min-h-screen bg-[#151312] text-white flex flex-col md:flex-row bricolage-grotesque-thin">
      {/* Left: Profile section */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-[35%] h-auto md:h-screen flex items-center justify-end static lg:sticky top-0 z-10 bg-inherit">
        <Profile />
      </motion.section>

      {/* Right: Scrollable Content section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-[65%] flex-1 overflow-y-auto px-4 md:px-6 py-8 space-y-7 bg-inherit">
        <Intro />
        <Timeline />
        <Actions />
        <Projects />
        <Skills />
        <ContactForm />
        <br />
        <br />
      </motion.section>
    </main>
  );
}
