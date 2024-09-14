import React from 'react'
import ok from "../../Images/ns silks.jpg"


const Partners = () => {
  return (
    <>

   <div class="flex items-start space-x-4">
  
  <div class="relative flex-none">
   

   <img src="https://cdn.prod.website-files.com/640f47772aaf7f35956f7cf6/640f47772aaf7fa5616f7d4d_Group%2026.svg" 
    class="w-94 h-auto ml-80"/>
     <div class="absolute top-0 left-0 p-4">
  <p class = " text-white text-8xl font-bold p-4 ml-40">Our</p>
  <p class = " text-white text-8xl font-bold p-4 ml-40">Sponsors</p>
  </div>
  </div>
  
  <div class="flex-1 ml-4 mt-20 p-10">
    <p class="text-right text-lg"> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum.<br/>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita modi <br/>
      doloribus, praesentium cumque iusto laborum porro dolore distinction 
    </p>
  </div>
  </div>
  
  <div>
    <img src={ok} class="w-40 h-40 mx-auto"/>
  </div>

  <div className=" relative flex justify-end mr-60">
  <button className="bg-red-500 text-black font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300 absolute bottom-80">
    Sponsor Us
  </button>
  </div>

  


    </>
  )
}

export default Partners
