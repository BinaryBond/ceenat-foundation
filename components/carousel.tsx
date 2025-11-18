"use client";

import { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollPosition(); // initial state
    el.addEventListener("scroll", checkScrollPosition);

    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const handlePrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex flex-col gap-6">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="
          flex gap-5 overflow-x-auto scroll-smooth
          snap-x snap-mandatory pb-4 xl:max-w-6xl xl:mx-auto
          scrollbar-hide
        "
      >
        {children}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-8">
        {/* LEFT Button */}
        <button
          onClick={handlePrev}
          disabled={atStart}
          className={`
            transition duration-300
            ${
              atStart
                ? "text-gray-5 cursor-not-allowed"
                : "text-gray-11 hover:scale-105 hover:text-green-8 cursor-pointer transition-all duration-300 ease-in-out"
            }
          `}
        >
          <HiChevronLeft className="w-10 h-10" />
        </button>

        {/* RIGHT Button */}
        <button
          onClick={handleNext}
          disabled={atEnd}
          className={`
            transition duration-300
            ${
              atEnd
                ? "text-gray-5 cursor-not-allowed"
                : "text-gray-11 hover:scale-105 hover:text-green-8 cursor-pointer transition-all duration-300 ease-in-out"
            }
          `}
        >
          <HiChevronRight className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
