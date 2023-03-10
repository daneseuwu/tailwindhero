import Link from "next/link";
const Nav = () => {
  return (
    <div className="container-lg bg-darknes px-10 py-5">
      <div className="flex">
        <div className="flex-grow">
          <div className=" text-indigo-200 font-extrabold text-2xl  font-Inter">
            GamePad
          </div>
        </div>

        <div className="flex-row">
          <div className=" text-white flex justify-center gap-6 font-Inter text-xs py-2">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/popular">Popular</Link>
          </div>
        </div>

        <div className="flex-grow">
          <div className="text-white font-Inter font-medium  flex justify-end gap-4">
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
              href="/signup"
              className=" bg-indigo-500 rounded-lg text-xs lg:px-2 lg:py-2 hover:bg-indigo-600"
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
