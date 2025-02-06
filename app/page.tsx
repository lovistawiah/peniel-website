import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        src="/banner.png"
        width={500}
        height={400}
        alt="My year of the Holy Spirit"
        className="w-full h-screen object-cover"
      />
    </div>
  );
}
