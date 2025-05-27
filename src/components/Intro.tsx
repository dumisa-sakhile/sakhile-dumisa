const Intro = () => {
  return (
    <section className="relative w-full py-12 pb-0 px-4 hidden md:flex flex-col items-start justify-start">
      <div>
        <h2 className="bricolage-grotesque-black uppercase text-white text-3xl md:text-5xl lg:text-8xl">
          Fullstack
        </h2>
        <h2 className="bricolage-grotesque-black uppercase text-[#897F7F] text-3xl md:text-5xl lg:text-8xl">
          & MERN STACK
        </h2>
        <h1 className="bricolage-grotesque-black uppercase text-orange text-3xl md:text-5xl lg:text-8xl">
          DEVELOPER
        </h1>
      </div>

      {/* Description */}
      <p className="mt-6 md:mt-8 bricolage-grotesque-regular text-[#897F7F] text-base md:text-lg max-w-2xl">
        I bring hands-on experience in both front-end and back-end development,
        and I’m continually driven to explore new technologies and sharpen my
        skills.
      </p>
    </section>
  );
};

export default Intro;
