
const Timeline = () => {
  return (
    <div className="grid grid-cols-3 items-start flex-wrap justify-center md:w-[30%]">
      <main>
        <h1 className="text-8xl protest-guerrilla-regular">+2</h1>
        <p className="text-sm roboto-condensed-medium text-[#998F8F] w-[50%]">
          Year Student at Tuks
        </p>
      </main>

      <main>
        <h1 className="text-8xl protest-guerrilla-regular">+3</h1>
        <p className="text-sm roboto-condensed-medium text-[#998F8F]">
          Projects completed
        </p>
      </main>

      <main>
        <h1 className="text-8xl protest-guerrilla-regular">+4</h1>
        <p className="text-sm roboto-condensed-medium text-[#998F8F]">
          Year of Experience in web Development
        </p>
      </main>
    </div>
  );
}

export default Timeline