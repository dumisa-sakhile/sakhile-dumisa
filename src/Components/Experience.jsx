import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Experience = () => {
  return (
    <div data-aos="fade-up">
      <h1 className="oswald  uppercase text-2xl md:text-8xl w-[60%] text-[#998f8fdf]">
        Projects
      </h1>
      <br />
      <br />
      <div className=" flex items-start justify-start gap-4 w-full md:w-[50%]">
        <div className="flex rounded-lg border border-[#9bd70e] bg-[#C5FF41] flex-col max-w-sm">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <h5 className="text-2xl font-bold tracking-tight text-black">
              Cinema Vibes
            </h5>
            <p className="font-normal text-black text-sm">
              Experience the ultimate cinematic journey with Cinema Vibes. Get
              hooked on our expertly curated movie recommendations, featuring
              similar titles, captivating summaries, and thrilling trailers.
              Find your new favorite film and vibe with the community of movie
              lovers!
            </p>
            <a
              href="https://cinema-vibes.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full">
              <button
                type="button"
                className="group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none border border-transparent bg-black text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-slate-800 rounded-lg">
                <span className="flex items-stretch transition-all duration-200 rounded-md px-4 py-2 text-sm">
                  Visit Website
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="text-white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
