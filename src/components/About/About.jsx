import React from 'react'
import Card from './Card.jsx'
import grp from '../../Images/grp.jpeg'

const About = () => {
  return (
    <>
      <section className='h-fit'>
        <div className='flex flex-col justify-center items-center mt-12 mb-5'>
          <div className='font-extrabold text-[2.6rem] text-center'>
            <span className='text-red-600'>TED <sup>X</sup> </span>
            <span>SiddagangaInstituteOfTechnology</span>
          </div>
          <img src={grp} alt="group photo 2024 event" className='w-full sm:w-4/5 md:w-[1200px] mx-auto my-5' />
        </div>


        <div className='text-xl sm:text-2xl w-[91%] mx-auto my-20'>
          <div className="motto flex flex-col md:flex-row w-full md:w-4/5 mx-auto mb-10 md:mb-14">
            At TEDxSiddagangaInstituteOfTechnology, we envision a generation only bounded by our imagination and dreams. A generation that can play a vital role in the conveyor belt of ideas, entertainment, design, and technology. We create opportunities for our students and staff to meet the people who got their hands dirty in this conveyor belt and inspire them to get their hands dirty as well.
          </div>
          <div className="motto flex flex-col md:flex-row w-full md:w-4/5 mx-auto mb-12 md:mb-16 bg-[rgb(18,18,18)] p-6 md:p-10 rounded-lg">
            <div className="left w-full md:w-1/3 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-0">OUR MOTTO:</div>
            <div className="right w-full md:w-2/3">
              "Ideas Worth Sharing": We believe that for humankind to truly progress and achieve our potential, the exchange of ideas between people is essential. TED helps us list the problems people face even in the remotest corners of the world. This promotes discussions to come up with solutions and ideas from pioneers and amateurs in different backgrounds. Most ideas, often end up being ignored or rejected, and even the ones that are accepted are often not implemented. We aim to play our little role in guiding these embryos and nurture them with the hope that they help us progress and march forward.
            </div>
          </div>
        </div>


        <div className="team my-20">

          <div className="executives w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Executive</span> &nbsp; Members</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
                className="md:col-span-2 lg:col-span-1 lg:col-start-2"
              />
            </div>


          </div>

          <div className="design w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Design</span> &nbsp; &amp; Branding</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </div>

          <div className="marketing w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Marketing</span> &nbsp; &amp; Sponsorship</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </div>

          <div className="curation w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Content</span> &nbsp; &amp; Curation</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </div>

          <div className="technical w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Technical</span> &nbsp; Team</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </div>

          <div className="finance w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Finance</span> &nbsp; Team</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32'>
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="NAME"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About
