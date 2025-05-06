import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Intro from "./Intro";
import Skills from "./Skills";
import Timeline from "./Timeline";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Content = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="md:fixed w-full h-full overflow-y-auto p-10 pt-24">
      <Intro />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Skills />

      <br />
      <br />
      <ContactForm />
      <br />
      <br />
      <p className="text-sm roboto-condensed-regular text-white text-center w-full md:w-[25%] ">
        Design inspired by &nbsp;
        <a
          href="https://www.framer.com/@mejed-alkoutaini/"
          target="_blank"
          className="text-orange-600 cursor-pointer font-bold">
          Mejed Alkoutaini
        </a>
      </p>
      <br />
      <br />
    </div>
  );
}

export default Content