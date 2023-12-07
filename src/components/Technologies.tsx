import { useEffect, useState } from "react";
import {
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiPnpm,
  SiTailwindcss,
  SiGit,
  SiRedis,
  SiPostgresql,
  SiVisualstudiocode,
  SiNextdotjs,
  SiAstro,
} from "react-icons/si/index";
import * as Tooltip from "@radix-ui/react-tooltip";

const initialData = [
  { name: "Code", icon: SiVisualstudiocode },
  { name: "Git", icon: SiGit },
  { name: "Typescript", icon: SiTypescript, ghtopic: "typescript", repos: [] },
  { name: "Node.js", icon: SiNodedotjs, ghtopic: "nodejs", repos: [] },
  { name: "Docker", icon: SiDocker, ghtopic: "docker", repos: [] },
  { name: "React", icon: SiReact, ghtopic: "reactjs", repos: [] },
  { name: "Next.js", icon: SiNextdotjs, ghtopic: "nextjs", repos: [] },
  { name: "Astro", icon: SiAstro, ghtopic: "astro", repos: [] },
  { name: "pnpm", icon: SiPnpm, ghtopic: "pnpm", repos: [] },
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
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="flex items-center justify-center">
            <item.icon className="h-8 w-8" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="animate-slideUpAndFade rounded-md border border-white/30 bg-neutral-900 text-sm shadow"
            sideOffset={10}
          >
            <h3 className="px-3 py-1 text-lg font-bold">{item.name}</h3>
            <hr className="border-white/30" />
            <div className="px-3 pb-3 pt-1">
              {item.repos ? (
                item.repos.length > 0 ? (
                  <ul className="space-y-1">
                    {item.repos.map((repo, i) => (
                      <li key={i}>
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
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
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
    <div className="grid h-full grid-cols-4 gap-5 rounded-3xl border border-white/10 bg-white/5 p-5">
      {data.map((item, i) => (
        <Technology key={i} item={item} />
      ))}
    </div>
  );
}
