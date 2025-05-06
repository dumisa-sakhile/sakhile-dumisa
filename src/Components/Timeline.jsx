


const Timeline = () => {
  return (
    <div className="grid grid-cols-3 items-start flex-wrap justify-center md:w-[30%]">
      <main>
        <h1 className="text-8xl oswald">+3</h1>
        <p className="text-sm roboto-condensed-regular text-[#998F8F]">
          Year Student at the University of Pretoria
        </p>
      </main>

      <main>
        <h1 className="text-8xl oswald">+17</h1>
        <p className="text-sm roboto-condensed-regular text-[#998F8F]">
          Projects completed
        </p>
      </main>

      <main>
        <h1 className="text-8xl oswald">+{new Date().getFullYear() - 2020}</h1>
        <p className="text-sm roboto-condensed-regular text-[#998F8F]">
          Year of Experience in web Development
        </p>
      </main>
    </div>
  );
};

export default Timeline;
