
const Skills = () => {
  return (
    <>
      <h1 className="protest-guerrilla-regular  uppercase text-8xl w-[60%] text-[#998f8fdf]">
        Tech Stack
      </h1>

      <br />

      <div className="w-[40%] flex items-start justify-start flex-wrap gap-6 *:bg-[#0b0808df] *:p-4 *:rounded-full">
        {/* html */}
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/353884/html-5.svg"
            alt="html"
            className="w-8"
          />
        </a>

        {/* css */}
        <a
          href="https://www.w3.org/Style/CSS/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/452185/css-3.svg"
            alt="css"
            className="w-8"
          />
        </a>

        {/* javascript */}
        <a
          href="https://www.javascript.com/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/349419/javascript.svg"
            alt="javascript"
            className="w-8"
          />
        </a>

        {/* react */}
        <a
          href="https://reactjs.org/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/355190/reactjs.svg"
            alt="react"
            className="w-8"
          />
        </a>

        {/* node */}
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg"
            alt="node"
            className="w-8"
          />
        </a>

        {/* mongodb */}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            alt="mongodb"
            className="w-8"
          />
        </a>

        {/* express */}
        <a
          href="https://expressjs.com/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/376367/express.svg"
            alt="express"
            className="w-8"
          />
        </a>

        {/* tailwind */}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
            alt="tailwind"
            className="w-8"
          />
        </a>

        {/* sass */}
        <a
          href="https://sass-lang.com/"
          target="_blank"
          >
          <img
            src="https://www.svgrepo.com/show/374061/sass.svg"
            alt="sass"
            className="w-8"
          />
        </a>
      </div>

      <br />
      <br />
    </>
  );
}

export default Skills