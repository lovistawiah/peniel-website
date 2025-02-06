import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-screen">
<Image src="/banner.png" width={200} height={200} alt="My year of the Holy Spirit" className="w-full h-full object-cover"/>
   </div>
  );
}
