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
} from "react-icons/si";
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

  const toggleOpen = () => setOpen((current) => !current);

  return (
    <motion.div
      className="bg-white/10 border border-white/20 rounded-md w-full shadow overflow-hidden"
      onMouseEnter={toggleOpen}
      onMouseLeave={toggleOpen}
      onTouchEnd={toggleOpen}
      initial={{ height: "41px" }}
      animate={{ height: open ? "auto" : "41px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 225,
      }}
    >
      <div className="flex items-center space-x-2 px-3 py-2">
        <item.icon className="w-5 h-5" />
        <p>{item.name}</p>
      </div>
      <div className="border-t border-t-white/20 p-3 text-sm">
        {item.repos ? (
          item.repos.length > 0 ? (
            <ul>
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
            <p>Not used in any public project.</p>
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
      })
    );
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-3 mt-3">
      {data.map((item, i) => (
        <Technology key={i} item={item} />
      ))}
    </div>
  );
}
