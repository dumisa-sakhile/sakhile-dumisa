import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Intro = () => {
  return (
    <>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase  text-8xl w-[60%] text-white">
        FullStack
      </h1>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase text-8xl w-[60%] text-[#998f8fdf]">
        & MERN Stack
      </h1>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase  text-8xl w-[60%] text-white">
        Developer
      </h1>

      <p
        data-aos="fade-up"
        className="text-[#998F8F] text-lg md:w-[40%] inter-regular">
        Passionate about creating SPA (Single Page Applications) using the MERN
        (MongoDB, Express, React, Node) Stack & Next.js. Specializing with
        TailwindCSS and ReactJS on Frontend Development.
      </p>
    </>
  );
};

export default Intro;
