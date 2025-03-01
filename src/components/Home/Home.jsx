import React from "react";
import hero from "../../assets/home/hero1.jpg";
import Carousal from "../Home/Carousal";
import About from "../Home/Us";
import Reasons from "../Home/Reasons";
import text from "../../logo/texthero.png";

const Home = () => {
  return (
    <>
      <section className="bg-black py-0">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 mt-16 lg:mt-64 text-center lg:text-left lg:mb-0 lg:pt-50">
            {/* TEDx2024 */}
            <h1 className="text-white text-3xl md:text-5xl font-semibold mb-2 lg:ml-16">
              TEDx2024
            </h1>

            {/* Hero Text Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={text}
                alt="TEDx Event Text Hero"
                className="max-w-full h-auto mb-4"
              />
            </div>

            {/* Description */}
            <p className="mt-8 lg:mt-20 text-white text-sm md:text-lg lg:text-xl lg:ml-16 px-2 lg:px-0">
              The concept of "Beyond the Canvas" as a topic embodies the idea of
              pushing past conventional limits and discovering new avenues for
              expression, creativity, and innovation. It inspires people to go
              beyond the bounds of traditional thinking and explore previously
              unexplored realms of possibility and creativity. Ultimately, it
              serves as a call to action, a reminder that the journey of
              discovery and creation is limitless and that the most profound
              insights and experiences often lie just beyond the edges of what
              we know and perceive.
            </p>

            {/* Date */}
            <p className="mt-4 lg:mt-8 text-red-600 text-lg md:text-2xl font-semibold lg:ml-16">
              29-April-2024
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-red-600 text-base md:text-xl lg:text-2xl mt-8 lg:mt-20 lg:ml-16 text-white py-2 px-6 rounded-full hover:bg-red-700">
                Book your tickets now!
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <img
              src={hero}
              alt="TEDx Event Image"
              className="max-w-full h-auto mb-0"
            />
          </div>
        </div>
      </section>
      <Carousal />
      <About />
      <Reasons />
    </>
  );
};

export default Home;
