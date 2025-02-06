"use client";
import { SIDEBARLIST } from "@/constants/index";
import NavItem from "./NavItem";
import Image from "next/image";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useNavigationToggle } from "@/hooks/useNavigationToggle";
import { useWindowWidth } from "@/hooks/useWindowsResize";
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
import Link from "next/link";
const iconClass = "w-9 h-9 text-stone-400 hover:text-white";
const NavBar = () => {
  const { isOpen, handleClick } = useNavigationToggle();
  const width = useWindowWidth();

  return (
    <section
      className={`${
        !isOpen ? "bg-black md:bg-transparent" : ""
      } top-0 left-0 h-full md:h-[95%] right-0 bottom-0 flex flex-col md:flex-row absolute  md:justify-between md:mx-2 md:my-2`}
    >
      <section className=" flex justify-between p-2 mt-4 md:mt-0 md:w-fit md:h-fit">
        <Link href="/" passHref className="md:w-[76px] md:mt-3 md:h-[76px]">
          <Image
            src="/PHMLogo.png"
            width={100}
            height={100}
            alt="Peniel House Ministries International"
            className="md:w-full w-[52px] h-[52px] md:h-full object-contain md:mr-2"
          />
        </Link>
        {isOpen ? (
          <MdOutlineMenu
            onClick={handleClick}
            className="md:hidden w-[48px] h-[48px]"
          />
        ) : (
          <MdClose
            onClick={handleClick}
            className="md:hidden w-[48px] h-[48px]"
          />
        )}
      </section>
      {!isOpen || width > 767 ? (
        <nav className="text-center p-[4px] md:mt-3 w-full md:w-fit md:h-fit  bg-black md:bg-transparent">
          <ul className=" justify-evenly md:justify-end items-center h-fit flex flex-col md:flex-row">
            {SIDEBARLIST.map((navItem) => (
              <NavItem
                key={navItem.id}
                id={navItem.id}
                title={navItem.title}
                Icon={navItem.icon}
                href={navItem.href}
              />
            ))}
          </ul>
        </nav>
      ) : null}
      {!isOpen || width > 767 ? (
        <section className="mt-5  md:w-fit w-full h-fit flex absolute bottom-0 right-6 justify-center items-center gap-7 p-1">
          <Link href="/" passHref>
            <LuFacebook className={iconClass} />
          </Link>
          <Link href="/" passHref>
            <LuYoutube className={iconClass} />
          </Link>
          <Link href="/" passHref>
            <LuTwitter className={iconClass} />
          </Link>
          <Link href="/" passHref>
            <LuInstagram className={iconClass} />
          </Link>
        </section>
      ) : null}
    </section>
  );
};
export default NavBar;
