import { FiExternalLink } from "react-icons/fi/index";

const projects = [
  {
    name: "PresenceDB",
    description:
      "Tracks the playtime of your Discord activities. Frontend built with Next.js, backend with Node.js and PostgreSQL.",
    thumbnail: "/assets/presencedb.png",
    color: "#080808",
    buttons: [
      { name: "Website", url: "https://presencedb.com/" },
      { name: "Twitter", url: "https://twitter.com/presence_db" },
    ],
  },
  {
    name: "VShop for Valorant",
    description:
      "A React Native app that shows the Valorant in-game shop. Archived due to copyright claims by Riot Games.",
    thumbnail: "/assets/vshop.png",
    color: "#fa4454",
    buttons: [
      { name: "Website", url: "https://vshop.one/" },
      { name: "GitHub", url: "https://github.com/VShopApp" },
    ],
  },
];

function Card({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="items-strech flex w-full flex-col justify-stretch overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow  sm:flex-row">
      <img
        src={project.thumbnail}
        alt={`${project.name} logo`}
        style={{ backgroundColor: project.color }}
        className="h-44 rounded-t-2xl object-contain object-center p-10 sm:h-auto sm:max-h-none sm:w-44 sm:rounded-l-2xl sm:rounded-t-none"
      />
      <div className="flex w-full flex-col justify-evenly p-4">
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <p className="mt-3 text-gray-100">{project.description}</p>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {project.buttons.map((button, i) => (
            <a
              key={i}
              className="mt-3 flex w-fit items-center space-x-1 rounded-full bg-white/20 px-5 py-2 text-sm transition-transform active:scale-95"
              href={button.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{button.name}</span>
              <FiExternalLink />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </div>
    </>
  );
}
