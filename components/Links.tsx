import Image from "next/image";
import Link from "next/link";

interface linksProps {
  href: string;
  src: string;
  text: string;
  blank?: string;
}

const Links = ({ href, src, text, blank }: linksProps) => {
  return (
    <Link
      href={href}
      target={blank}
      className="flex flex-col justify-center items-start text-zinc-400 rounded-full text-sm lg:text-base uppercase px-2 py-1 transition-transform duration-300 ease-in-out hover:-translate-y-1"
    >
      <div className="flex gap-2 justify-center items-center hover:text-white">
        <Image src={src} alt="Icone dos links" width={25} height={25} />
        {text}
      </div>
    </Link>
  );
};

export default Links;
