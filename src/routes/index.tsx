import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Intro from "@/components/Intro";
import Timeline from "@/components/TmeLine";
import Actions from "@/components/Action";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Profile from "@/components/Profile";

export const Route = createFileRoute("/")({
  component: App,
});

// Reusable component for scroll animations
const ScrollAnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px -100px 0px", // Adjusted for earlier trigger
    amount: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0.2, y: isInView ? 0 : 30 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth easing
        delay: isInView ? 0.2 : 0, // Slight delay for staggered effect
      }}>
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <main className="w-full min-h-screen bg-[#151312] text-white flex flex-col md:flex-row bricolage-grotesque-thin">
      {/* Left: Profile section */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="w-full md:w-[35%] h-auto md:h-screen flex items-center justify-end static lg:sticky top-0 z-10 bg-inherit">
        <Profile />
      </motion.section>

      {/* Right: Scrollable Content section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="w-full md:w-[65%] flex-1 overflow-y-auto px-4 md:px-6 py-8 space-y-7 bg-inherit">
        <ScrollAnimatedSection>
          <Intro />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <Timeline />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <Actions />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <Projects />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <Skills />
        </ScrollAnimatedSection>
        <ScrollAnimatedSection>
          <ContactForm />
        </ScrollAnimatedSection>
        <br />
        <br />
      </motion.section>
    </main>
  );
}

export default App;
