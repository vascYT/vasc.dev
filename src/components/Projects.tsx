import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi/index";
import { IoIosArrowDown } from "react-icons/io/index";

function Card(props: {
  title: string;
  description: string;
  thumbnail: string;
  buttons: {
    name: string;
    url: string;
  }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ height: "178px" }}
      animate={{ height: open ? "auto" : "178px" }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 225,
      }}
      className="w-full overflow-hidden rounded-md border border-white/20 bg-white/10 shadow"
    >
      <img
        src={props.thumbnail}
        alt={`${props.title} thumbnail`}
        className="h-[128px] w-full rounded-t-md object-cover object-top"
      />
      <div className="flex items-center px-4">
        <div className="w-full">
          <div className="flex h-[50px] items-center space-x-3">
            <h1 className="text-lg font-medium">{props.title}</h1>
          </div>
        </div>
        <button
          className="rounded-full p-2 hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </button>
      </div>
      <div className="mb-3 border-t border-white/20 px-4">
        <p className="mt-3 text-gray-300">{props.description}</p>
        <div className="flex flex-row items-center space-x-2">
          {props.buttons.map((button, i) => (
            <a
              key={i}
              className="mt-3 flex w-fit items-center space-x-1 rounded-full bg-white bg-opacity-20 px-5 py-2 text-sm transition-transform hover:scale-[102%]"
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
    </motion.div>
  );
}

const projects = [
  {
    name: "VShop for Valorant",
    description:
      "A React Native app that shows the Valorant in-game shop. Available for Android.",
    thumbnail: "/assets/vshop-banner.png",
    buttons: [
      { name: "Website", url: "https://vshop.one/" },
      { name: "GitHub", url: "https://github.com/VShopApp" },
    ],
  },
  {
    name: "PresenceDB",
    description: "Tracks your Discord activities via a Discord bot.",
    thumbnail: "/assets/presencedb-banner.jpg",
    buttons: [
      { name: "Website", url: "https://presencedb.com/" },
      { name: "Twitter", url: "https://twitter.com/presence_db" },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Card
            key={i}
            title={project.name}
            description={project.description}
            thumbnail={project.thumbnail}
            buttons={project.buttons}
          />
        ))}
      </div>
    </>
  );
}
