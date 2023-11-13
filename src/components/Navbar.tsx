import Socials from "./Socials";

const links = ["/"];

function Item(props: { link: string }) {
  return (
    <a href={props.link} className="rounded-xl p-2 hover:underline">
      {props.link}
    </a>
  );
}

export default function Navbar() {
  return (
    <div className="flex w-full pb-8 pl-6 pr-6 pt-8 text-white">
      <div className="w-full space-x-6">
        {links.map((link) => (
          <Item link={link} key={link} />
        ))}
      </div>

      <div className="flex items-end">
        <Socials />
      </div>
    </div>
  );
}
