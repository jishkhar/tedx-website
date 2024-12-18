import React from "react";
import sp1 from "../../Images/ns silks.jpg";

const Partners = () => {
  return (
    <>
      <div className="pt-20 pr-24">
      <div class="flex items-start space-x-4  ">
        <div class="relative flex-none">
          <img
            src="https://cdn.prod.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7fa5616f7d4d_Group%2026.svg"
            class="w-96 h-auto ml-80"
          />
          <div class="absolute top-0 left-0 p-4">
            <p class=" text-white text-7xl font-bold p-4 ml-40">Our</p>
            <p class=" text-white text-7xl font-bold p-4 ml-40">Sponsors</p>
          </div>
        </div>

        <div class="flex-1 ml-4 mt-12 px-20 py-10">
          <p class=" text-base sm:text-lg md:text-xl lg:text-2xl sm:leading-loose md:leading-loose px-4 sm:px-6 lg:px-8 text-justify">
          Join us on our journey to proliferate meaningful discussions and associate with a global name consistent with collaboration, innovation and enduring optimism. Our event is a great opportunity to increase your reach among a brilliant audience and an equally amazing speaker line-up.
          </p>
        </div>
      </div>

      <div class=" relative flex justify-center items-center h-screen p-10">
        <img src={sp1} class="w-100 absolute top-1" />
      </div>
      </div>
    </>
  );
};

export default Partners;
