import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Card } from "flowbite-react";

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

        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cinema Vibes
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Experience the ultimate cinematic journey with Cinema Vibes. Get
            hooked on our expertly curated movie recommendations, featuring
            similar titles, captivating summaries, and thrilling trailers. Find
            your new favorite film and vibe with the community of movie lovers!
          </p>
          <a href="https://cinema-vibes.vercel.app" target="_blank" className="w-full">
            <Button>
              Visit Website
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </a>
        </Card>

       
      </div>
    </div>
  );
};

export default Experience;
