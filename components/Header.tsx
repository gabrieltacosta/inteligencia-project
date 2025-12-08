import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href={"/"}>
      <div className="grid grid-cols-3 p-3">
        <div className="grid col-span-1">
          <Image src={"/logo.png"} alt="Logo" width={300} height={190} />
        </div>
        <div className="grid col-span-2 items-center justify-center">
          <h1 className="text-xl lg:text-5xl font-bold">
            6º BPRv - Inteligência
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Header;
