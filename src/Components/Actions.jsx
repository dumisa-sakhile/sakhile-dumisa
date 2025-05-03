import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Actions = () => {
  return (
    <div
      className="hidden fixed bottom-10 right-10  w-[200px] min-h-[200px] md:flex flex-col items-center justify-end space-y-4"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-duration="3000">
      <Tippy content="See my project">
        <a
          href="https://cinema-land.vercel.app"
          target="_blank"
          className="bg-[#C5FF41] hover:bg-[#6f9c05] text-black font-bold py-2 px-4 rounded">
          Cinema Land
        </a>
      </Tippy>

      <Tippy content="Check out my Github">
        <a
          href="https://github.com/dumisa-sakhile"
          target="_blank"
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-10 rounded">
          Github
        </a>
      </Tippy>

      <Tippy content="LinkedIn Profile">
        <a
          href="https://www.linkedin.com/in/sakhile-dumisa/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-8 rounded">
          LinkedIn
        </a>
      </Tippy>
    </div>
  );
};

export default Actions;
