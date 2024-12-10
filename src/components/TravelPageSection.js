import React, { useEffect } from "react";
import WOW from "wow.js"; // Import WOW.js

const TravelPageSection = () => {
  useEffect(() => {
    // Initialize WOW.js with custom options
    new WOW({
      boxClass: "wow", // Default class to apply animations
      animateClass: "animated", // The class to apply animations
      offset: 100, // Distance from the bottom of the screen to trigger animation
      mobile: true, // Enable animations on mobile
      live: true, // Check for dynamically added elements
      duration: 1500, // Default duration of the animation in ms (slower)
      delay: 200, // Default delay between animations in ms (slower)
    }).init();
  }, []);
  return (
    <section className="bg-white pt-10" id="about">
      <div className="shape-image-top"></div>

      {/* Container */}
      <div className="container mx-auto">
        {/* Row */}
        <div className="flex flex-wrap">
          {/* Column for the Title, Subtitle, and Example Link */}
          <div className="w-full text-center mb-10 mt-10">
            <h2 className="text-3xl font-semibold">Your Own Travel Page</h2>
            <p className="text-lg text-gray-700 mt-4">
              Create a custom link with your logo, events, and travel deals all
              in one place.
            </p>
            <img
              className="mx-auto my-4"
              style={{ maxWidth: "100%", width: "250px" }}
              src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/arrow-down.jpg"
              alt="See an example"
            />
            <div className="text-center pt-0">
              <a
                target="_blank"
                className="inline-block py-5 px-10 text-xl text-black border-2 border-black rounded-[10px]"
                href="https://www.lucidtravel.com/team/events-public/new-england-aau/6762"
              >
                lucidtravel.com/<span className="text-blue-400">yourbrand</span>
              </a>
              <p className="mt-3 mb-12">👆 Click to see how it looks</p>
            </div>
          </div>

          {/* Column for Features */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-full md:w-4/12 md:ml-4 pt-10">
              {/* Feature Item 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Customize Your Link
                    </h4>
                    <p>
                      Add your logo and branding. Choose from 100+ settings to
                      ensure your link is set up to fit your unique needs.
                    </p>
                  </div>
                  <span
                    className="text-4xl text-white mr-4"
                    style={{
                      margin: "20px",
                      padding: "20px",
                      borderRadius: "25px 25px 0 25px",
                      background:
                        "linear-gradient(135deg, #5CB8EE 0%, #6BB0F2 60%, #88AAF8 100%)",
                    }}
                  >
                    <i className="fa fa-paint-brush"></i>
                  </span>
                </div>
              </div>
              {/* Feature Item 2 */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Set Your Guidelines
                    </h4>
                    <p>
                      Disable nonrefundable rates, set pricing limits, disable
                      certain hotels, &amp; 100+ other customizable settings.
                    </p>
                  </div>

                  <span
                    className="text-4xl text-white mr-4"
                    style={{
                      margin: "20px",
                      padding: "20px",
                      borderRadius: "25px 25px 0 25px",
                      background:
                        "linear-gradient(135deg, #5CB8EE 0%, #6BB0F2 60%, #88AAF8 100%)",
                    }}
                  >
                    <i className="fa fa-cog"></i>
                  </span>
                </div>
              </div>
              {/* Feature Item 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      Automated Discounts
                    </h4>
                    <p>
                      Offer hotel discounts instantly. No more dealing with
                      lengthy, complex hotel contracts.
                    </p>
                  </div>
                  
                  <span
                    className="text-4xl text-white mr-4"
                    style={{
                      margin: "20px",
                      padding: "20px",
                      borderRadius: "25px 25px 0 25px",
                      background:
                        "linear-gradient(135deg, #5CB8EE 0%, #6BB0F2 60%, #88AAF8 100%)",
                    }}
                  >
                    <i className="fa fa-tag"></i>
                  </span>
                </div>
              </div>
            </div>

            {/* Column for Image */}
            <div
              className="w-full md:w-4/12 pt-10 md:pt-0 md:flex justify-center wow slideInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "bounceIn",
              }}
            >
              <img
                className="px-5 w-50"
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "80%",
                }}
                src="https://s3.amazonaws.com/www.lucidtravel.com/assets-new/images/iphone2.png"
                alt="phone image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPageSection;
