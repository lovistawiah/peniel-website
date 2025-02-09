"use client";
import HeaderText from "./HeaderText";
import AnimatedCarousel from "./Carousel";
import { RiArrowDropRightLine } from "react-icons/ri";

const AllEvents = () => {
  return (
    <section className="text-center flex flex-col items-center h-fit my-3 overflow-hidden">
      <HeaderText />

      <div className="flex justify-center my-4 w-full">
        <AnimatedCarousel />
      </div>

      <button className="cursor-pointer flex justify-center items-center h-fit w-fit py-[9px] px-[15px] bg-white text-black rounded-[10px] text-lg font-semibold border border-gray-500">
        All Events{""}
        <span className="w-fit h-fit text-3xl">
          <RiArrowDropRightLine />
        </span>
      </button>
    </section>
  );
};

export default AllEvents;
