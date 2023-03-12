import Link from "next/link";
import Image from "next/image";
import ghost from "../public/ghost.png";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex md:justify-start justify-center">
            <Link href="#">
              <Image src={ghost} alt="logo ghost" width={60} />
            </Link>
          </div>

          <div className="py-10">
            <form className="flex space-x-2">
              <button
                type="submit"
                className="text-white px-4 py-2 space-x-2 bg-indigo-400 hover:bg-indigo-500 rounded-lg font-Inter text-sm transition ease-in-out"
              >
                Suscribe
              </button>

              <input
                type="email"
                id="email"
                name="email"
                className="rounded-lg  bg-darknes text-white font-Inter text-xs px-2

                focus: outline-none border-slate-600 border w-80
                "
              />
            </form>
            <label className="text-gray-600 pl-24 text-xs font-medium font-Inter">
              Suscribe for new gaming
            </label>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex space-x-6 justify-center px-2">
            <div className="">
              <h1
                href="#"
                className="text-white font-Inter text-sm rounded-lg px-2 py-2"
              >
                Products
              </h1>

              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Feature
                </Link>
              </ul>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Security
                </Link>
              </ul>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Enterprise
                </Link>
              </ul>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Price
                </Link>
              </ul>
            </div>

            <div className="">
              <h1
                href="#"
                className="text-white font-Inter text-sm rounded-lg px-2 py-2"
              >
                Community
              </h1>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Developer
                </Link>
              </ul>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  API
                </Link>
              </ul>

              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Sponsor
                </Link>
              </ul>

              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Forum
                </Link>
              </ul>
            </div>
            <div className="">
              <h1
                href="#"
                className="text-white font-Inter text-sm rounded-lg px-2 py-2"
              >
                Support
              </h1>

              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Docs
                </Link>
              </ul>

              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Status
                </Link>
              </ul>
              <ul>
                <Link
                  href="#"
                  className="text-white font-Inter text-xs hover:bg-gray-900 px-4 py-2  rounded-lg"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-gray-600 text-sm font-medium font-Inter">
          All Right Reserved. Dugadev 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
