import gamepadleft from "../public/gamepadleft.png";
import Image from "next/image";

const Section = () => {
  return (
    <div className="container-lg bg-darknes px-10">
      <div className="flex">
        <div className="flex-grow">
          <div className="flex justify-start">
            <Image src={gamepadleft} width="1000" alt="gamepad" />
          </div>
        </div>

        <div className="flex-grow-0 py-28">
          <h1 className="text-6xl md:text-8xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-Inter">
            Made with quality
          </h1>

          <p className="font-Inter text-white text-sm">
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
