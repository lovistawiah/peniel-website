import Link from "next/link";
import { IconType } from "react-icons";
const NavItem = ({
  id,
  title,
  href,
}: //   Icon,
{
  id: number;
  title: string;
  href: string;
  Icon: IconType;
}) => {
  return (
    <li
      className={`w-full md:w-[120px] md:fit h-[90px] hover:bg-zinc-800 rounded-lg p-1 md:text-black md:hover:bg-transparent md:rounded-lg md:p-2 flex items-center justify-center `}
    >
      <Link
        id={`${id}`}
        href={href}
        passHref
        className={`flex flex-col items-center justify-center gap-1 md:bg-transparent md:hover:rounded-[12px] md:hover:border md:hover:border-zinc-900  md:text-white md:hover:bg-zinc-900 md:w-full md:p-2 ${
          id == 5
            ? "md:bg-[#FBA518] md:hover:rounded-[12px]md:hover:border-zinc-900 md:rounded-[12px] md:hover:border md:text-white"
            : ""
        }`}
      >
        {/* <Icon className="w-12 hidden md:block h-10" /> */}
        <div className="text-3xl md:text-base font-semibold ">{title}</div>
      </Link>
    </li>
  );
};

export default NavItem;
