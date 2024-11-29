import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Skills = () => {
  return (
    <>
      <h1 className="oswald  uppercase text-8xl w-[60%] text-[#998f8fdf]">
        Tech Stack
      </h1>
      <br />
      <p>These are the technologies I have experience with.</p>
      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">Basics / Fundamentals</p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[rgba(11,8,8,0.88)]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/*html*/}
        <Tippy content="HTML">
          <a
            href="https://www.w3.org/html/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/353884/html-5.svg"
              alt="html"
              className="w-10 "
            />
          </a>
        </Tippy>

        {/*css */}
        <Tippy content="CSS">
          <a
            href="https://www.w3.org/Style/CSS/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/452185/css-3.svg"
              alt="css"
              className="w-10"
            />
          </a>
        </Tippy>
       
      </div>
      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">Programming Languages</p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[rgba(11,8,8,0.88)]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/* javascript */}
        <Tippy content="JavaScript">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/349419/javascript.svg"
              alt="javascript"
              className="w-10"
            />
          </a>
        </Tippy>
        {/* typescript */}
        <Tippy content="TypeScript">
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/349540/typescript.svg"
              alt="typescript"
              className="w-10"
            />
          </a>
        </Tippy>
      </div>
      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">FrontEnd Development:</p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[#0b0808df]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/* react */}
        <Tippy content="React.js">
          <a
            href="https://reactjs.org/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/355190/reactjs.svg"
              alt="react"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* tailwind */}
        <Tippy content="TailwindCSS">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
              alt="tailwind"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* sass */}
        <Tippy content="Syntactically Awesome Style Sheets">
          <a
            href="https://sass-lang.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/374061/sass.svg"
              alt="sass"
              className="w-10"
            />
          </a>
        </Tippy>
      </div>

      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">Backend Development:</p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[#0b0808df]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/* node */}
        <Tippy content="Node.js">
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg"
              alt="node"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* express */}
        <Tippy content="Express.js">
          <a
            href="https://expressjs.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/376367/express.svg"
              alt="express"
              className="w-10"
            />
          </a>
        </Tippy>
      </div>

      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">Databases:</p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[#0b0808df]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/* mongodb */}
        <Tippy content="MongoDB">
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/439231/mongodb.svg"
              alt="mongodb"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* sql */}
        <Tippy content="SQL">
          <a
            href="https://www.w3schools.com/sql/sql_intro.asp"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
              alt="sql"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* mysql */}
        <Tippy content="MySQL">
          <a
            href="https://www.mysql.com/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
              alt="mysql"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* postgres */}
        <Tippy content="PostgreSQL">
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/354200/postgresql.svg"
              alt="postgres"
              className="w-10"
            />
          </a>
        </Tippy>

        {/* sqlite */}
        <Tippy content="SQLite">
          <a
            href="https://www.sqlite.org/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://www.svgrepo.com/show/354381/sqlite.svg"
              alt="sqlite"
              className="w-10"
            />
          </a>
        </Tippy>
      </div>

      <br />

      <p className="text-[#998F8F] text-lg md:w-[40%]">
        FullStack Development:
      </p>
      <br />
      <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[#0b0808df]  *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
        {/* next */}
        <Tippy content="Next.js">
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="hover:scale-105">
            <img
              src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
              alt="next"
              className="w-10"
            />
          </a>
        </Tippy>
      </div>
      <br />
      <br />
    </>
  );
};

export default Skills;
