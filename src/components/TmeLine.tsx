import { motion } from "framer-motion";

const Timeline = () => {
  const experienceYears = new Date().getFullYear() - 2020;

  const timelineItems = [
    {
      value: "+3",
      label: "Year Student at the University of Pretoria",
    },
    {
      value: "+17",
      label: "Projects completed",
    },
    {
      value: `+${experienceYears}`,
      label: "Years of experience in web development",
    },
  ];

  return (
    <section className="w-full lg:w-[65%] h-full md:h-[200px] overflow-y-auto  px-4 hidden md:block">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}>
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center">
            <h2 className="text-8xl font-bold bricolage-grotesque-bold text-white leading-tight">
              {item.value}
            </h2>
            <p className="mt-1 text-md text-[#897F7F] bricolage-grotesque-regular max-w-[12rem]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Timeline;
