
const Experience = () => {
  return (
    <>
      <h1 className="protest-guerrilla-regular  uppercase text-8xl w-[60%] text-[#998f8fdf]">
        Projects
      </h1><br /><br />
      <div className=" flex items-start justify-start gap-4 w-[50%]">
        <a
          href="#"
          className="bg-[#F46C38] hover:bg-[#ca5020] w-[300px] h-[200px] rounded-lg p-10 space-y-8">
          <p className="flex justify-start items-center text-black protest-guerrilla-regular uppercase text-lg">
            COMING SOON
          </p>

          <p className="p-10  rounded-sm w-full flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </p>
        </a>

        <a
          href="https://cinema-vibes.vercel.app"
          target="_blank"
          className="bg-[#C5FF41] hover:bg-[#6f9c05] w-[300px] h-[200px] rounded-lg p-10 space-y-8">
          <p className="flex justify-start items-center text-black protest-guerrilla-regular uppercase text-lg">
            CINEMA VIBES
          </p>

          <p className="p-10  rounded-sm w-full flex items-center justify-center animate-bounce">
            <svg
              className="w-6 h-6 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </p>
        </a>
      </div>
    </>
  );
}

export default Experience