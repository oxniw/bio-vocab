"use client";
import Image from "next/image";
import "./fade-in.css"
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const plays = () => {
    router.push("/game")
  }
  const learn =() => {
    router.push("/learn")
  }
  useEffect(() => {
    
  })
  return (
    <div className="w-full relative bg-black justify-center items-center flex h-screen overflow-hidden">
      <Image
      className="absolute top-24 -left-36 rotate-45"
      src="/com/cysphere.svg"
      alt="Next.js logo"
      width={612/2 }
      height={408/2 }
      priority
      />
      <Image
      className="absolute top-24 -right-10 rotate-45 scale-75"
      src="/com/cysphere.svg"
      alt="Next.js logo"
      width={612/2 }
      height={408/2 }
      priority
      />
      <Image
      className="absolute bottom-0 left-0 "
      src="/com/cyd3.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      <Image
      className="absolute bottom-0 right-0 "
      src="/com/cy2d.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      <Image
      className="absolute scale-125"
      src="/com/cy4d.svg"
      alt="Next.js logo"
      width={343 }
      height={411 }
      priority
      />
      <div className="w-full relative  justify-center items-center flex">
        <div className="w-full max-w-xl grid grid-rows-2 p-4">
          {/*playa*/}
          <div 
          onClick={plays}
          className="text-black text-center  w-full rounded-xl p-4  grid grid-cols-5 group cursor-pointer gruop fade-in1">
            <Image
              className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
              src="/fontplay/p.svg"
              alt="Next.js logo"
              width={153}
              height={408 / 4}
              priority
            />
            <Image
              className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
              src="/fontplay/l.svg"
              alt="Next.js logo"
              width={612 / 1}
              height={408 / 1}
              priority
            />
            <Image
              className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
              src="/fontplay/a.svg"
              alt="Next.js logo"
              width={612 / 1}
              height={408 / 1}
              priority
            />
            <Image
              className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
              src="/fontplay/y.svg"
              alt="Next.js logo"
              width={612 / 1}
              height={408 / 1}
              priority
            />
          </div>
          {/*learn*/}
          <div 
          onPlay={learn}
          className="text-black text-center  w-full rounded-xl p-4  grid grid-cols-5 group cursor-pointer fade-in2">
          <Image
            className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
            src="/fontplay/l.svg"
            alt="Next.js logo"
            width={153}
            height={408 / 4}
            priority
          />
          <Image
            className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
            src="/fontplay/e.svg"
            alt="Next.js logo"
            width={612 / 1}
            height={408 / 1}
            priority
          />
          <Image
            className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
            src="/fontplay/a.svg"
            alt="Next.js logo"
            width={612 / 1}
            height={408 / 1}
            priority
          />
          <Image
            className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
            src="/fontplay/r.svg"
            alt="Next.js logo"
            width={612 / 1}
            height={408 / 1}
            priority
          />
          <Image
            className="transition duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
            src="/fontplay/n.svg"
            alt="Next.js logo"
            width={612 / 1}
            height={408 / 1}
            priority
          />
        </div>
        </div>
      </div>
      <div className="w-full absolute top-0 object-cover flex justify-center">
        {/*biogame*/}
        <div className="grid grid-cols-7 p-8 w-full max-w-3xl top-0 object-cover ">
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/b.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/i.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/o.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/g.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/a.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/m.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />
        <Image
          className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
          src="/biogame/e.svg"
          alt="Next.js logo"
          width={612 }
          height={408 }
          priority
        />

        </div>
        <div className=" w-full max-w-[76px] top-5 right-0 object-cover">
          <Image
              className="transition duration-300 hover:filter hover:drop-shadow-[0_0_8px_rgb(0,255,0)]"
              src="/infomation.svg"
              alt="Next.js logo"
              width={612 }
              height={408 }
              priority
            />
        </div>
        </div>
        
        
    </div>
  );
}
