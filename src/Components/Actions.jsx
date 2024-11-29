import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Actions = () => {
  return (
    <div className="hidden fixed bottom-10 right-10  w-[200px] min-h-[200px] md:flex flex-col items-center justify-end space-y-4">
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

      <Tippy content="Email me">
        <a
          href="mailto:dumisa.message@outlook.com"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded">
          Email me
        </a>
      </Tippy>
    </div>
  );
};

export default Actions;
