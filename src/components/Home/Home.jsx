import React from 'react'
import hero from "../../assets/home/hero1.jpg"
import Carousal from "../Home/Carousal"
import About from "../Home/Us"
import Reasons from "../Home/Reasons"

const Home = () => {

  // const fontStyle = {
  //   fontFamily: 'Anton, sans-serif',
  // };
  // const lexend={
  //   fontFamily:'Lexend Giga, sans-serif',
  // };
  return (
    <>
 
 <section className="bg-black">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* Left Section:  */}
    <div className="lg:w-1/2 mt-64 text-left lg:mb-0 lg:pt-50"> 
      {/* TEDx2024 */}
      <h1 className="text-white text-5xl font-semibold mb-2 ml-16">
        TEDx2024
      </h1>

      {/* "BEYOND"  "THE"  */}
      <div className="relative flex items-start">
        <div className="text-9xl leading-none ml-16">
          <span className="block text-white">
            BEYOND
          </span>
        </div>
        <span className="absolute right-[8rem] top-0 mt-8 rotate-90 transform text-6xl text-red-600">
          THE
        </span>
      </div>

      {/* "CANVAS"  */}
      <div className="ml-0 mt-0 flex justify-center text-[9rem] leading-none">
        <span className="text-white m-0 p-0">C</span>
        <span className="text-red-600 m-0 p-0">A</span>
        <span className="text-white m-0 p-0">N</span>
        <span className="text-red-600 m-0 p-0">V</span>
        <span className="text-white m-0 p-0">AS</span>
      </div>

     
      <p className="ml-16 mt-20 text-white text-xl">
      The concept of "Beyond the Canvas" as a topic embodies the idea of
pushing past conventional limits and discovering new avenues for
expression, creativity, and innovation. It inspires people to go beyond
the bounds of traditional thinking and explore previously unexplored
realms of possibility and creativity. Ultimately, it serves as a call to
action, a reminder that the journey of discovery and creation is
limitless and that the most profound insights and experiences often lie
just beyond the edges of what we know and perceive. It inspires us to
welcome the adventure of venturing into the unknown to embrace
innovation and to embrace ambiguity.
      </p>

      {/* Date */}
      <p className="mt-4 ml-16 text-red-600 text-2xl font-semibold">29-April-2024</p>
      <button className="bg-red-600 text-3xl mt-20 ml-16 text-white py-2 px-6 rounded-full hover:bg-red-700">
        Book your tickets now!
      </button>
    </div>

    {/* Right Section: */}
    <div className="lg:w-1/2 flex flex-col items-center lg:items-end lg:pl-0 lg:pr-0 lg:ml-auto">
      <img
        src={hero}
        alt="TEDx Event Image"
        className="max-w-full h-auto mb-4 lg:ml-auto lg:mr-0 lg:pr-0"
      />
    </div>
  </div>
</section> 
  <Carousal/>
  <About/>
  <Reasons/>
</>


  )
}

export default Home
