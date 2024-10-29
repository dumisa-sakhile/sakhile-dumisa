
const History = () => {
  return (
    <>
      <br />
      <br />
      <h1 className="oswald  uppercase text-2xl md:text-8xl md:w-[60%] text-white">
        Background
      </h1>
      <br />
      <ol className="relative border-s border-gray-200 border-[#998f8fdf]">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-[#998f8fdf] "></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#998f8fdf]">
            June 2020
          </time>
          <h3 className="text-lg font-semibold text-white">
            Beginning of the Journey
          </h3>
          <p className="mb-4 text-base font-normal text-[#998f8fdf]  w-1/2">
            I started my journey as a Web Developer. It was during my high
            school days in the 11th grade.
          </p>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#998f8fdf]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#998f8fdf]">
            January 2021
          </time>
          <h3 className="text-lg font-semibold text-white">
            Intro to JavaScript
          </h3>
          <p className="text-base font-normal text-[#998f8fdf] ">
            JavaScript became my first programming language. I was a high school
            senior during that time.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-[#998f8fdf] "></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#998f8fdf]">
            December 2021
          </time>
          <h3 className="text-lg font-semibold text-white">Matriculated</h3>
          <p className="mb-4 text-base font-normal text-[#998f8fdf]  w-1/2">
            I finished my high school senior year.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#998f8fdf]"></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#998f8fdf]">
            January 2023
          </time>
          <h3 className="text-lg font-semibold text-white">Varsity Student</h3>
          <p className="text-base font-normal text-[#998f8fdf] ">
            I became a full time student at the University of Pretoria, studying
            BIS Information Science.
          </p>
        </li>
        <br />
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#998f8fdf] "></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#998f8fdf]">
            September 2024
          </time>
          <h3 className="text-lg font-semibold text-white">
            MERN Stack Developer
          </h3>
          <p className="mb-4 text-base font-normal text-[#998f8fdf]  w-1/2">
            After completing backend development, I started learning MERN Stack
            Development.
          </p>
        </li>
      </ol>
      <br />
      <br />
    </>
  );
};

export default History;
