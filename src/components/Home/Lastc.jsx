import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const Lastc = () => {
  const Archivo = {
    fontFamily: 'Archivo black, sans-serif',
   };
   const Outfit={
    fontFamily:'Outfit, sans-serif',
  };
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-6 bg-black mt-6 mb-20">
      {/*  Presenter */}
      <div className="mb-6 md:mb-0 transform transition duration-300 hover:scale-110">
      <div className="w-full h-1 bg-white  my-4"></div>
        <div className="text-3xl font-semibold  mb-4 " style={Archivo}>  Interested in being a <br/> TEDx presenter?</div>
        <a
          href="/speaker"
          className="flex justify-items-center bg-black text-2xl text-red-600 px-4 py-2 rounded hover:bg-gray-800 transition-colors"style={Outfit}
        >
          <span >SUBMIT YOUR IDEA</span>
          <BiRightArrowAlt className="ml-2 transition-transform mt-1 duration-300 transform hover:translate-x-2" />
        </a>
      </div>

      {/*  Volunteer */}
      <div className="mb-6 md:mb-0 transform transition duration-300 hover:scale-110">
      <div className="w-full h-1 bg-white  my-4"></div>
        <div className="text-3xl font-semibold mb-4" style={Archivo} >Want to get involved <br/>with TEDx SIT?</div>
        <a
          href="/volunteering"
          className="flex items-center bg-black text-red-600 px-4 py-2 text-2xl rounded hover:bg-gray-800 transition-colors"style={Outfit}
        >
          <span>BECOME A VOLUNTEER</span>
          <BiRightArrowAlt className="ml-2 transition-transform duration-300 transform hover:translate-x-2" />
        </a>
      </div>

      {/*  Sponsor */}
      <div className="mb-6 md:mb-0 transform transition duration-300 hover:scale-110">
      <div className="w-full h-1 bg-white  my-4"></div>
        <div className="text-3xl font-semibold mb-4" style={Archivo} >Interested in being <br/> a  sponsor?</div>
        <a
          href="/sponsors"
          className="flex items-center bg-black text-red-600 px-4 py-2 rounded text-2xl hover:bg-gray-800 transition-colors"style={Outfit}
        >
          <span>PARTNER WITH US</span>
          <BiRightArrowAlt className="ml-2 transition-transform duration-300 transform hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
};

export default Lastc;
