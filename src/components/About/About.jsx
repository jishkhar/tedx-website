import React from 'react'
import grp from '../../Images/grp.jpeg'

const About = () => {
  return (
    <>
      <section className='h-fit'>
        <div className='flex flex-col justify-center items-center mt-12 mb-5'>
          <div className='font-extrabold text-[2.4rem]'>
            <span className='text-red-600'>TED <sup>X</sup> </span>
            <span>SiddagangaInstituteOfTechnology</span>
          </div>
          <img src={grp} alt="group photo 2024 event" className='w-[1200px] mx-auto my-5' />
        </div>

        <div className='text-2xl'>
          <div  className="motto flex w-[60%] mx-auto mb-14">
            At TEDxSiddagangaInstituteOfTechnology, we envision a generation, only bounded by our imagination and dreams. A generation that can play a vital role in the conveyor belt of ideas, entertainment, design and techology. We create oppurtunities for our student and staff to meet the people who got their hands dirty in this conveyor belt and inspire them to get their hands dirty as well.
          </div>
          <div className="motto flex w-[70%] mx-auto mb-16 bg-[rgb(18,18,18)] p-10">
            <div className="left w-[150%] text-4xl font-bold">OUR MOTTO : </div>
            <div className="right">
              "Ideas Worth Sharing" : We believe that for humankind to truly progress and achieve our potential, the exchange of ideas between people is essential. TED helps us list the problems people face even in the remotest corners of the world. This promotes discussions to come up with solutions and ideas from pioneers and amateurs in different backgrounds. Most ideas, often end up being ignored or rejected, and even the ones that are accepted are often not implemented. We aim to play our little role in guiding these embryos and nurture them with the hope that they help us progress and march forward.
            </div>
          </div>
        </div>

        
      </section>
    </>
  )
}

export default About
