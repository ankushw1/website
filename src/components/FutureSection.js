import React, { useState, useEffect, useRef } from "react";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-white py-12"
      id="features"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Tournament Directors",
              image: "https://s3.amazonaws.com/www.lucidtravel.com/assets/img/td-icon.png",
              description:
                "Built for those who manage tournaments or events. Completely automate hotels for events and earn more money from hotels than ever before.",
              link: "../tournament-director/",
            },
            {
              title: "Universities",
              image: "https://s3.amazonaws.com/www.lucidtravel.com/assets/img/university-icon.png",
              description:
                "Built for university clubs & teams that want access to exclusive discounts, approvals, customizations, tracking, and better student safety/compliance.",
              link: "../university",
            },
            {
              title: "Team Room Blocks",
              image: "https://s3.amazonaws.com/www.lucidtravel.com/assets/img/team-icon.png",
              description:
                "Set up team room blocks in less time. See how Lucid's automated system provides room blocks faster and easier than ever before.",
              link: "../youth-sports/",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 lg:w-[30%] ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              } transition-transform duration-500 delay-${index * 200} rounded-full`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full transform transition hover:scale-105 hover:shadow-xl hover:border-green-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="max-w-full max-h-64 p-4 object-contain"
                />
                <h4 className="mt-6 text-xl font-semibold">{feature.title}</h4>
                <p className="mt-2 text-gray-600">{feature.description}</p>
                <div className="flex justify-center mt-6">
                  <a
                    href={feature.link}
                    className="py-2 px-8 text-white bg-[#52b6ec] rounded-md transition-all duration-300 transform hover:bg-green-500"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
