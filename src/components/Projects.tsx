const Projects = () => {
  const projectList = [
    {
      name: "Trailer Base",
      description:
        "Trailer Base is a movie and TV trailer database that provides users with the latest trailers and information about their favorite movies and TV shows.",
      tech: [
        "React",
        "TailwindCSS",
        "Tanstack Router",
        "Tanstack Query",
        "Axios",
        "Firebase Auth",
        "Firestore",
        "Sonner",
        "YouTube API",
        "TMDB API",
      ],
      url: "https://trailer-base.vercel.app",
      color: {
        border: "border-purple-700",
        cardBg: "bg-purple-600",
      },
    },
    {
      name: "Cinema Land",
      description:
        "Discover your next favorite film! Cinema Land is your ultimate destination for movie reviews, ratings, and recommendations. Explore now!",
      tech: [
        "ReactJS",
        "TailwindCSS",
        "TypeScript",
        "Framer Motion",
        "React-router-dom",
        "React-helmet-async",
        "Tanstack Query",
        "Axios",
        "Shadcn-ui",
        "TMDB API",
        "YouTube API",
        "Clerk Auth",
      ],
      url: "https://cinema-land.vercel.app",
      color: {
        border: "border-orange-700",
        cardBg: "bg-orange-600",
      },
    },
    {
      name: "Cinema Vibes",
      description:
        "Experience the ultimate cinematic journey with Cinema Vibes. Get hooked on curated movie recommendations, summaries, trailers, and more.",
      tech: [
        "Vanilla JS",
        "TailwindCSS",
        "Axios",
        "TMDB API",
        "YouTube API",
        "Vite",
      ],
      url: "https://cinema-vibes.vercel.app",
      color: {
        border: "border-lime-500",
        cardBg: "bg-lime-400",
      },
    },
  ];

  return (
    <section className="text-white bricolage-grotesque-regular w-full">
      <h1 className="bricolage-grotesque-black uppercase text-4xl sm:text-6xl md:text-7xl mb-4 text-[#CCCCCC]">
        Projects
      </h1>

      <p className="text-[#999999] text-base md:text-lg max-w-xl mb-10 bricolage-grotesque-light">
        Please note that Trailer Base is the latest and upgraded version of both
        Cinema Land and Cinema Vibes. It combines the best features of both
        projects into a single platform. You can find the latest updates and
        improvements on
        <a
          href="https://trailer-base.vercel.app"
          target="_blank"
          className="text-white">
          {" "}
          Trailer Base
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`grid grid-rows-[auto_1fr_auto_auto] h-full rounded-xl border ${project.color.border} ${project.color.cardBg} p-6`}>
            <h2 className="bricolage-grotesque-black text-4xl text-black mb-2">
              {project.name}
            </h2>

            <p className="text-md roboto-condensed-regular text-black mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm roboto-condensed-regular bg-black text-white px-3 py-1 rounded-full shadow hover:bg-gray-700 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-auto">
              <button className="w-full bricolage-grotesque-medium bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2">
                Visit Website
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
