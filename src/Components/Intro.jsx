import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Intro = () => {
  return (
    <>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase  text-2xl md:text-8xl w-[60%] text-white">
        MERN Stack
      </h1>
      <h1
        data-aos="fade-up"
        className="oswald  uppercase text-2xl md:text-8xl w-[60%] text-[#998f8fdf]">
        Developer
      </h1>

      <p data-aos="fade-up" className="text-[#998F8F] text-lg md:w-[40%] inter-regular">
        Passionate about creating SPA (Single Page Applications) using the MERN
        (MongoDB, Express, React, Node) Stack & Next.js. Specializing with TailwindCSS and
        ReactJS on Frontend Development. SQL,MySQL, Postgres, SQLite, MongoDB, Express and NodeJS on Backend.
      </p>
    </>
  );
};

export default Intro;
