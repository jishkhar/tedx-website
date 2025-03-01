import React from "react";
import sp1 from "../../Images/ns silks.jpg";

const Partners = () => {
  return (
    <>
      <div className="pt-20 pr-6 lg:pr-24 bg-black">
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-4">
          <div className="relative flex-none w-full lg:w-auto">
            <img
              src="https://cdn.prod.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7fa5616f7d4d_Group%2026.svg"
              className="w-full lg:w-96 h-auto mx-auto"
              alt="Sponsor Image"
            />
            <div className="absolute top-0 left-0 p-4">
              <p className="text-white text-3xl sm:text-5xl md:text-7xl font-bold p-4 ml-40">Our</p>
              <p className="text-white text-3xl sm:text-5xl md:text-7xl font-bold p-4 ml-40">Sponsors</p>
            </div>
          </div>

          <div className="flex-1 mt-6 lg:mt-12 px-6 lg:px-20 py-4 lg:py-10">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl sm:leading-loose md:leading-loose px-4 sm:px-6 lg:px-8 text-justify">
              Join us on our journey to proliferate meaningful discussions and associate with a global name consistent with collaboration, innovation and enduring optimism. Our event is a great opportunity to increase your reach among a brilliant audience and an equally amazing speaker line-up.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-80 sm:h-96 md:h-screen p-6">
          <img src={sp1} className="w-full h-auto absolute top-1" alt="Sponsor Image" />
        </div>
      </div>
    </>
  );
};

export default Partners;
