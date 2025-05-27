import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Profile from "../components/Profile";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="w-full min-h-screen bg-[#151312] text-white flex flex-col md:flex-row overflow-hidden bricolage-grotesque-thin">
      {/* Left: Profile section (sticky on desktop, static on mobile) */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-[35%] h-auto md:h-screen p-6 md:p-10 pt-16 md:pt-24 bg-inherit  flex items-center justify-center md:items-start md:justify-end sticky top-0 z-10">
        <Profile />
      </motion.section>

      {/* Right: Scrollable Content section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full md:w-[65%] h-full md:h-screen overflow-y-auto px-4 md:px-6 py-8 space-y-16">
        {/* Add your dynamic content here */}
      </motion.section>
    </main>
  );
}
