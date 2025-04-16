import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative bg-black">
      <div className="w-full h-full justify-center items-center flex">
          <Image
            className="dark:invert"
            src="/pages/1.png"
            alt="Next.js logo"
            width={667}
            height={755}
            priority
          />
      </div>
    </div>
  );
}
