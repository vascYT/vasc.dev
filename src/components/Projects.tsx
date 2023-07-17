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
      className="bg-white/10 border border-white/20 rounded-md w-full shadow overflow-hidden"
    >
      <img
        src={props.thumbnail}
        alt={`${props.title} thumbnail`}
        className="w-full h-[128px] object-cover object-top rounded-t-md"
      />
      <div className="flex items-center px-4">
        <div className="w-full">
          <div className="flex items-center space-x-3 h-[50px]">
            <h1 className="text-lg font-medium">{props.title}</h1>
          </div>
        </div>
        <button
          className="hover:bg-white/10 p-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </button>
      </div>
      <div className="mb-3 border-t border-white/20 px-4">
        <p className="text-gray-300 mt-3">{props.description}</p>
        <div className="flex flex-row items-center space-x-2">
          {props.buttons.map((button, i) => (
            <a
              key={i}
              className="flex items-center w-fit space-x-1 bg-white bg-opacity-20 rounded-full px-5 py-2 text-sm mt-3 transition-transform hover:scale-[102%]"
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
      <div className="grid md:grid-cols-2 gap-4">
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
