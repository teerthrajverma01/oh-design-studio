import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import home1 from "@/assets/mobileImage/home1.png";
import home2 from "@/assets/mobileImage/home2.png";
import home3 from "@/assets/mobileImage/home3.png";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla h-screen relative">
      <div
        className="embla__viewport pt-[9vh] pb-[5vh] h-[86vh]"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide flex justify-center items-center h-full">
            <Image className="h-full w-full" src={home1} alt="home1 Image" />
          </div>
          <div className="embla__slide flex justify-center items-center h-full">
            <Image className="h-full w-full" src={home2} alt="home1 Image" />
          </div>
          <div className="embla__slide flex justify-center items-center h-full">
            <Image className="h-full w-full" src={home3} alt="home1 Image" />
          </div>
        </div>
      </div>

      <div className="embla__dots absolute bottom-[9.5vh] right-[4.5vw] flex gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot h-3 w-3 rounded-full border-0 ".concat(
              index === selectedIndex
                ? " embla__dot--selected bg-gray-200 "
                : "bg-textGray"
            )}
          />
        ))}
      </div>
    </div>
  );
}
