import { motion } from "framer-motion";
import { useState } from "react";

const ActionLink = ({
  href,
  label,
  tooltip,
  bgColor,
  hoverColor,
}: {
  href: string;
  label: string;
  tooltip: string;
  bgColor: string;
  hoverColor: string;
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative w-full flex items-center justify-center">
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full mb-2 text-xs bg-black text-white px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
          {tooltip}
        </motion.div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${bgColor} hover:${hoverColor} text-black roboto-condensed-bold py-3 rounded w-full text-center transition`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}>
        {label}
      </a>
    </div>
  );
};

const Actions = () => {
  return (
    <motion.div
      className="hidden fixed bottom-10 right-10 w-[160px] min-h-[160px] md:flex flex-col items-center justify-end space-y-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <ActionLink
        href="https://trailer-base.vercel.app"
        label="Trailer Base"
        tooltip="See my project"
        bgColor="bg-lime-400"
        hoverColor="bg-lime-600"
      />
      <ActionLink
        href="https://github.com/dumisa-sakhile"
        label="Github"
        tooltip="Check out my Github"
        bgColor="bg-white"
        hoverColor="bg-gray-200"
      />
      <ActionLink
        href="https://www.linkedin.com/in/sakhile-dumisa/"
        label="LinkedIn"
        tooltip="LinkedIn Profile"
        bgColor="bg-orange-500"
        hoverColor="bg-orange-600"
      />
    </motion.div>
  );
};

export default Actions;
