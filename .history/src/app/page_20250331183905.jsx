import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative bg-black">
      <div className="w-full h-full justify-center items-center flex">
      <Image
      className="dark:invert absolute "
      src="/com/cy4d.png"
      alt="Next.js logo"
      width={275}
      height={408}
      priority
      />
      <Image
      className="dark:invert absolute "
      src="/com/cy4d.png"
      alt="Next.js logo"
      width={275}
      height={408}
      priority
      />

      <Image
      className="dark:invert absolute "
      src="/com/cy2d.png"
      alt="Next.js logo"
      width={343}
      height={411}
      priority
      />
      <Image
      className="dark:invert absolute "
      src="/com/cy3d.png"
      alt="Next.js logo"
      width={343}
      height={411}
      priority
      />
      </div>
      
    </div>
  );
}
