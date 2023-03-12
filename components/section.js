import gamepadleft from "../public/gamepadleft.svg";
import Image from "next/image";

const Section = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex justify-center">
            <Image src={gamepadleft} width="500" alt="gamepad" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-7xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-Inter">
            Made with quality
          </h1>

          <p className="font-Inter text-white text-sm pt-10">
            The Xbox Series S is a great entry point into new-gen gaming for
            those who have no qualms about buying games digitally or subscribing
            to Xbox Game Pass.
          </p>
        </div>

        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default Section;
