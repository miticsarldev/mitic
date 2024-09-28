"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeroTypeText from "./HeroTypeText";
import Link from "next/link";

const Hero = () => {
  const [clip, setClip] = useState(0);
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setClip(scrollTop * 0.01);
      const shrinkValue = Math.max(1 - scrollTop * 0.0005, 0.5);
      setScroll(shrinkValue);
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className="container flex items-center mx-[50px] px-8 pt-[130px] pb-[60px] relative z-[1] left-0 right-0 top-0 w-auto overflow-hidden h-screen"
      style={{ clipPath: `inset(0% ${clip}%)` }}
    >
      <div className="background z-[-1]">
        {Array.from({ length: 40 }, (_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div
        className={`flex flex-col md:flex-row items-center w-full relative mx-auto transition-transform duration-300`}
        style={{ transform: `scale(${scroll})` }}
      >
        <div className="md:w-1/2">
          <h1 className="flex flex-col w-full font-black leading-[1.5] mb-6 text-mitic-5">
            <div className="text-[calc(min(9vh,6.5625em))]">
              L&apos;agence qui va
            </div>
            <div className="text-[calc(min(8vh,5.9375em))]">vous faire</div>
            <HeroTypeText />
            <span className="relative">
              <span className="absolute bottom-1 left-0 w-full h-2 bg-black"></span>
            </span>
          </h1>
          <Link
            href="/"
            className="bg-white text-xl hover:bg-mitic-2 hover:border-4 hover:border-mitic-5 hover:text-white hover:py-3 transition-all duration-300 text-black px-6 py-2 border border-black font-bold relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-6 before:content-[''] before:w-10 before:h-2 before:bg-mitic-5 before:transition-all before:duration-300 before:ease-in-out before:hover:w-10 before:hover:-right-10"
          >
            C&apos;EST PARTI !
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/images/futuristic-image-1-rm.png"
            alt="Futuristic person"
            className="w-full max-w-md mx-auto animate-blinkPattern scale-x-[-1]"
            width={0}
            height={0}
            unoptimized
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
