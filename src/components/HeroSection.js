import React, { useState, useEffect } from "react";

function App() {
  const [typedText, setTypedText] = useState("Team travel");
  const words = ["Team travel", "Event hotels", "University travel"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let currentWord = words[wordIndex];
    let updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === currentWord) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setDelta(200);
    }
  };

  return (
    <section
      className="bg-white min-h-screen pt-4"
      id="home_wrapper"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.0)), url('https://s3.amazonaws.com/www.lucidtravel.com/assets/img/field.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        width: "100%",
        position: "relative",
        zIndex: 999,
        overflow: "hidden",
        paddingBottom: "0px",
        backgroundColor: "#333",
      }}
    >
      
        <div className="container mx-auto pl-20 pr-20">
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

      <div className="container mx-auto px-4 pt-16">
        <div className="pb-20">
          <div className="text-center px-2.5">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:hidden">
              Sports & Tournament Lodging
            </h1>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 hidden md:block">
              <span className="txt-type">{text}</span>, easier than ever before.
            </h1>

            <p className="text-white mb-8">
              <a
                href="https://www.lucidtravel.com/user/registration-step-1"
                className="text-white underline"
              >
                Create your free team travel link
              </a>{" "}
              and see how easy team hotels & travel can be.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-end space-x-4 md:hidden mb-4">
                <a
                  href="https://www.lucidhotels.us/Res/"
                  className="text-xs px-4 py-1 rounded border"
                >
                  Existing Reservation
                </a>
                <a
                  href="https://www.lucidtravel.com/user/login"
                  className="text-xs px-8 py-1 rounded bg-[#52b6ec] text-white"
                >
                  Login
                </a>
              </div>

              <div className="flex items-center justify-between border-b-2 border-[#52b6ec] pb-4 mb-6">
  <div className="flex space-x-6">
    {/* Group Hotel (10+ Rooms) */}

    <div className="text-lg text-[#52b6ec] font-medium border-b-2 border-[#52b6ec] pb-1">
  Hotel
</div>

    
    <a
      href="https://www.lucidhotels.us/Res/"
      className="text-gray-600 border border-gray-400 rounded px-4 py-2 text-sm sm:text-base"
    >
      Group Hotel (10+ Rooms)
    </a>

    {/* Car */}
    <a
      href="https://secure.rezserver.com/car_rentals/?refid=7961&refclickid="
      className="text-gray-600 border border-gray-400 rounded px-4 py-2"
    >
      Car
    </a>

    {/* Flights */}
    <a
      href="https://www.lucidtravel.com/search-flights/?sid=home-page"
      className="text-gray-600 border border-gray-400 rounded px-4 py-2"
    >
      Flights
    </a>

    {/* Bus */}
    <a
      href="https://try.bus.com/lucid-travel/"
      className="text-gray-600 border border-gray-400 rounded px-4 py-2"
    >
      Bus
    </a>
  </div>

  {/* Existing Reservation aligned to the right */}
  <div className="ml-auto">
  <a
      href="https://try.bus.com/lucid-travel/"
      className="text-black border border-gray-400 rounded px-2 py-1 text-sm"
    >
      Existing Reservation
    </a>
  </div>
</div>




              <form
                action="https://lucidhotels.us/Search/"
                method="GET"
                className="space-y-4"
              >
                <input type="hidden" name="Locale" value="en_US" />
                <input type="hidden" name="SortBy" value="LatLonDistance" />

                <div>
                  <input
                    type="text"
                    name="City"
                    className="w-full p-4 text-lg border rounded shadow-sm"
                    placeholder="Enter City, Address, Hotel Name, or Venue"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Check-In
                    </label>
                    <input
                      type="date"
                      name="InDate"
                      className="w-full p-2 text-lg border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      name="OutDate"
                      className="w-full p-2 text-lg border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Rooms
                    </label>
                    <select
                      name="NumRooms"
                      className="w-full p-2 text-lg border rounded"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <option key={num} value={num}>
                          {num === 9 ? "9+" : num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#52b6ec] text-white py-3 rounded-lg text-lg font-medium hover:bg-[#41a5db] transition-colors"
                >
                  Find Hotels
                </button>
              </form>
            </div>

            <div className="text-center mt-6">
              <a
                href="https://www.lucidtravel.com/media/2021-luxlife-travel-tourism-awards-best-sport-team-travel-management-specialists-%e2%80%93-usa/74"
                className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#52b6ec] transition-colors"
              >
                Voted 2021 Best Sports Travel Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
