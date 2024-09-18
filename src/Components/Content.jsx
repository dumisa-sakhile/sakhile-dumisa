import Experience from "./Experience";
import History from "./History";
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
      <History />
      <br />
      <Skills />

      <br />
      <br />
      <p className="text-sm inria-sans-regular text-white">
        Design inspired by &nbsp;
        <a
          href="https://x.com/Mejed_k"
          target="_blank"
          className="text-orange-600 cursor-pointer">
          Mejed Alkoutaini
        </a>{" "}
        Framer&apos;s Template
      </p>
    </div>
  );
}

export default Content