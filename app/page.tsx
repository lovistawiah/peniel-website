import AllEvents from "@/components/AllEvents";
import Image from "next/image";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <div className="w-full relative h-[80%]">
        <Image
          src="/banner.png"
          width={500}
          height={400}
          alt="My year of the Holy Spirit"
          className="w-full brightness-50 h-full object-cover"
        />
      </div>
      <AllEvents />
    </section>
  );
}
