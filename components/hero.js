import gamepad from "../public/gamepadright.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container-lg px-10 py-5">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="w-full">
            <h1 className="text-6xl md:text-8xl  text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-Inter ">
              We create
            </h1>
            <h1 className="text-6xl md:text-8xl   text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-gray-600 to-purple-700 font-Inter">
              our future
            </h1>
            <p className="font-Inter text-white text-sm pt-10">
              We will change the feeling of playing with our products
            </p>
          </div>

          <div className="flex gap-4 pt-10">
            <Link
              href="#"
              className="text-white rounded-lg px-4 py-2 font-Inter font-bold bg-gradient-to-r from-purple-500  to-pink-600"
            >
              BUY NOW
            </Link>

            <Link href="#" className="text-white flex gap-2 pt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>How to use</span>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-end">
            <Image src={gamepad} width="500" alt="gamepad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
