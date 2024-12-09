import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed w-full z-10 top-0 shadow-lg pt-2 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="https://www.lucidtravel.com">
              <img
                className="h-10"
                src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/logo-white-small.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <div className="relative group">
              <button className="text-white text-xl font-semibold hover:text-blue-400">
                Products <i className="fa fa-caret-down"></i>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-700 shadow-lg rounded mt-2 min-w-[200px]">
                <a
                  href="https://www.lucidtravel.com/youth-sports"
                  className="block px-4 py-2 text-white hover:bg-blue-500"
                >
                  Sports Teams
                </a>
                <a
                  href="https://www.lucidtravel.com/tournament-director"
                  className="block px-4 py-2 text-white hover:bg-blue-500"
                >
                  Tournament Directors
                </a>
                <a
                  href="https://www.lucidtravel.com/university-recreation"
                  className="block px-4 py-2 text-white hover:bg-blue-500"
                >
                  Universities
                </a>
                <a
                  href="https://www.lucidtravel.com/user/registration-individual"
                  className="block px-4 py-2 text-white hover:bg-blue-500"
                >
                  Individuals & Families
                </a>
                <a
                  href="https://www.lucidtravel.com/integration"
                  className="block px-4 py-2 text-white hover:bg-blue-500"
                >
                  Integration Partners
                </a>
              </div>
            </div>

            <a
              href="https://www.lucidtravel.com/how-it-works"
              className="text-white hover:text-blue-400 text-xl"
            >
              How It Works
            </a>
            <a
              href="https://www.lucidtravel.com/media"
              className="text-white hover:text-blue-400 text-xl"
            >
              Media
            </a>
            <a
              href="https://www.lucidtravel.com/user/registration-step-1"
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 text-xl"
            >
              Design Your Page
            </a>
            <a
              href="https://www.lucidtravel.com/user/login"
              className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600 text-xl"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-gray-800">
        <a
          href="https://www.lucidtravel.com/youth-sports"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Sports Teams
        </a>
        <a
          href="https://www.lucidtravel.com/tournament-director"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Tournament Directors
        </a>
        <a
          href="https://www.lucidtravel.com/university-recreation"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Universities
        </a>
        <a
          href="https://www.lucidtravel.com/how-it-works"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          How It Works
        </a>
        <a
          href="https://www.lucidtravel.com/media"
          className="block px-4 py-2 text-white hover:bg-gray-600"
        >
          Media
        </a>
        <a
          href="https://www.lucidtravel.com/user/registration-step-1"
          className="block px-4 py-2 text-white bg-blue-500 hover:bg-blue-600"
        >
          Design Your Page
        </a>
        <a
          href="https://www.lucidtravel.com/user/login"
          className="block px-4 py-2 text-white bg-gray-700 hover:bg-gray-600"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
