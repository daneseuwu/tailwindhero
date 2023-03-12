import Link from "next/link";
import Image from "next/image";
import ghost from '../public/ghost.png'

const Nav = () => {
  return (
    <div className="container px-10 py-5">

      <div className="flex">

        <div className="flex-grow">
          <div className=" text-indigo-200 font-extrabold text-2xl  font-Inter uppercase">
            <Image src={ghost} alt="logo ghost" width={40}/>
          </div>
        </div>

        <div className="md:flex hidden">
          <div className="flex space-x-2 justify-center font-Inter text-white text-xs">
            <Link
              href="#"
              className="hover:bg-gray-900 rounded-lg px-2 py-2 bg-gray-900"
            >
              Products
            </Link>
            <Link
              href="#"
              className="hover:bg-gray-900 rounded-lg px-2 py-2"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="hover:bg-gray-900 rounded-lg px-2 py-2"
            >
              Trending
            </Link>
            <Link
              href="#"
              className="hover:bg-gray-900 rounded-lg px-2 py-2"
            >
              Popular
            </Link>
          </div>
        </div>

        <div className="flex-grow">
          <div className="text-white font-Inter font-medium justify-end flex space-x-2">
            <a hre="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </a>
            <a hre="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </a>

            <Link
              href="#"
              className="rounded-lg text-xs px-4 py-2 bg-indigo-400 hover:bg-indigo-500 transition ease-out"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
