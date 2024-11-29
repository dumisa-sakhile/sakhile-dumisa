import Experience from "./Experience";
import ContactForm from "./ContactForm";
import Intro from "./Intro";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Content = () => {
  return (
    <div className="md:fixed w-full h-full overflow-y-auto p-10 pt-24">
      <Intro />
      <br />
      <br />
      <br />
      <br />
      <Timeline />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Skills />

      <br />
      <br />
      <ContactForm />
      <br />
      <br />
      <p className="text-sm inter-light text-white text-center w-full md:w-[25%] ">
        Design inspired by &nbsp;
        <a
          href="https://x.com/Mejed_k"
          target="_blank"
          className="text-orange-600 cursor-pointer">
          Mejed Alkoutaini
        </a>
      </p>
      <br /><br />
    </div>
  );
}

export default Content