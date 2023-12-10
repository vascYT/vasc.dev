import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaMastodon,
} from "react-icons/fa/index";

const links = [
  {
    url: "https://github.com/vascyt",
    icon: FaGithub,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://twitter.com/vascyt",
    icon: FaTwitter,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://discord.com/users/346977366569910274",
    icon: FaDiscord,
    newTab: true,
    rel: "noreferrer",
  },
  {
    url: "https://fosstodon.org/@vasc",
    icon: FaMastodon,
    newTab: true,
    rel: "me",
  },
  {
    url: "mailto:nico@vasc.dev",
    icon: FaEnvelope,
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
