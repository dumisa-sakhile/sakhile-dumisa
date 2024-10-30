import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init();

const Timeline = () => {
  return (
    <div
      data-aos="fade-up" className="grid grid-cols-3 items-start flex-wrap justify-center md:w-[30%]">
      <main>
        <h1 className="text-8xl oswald">+2</h1>
        <p className="text-sm inter-regular text-[#998F8F]">
          Year Student at Tuks
        </p>
      </main>

      <main>
        <h1 className="text-8xl oswald">+3</h1>
        <p className="text-sm inter-regular text-[#998F8F]">
          Projects completed
        </p>
      </main>

      <main>
        <h1 className="text-8xl oswald">+4</h1>
        <p className="text-sm inter-regular text-[#998F8F]">
          Year of Experience in web Development
        </p>
      </main>
    </div>
  );
};

export default Timeline;
