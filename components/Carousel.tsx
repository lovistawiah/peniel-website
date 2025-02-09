import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { catPictures } from "@/constants";
import Image from "next/image";

const AnimatedCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[80%] max-h-[400px] min-h-[200px]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {catPictures.map((pic, index) => (
          <CarouselItem key={index}>
            <Image
              src={pic}
              alt="cat"
              width={200}
              height={200}
              quality={100}
              className=" w-full h-full object-fill rounded"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AnimatedCarousel;
