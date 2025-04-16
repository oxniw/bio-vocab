import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full relative bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Title: BIOGAME */}
      <div className="flex space-x-2 mb-8">
        {["a", "i", "o", "g", "a", "m", "e"].map((letter, index) => (
          <Image
            key={index}
            src={`/biogame/${letter}.svg`}
            alt={letter}
            width={50}
            height={50}
            className="invert"
          />
        ))}
      </div>

      {/* Circuit Background */}
      <div className="absolute inset-0">
        <Image
          src="/com/cy2d.png"
          alt="Circuit Background 1"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <Image
          src="/com/cy3d.png"
          alt="Circuit Background 2"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Wireframe Sphere */}
      <div className="absolute top-20 right-10">
        <Image
          src="/com/cy4d.png"
          alt="Wireframe Sphere"
          width={150}
          height={150}
        />
      </div>

      {/* Buttons: PLAY and LEARN */}
      <div className="flex space-x-8 mt-8">
        {/* PLAY Button */}
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg px-6 py-3">
          {["p", "l", "a", "y"].map((letter, index) => (
            <Image
              key={index}
              src={`/fontplay/${letter}.svg`}
              alt={letter}
              width={40}
              height={40}
              className="invert"
            />
          ))}
        </div>

        {/* LEARN Button */}
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg px-6 py-3">
          {["l", "e", "a", "r", "n"].map((letter, index) => (
            <Image
              key={index}
              src={`/fontplay/${letter}.svg`}
              alt={letter}
              width={40}
              height={40}
              className="invert"
            />
          ))}
        </div>
      </div>

      {/* HP Bar */}
      <div className="mt-8">
        <Image
          src="/com/cyhp.png"
          alt="HP Bar"
          width={200}
          height={50}
        />
      </div>
    </div>
  );
}