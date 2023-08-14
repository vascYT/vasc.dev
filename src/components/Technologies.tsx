import { useEffect, useState } from "react";
import {
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiYarn,
  SiTailwindcss,
  SiGit,
  SiRedis,
  SiPostgresql,
  SiVisualstudiocode,
  SiNextdotjs,
  SiAstro,
} from "react-icons/si/index";
import { IoIosArrowDown } from "react-icons/io/index";
import { motion } from "framer-motion";

const initialData = [
  { name: "Code", icon: SiVisualstudiocode },
  { name: "Git", icon: SiGit },
  { name: "Typescript", icon: SiTypescript, ghtopic: "typescript", repos: [] },
  { name: "Node.js", icon: SiNodedotjs, ghtopic: "nodejs", repos: [] },
  { name: "Docker", icon: SiDocker, ghtopic: "docker", repos: [] },
  { name: "React.js", icon: SiReact, ghtopic: "reactjs", repos: [] },
  { name: "Next.js", icon: SiNextdotjs, ghtopic: "nextjs", repos: [] },
  { name: "Astro", icon: SiAstro, ghtopic: "astro", repos: [] },
  { name: "Yarn", icon: SiYarn, ghtopic: "yarn", repos: [] },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    ghtopic: "tailwindcss",
    repos: [],
  },
  { name: "Redis", icon: SiRedis, ghtopic: "redis", repos: [] },
  { name: "Postgres", icon: SiPostgresql, ghtopic: "postgresql", repos: [] },
];

function Technology({ item }: { item: (typeof initialData)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="w-full overflow-hidden rounded-md border border-white/20 bg-white/10 shadow"
      initial={{ height: "41px" }}
      animate={{ height: open ? "auto" : "41px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 225,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 px-3 py-2">
          <item.icon className="h-5 w-5" />
          <p>{item.name}</p>
        </div>
        <button
          className="mr-1 rounded-full p-1 hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </button>
      </div>

      <div className="border-t border-t-white/20 p-3 text-sm">
        {item.repos ? (
          item.repos.length > 0 ? (
            <ul className="space-y-1">
              {item.repos.map((repo) => (
                <li>
                  <a
                    className="text-yellow-400 underline underline-offset-4"
                    href={`https://github.com/${repo}`}
                    target="_blank"
                  >
                    {repo}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Used in private/closed source projects.</p>
          )
        ) : (
          <p>Used in every project.</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    fetch("https://api.github.com/users/vascyt/repos").then((res) =>
      res.json().then((json) => {
        let newData = data;
        for (var i = 0; i < newData.length; i++) {
          const ghtopic = newData[i].ghtopic;
          if (ghtopic) {
            const repos = json
              .filter((repo: any) => repo.topics.includes(ghtopic))
              .map((repo: any) => repo.full_name);
            newData[i] = { ...newData[i], repos };
          }
        }
        setData([...newData]);
      }),
    );
  }, []);

  return (
    <div className="mt-3 grid gap-3 md:grid-cols-4">
      {data.map((item, i) => (
        <Technology key={i} item={item} />
      ))}
    </div>
  );
}
