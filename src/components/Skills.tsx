import Tooltip from "./Tooltip";

const skills = [
  {
    category: "Basics / Fundamentals",
    items: [
      {
        name: "HTML",
        icon: "https://www.svgrepo.com/show/353884/html-5.svg",
        link: "https://www.w3.org/html/",
      },
      {
        name: "CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
        link: "https://www.w3.org/Style/CSS/",
      },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://www.svgrepo.com/show/349419/javascript.svg",
        link: "https://www.javascript.com/",
      },
      {
        name: "TypeScript",
        icon: "https://www.svgrepo.com/show/349540/typescript.svg",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      {
        name: "React.js",
        icon: "https://www.svgrepo.com/show/355190/reactjs.svg",
        link: "https://reactjs.org/",
      },
      {
        name: "TailwindCSS",
        icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
        link: "https://tailwindcss.com/",
      },
      {
        name: "Sass",
        icon: "https://www.svgrepo.com/show/374061/sass.svg",
        link: "https://sass-lang.com/",
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: "https://www.svgrepo.com/show/303658/nodejs-1-logo.svg",
        link: "https://nodejs.org/en/",
      },
      {
        name: "Express.js",
        icon: "https://www.svgrepo.com/show/376367/express.svg",
        link: "https://expressjs.com/",
      },
      {
        name: "Nest.js",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
        link: "https://nestjs.com/",
      },
    ],
  },
  {
    category: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: "https://www.svgrepo.com/show/439231/mongodb.svg",
        link: "https://www.mongodb.com/",
      },
      {
        name: "SQL",
        icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
        link: "https://www.w3schools.com/sql/sql_intro.asp",
      },
      {
        name: "SQLite",
        icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
        link: "https://www.sqlite.org/",
      },
    ],
  },
  {
    category: "FullStack Development",
    items: [
      {
        name: "Next.js",
        icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
        link: "https://nextjs.org/",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div>
      <h1 className="bricolage-grotesque-black uppercase text-8xl w-[60%] text-[#998f8fdf]">
        Tech <span className="text-white">Stack</span>
      </h1>
      <br />
      <p className="roboto-condensed-light">
        These are the technologies I have experience with.
      </p>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <p className="text-[#998F8F] text-lg md:w-[40%] roboto-condensed-light">
              {category}:
            </p>
            <br />
            <div className="md:w-[40%] flex gap-2 items-start justify-start flex-wrap md:gap-6 *:bg-[rgba(11,8,8,0.88)] *:p-4 *:rounded-lg *:ring-[1px] *:ring-[#353334]">
              {items.map(({ name, icon, link }) => (
                <Tooltip key={name} label={name}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105">
                    <img src={icon} alt={name.toLowerCase()} className="w-10" />
                  </a>
                </Tooltip>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
