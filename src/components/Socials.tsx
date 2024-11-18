import {
  SiGithub,
  SiBluesky,
  SiDiscord,
  SiX,
} from "@icons-pack/react-simple-icons";
import { AtSign } from "lucide-react";

const links = [
  {
    url: "https://github.com/vascyt",
    icon: SiGithub,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://bsky.app/profile/vasc.dev",
    icon: SiBluesky,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://x.com/vascyt",
    icon: SiX,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://discord.com/users/346977366569910274",
    icon: SiDiscord,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "mailto:nico@vasc.dev",
    icon: AtSign,
    newTab: false,
    rel: "noreferrer",
  },
];

export default function SocialGallery() {
  return (
    <>
      <div className="flex h-full gap-5">
        {links.map((link) => (
          <a
            href={link.url}
            className="transition-transform active:scale-95"
            target={link.newTab ? "_blank" : undefined}
            rel={link.rel}
            key={link.url}
          >
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </>
  );
}
