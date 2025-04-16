import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative bg-black justify-center items-center flex">
      <div className="w-full relative bg-black justify-center items-center flex">
        <Image
        className=""
        src="/biogame/b.svg"
        alt="Next.js logo"
        width={1920}
        height={1080}
        priority/>
      </div>
      <Image
      className=""
      src="/com/cysphere.png"
      alt="Next.js logo"
      width={275}
      height={408}
      priority
      />
      <Image
      className=""
      src="/com/cysphere.png"
      alt="Next.js logo"
      width={275}
      height={408}
      priority
      />
      <Image
      className=""
      src="/com/cy4d.png"
      alt="Next.js logo"
      width={275}
      height={408}
      priority
      />

      <Image
      className=""
      src="/com/cy2d.png"
      alt="Next.js logo"
      width={343}
      height={411}
      priority
      />
      <Image
      className="absolute bottom-0 "
      src="/com/cyd3.png"
      alt="Next.js logo"
      width={343}
      height={411}
      priority
      />

      <Image
      className=""
      src="/com/cyhp.png"
      alt="Next.js logo"
      width={343}
      height={411}
      priority
      />
    </div>
  );
}
