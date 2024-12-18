import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import Card from './Card.jsx'
import grp from '../../Images/grp.jpeg'

import { motion } from 'framer-motion'
import { fadeIn, fadeIn2 } from '../../variants.js';


const About = () => {
  return (
    <>
      <section className='h-fit'>
        <div className='flex flex-col justify-center items-center mt-10 mb-28'>
          <div className='font-extrabold text-[2.6rem] text-center'>
            <span className='text-red-600'>TED<sup>X</sup> </span>
            <span>SiddagangaInstituteOfTechnology</span>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}

            className='h-[740px]'
            >
            <img loading='lazy' src={grp} alt="group photo 2024 event" className='w-full sm:w-4/5 md:w-[1200px] mx-auto my-5' />
          </motion.div>
        </div>


        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-start'>
          <motion.div 
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}

            id="left">
            <motion.h1
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}

              className='text-7xl mb-10'><span className='text-red-600'>About</span>    TED
            </motion.h1>
            <div className='text-[1.3rem] text-justify'>
              <div>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </div>
              <br /><br />
              <div>
                The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self-organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}

            id="right" className='mt-56'>
            <motion.h1 
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}

              className='text-7xl mb-10'><span className='text-red-600'>About</span>    TEDx
            </motion.h1>
            <div className='text-[1.3rem] text-justify'>
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
            </div>

            <div className='md:pb-10 mt-16 ml-1'>
              <h1 className='text-red-600 text-3xl mb-4'>
                Follow Us
              </h1>
              <div className='flex flex-row gap-5'>
                <a href="https://www.instagram.com/tedxsiddaganga/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className='h-8 text-gray-600 hover:text-current' icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className='h-8 text-gray-600 hover:text-current' icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/TedxSiddaganga/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className='h-8 text-gray-600 hover:text-current' icon={faFacebook} />
                </a>

              </div>
            </div>
          </motion.div>
        </div>



        <div className="team my-20">

          <div className=' flex justify-center items-center mt-40'>
            <span className='text-[3.9rem] text-red-600'>OUR</span> &nbsp; &nbsp; <span className='text-[3.9rem]'>TEAM</span>
          </div>

          <motion.div 
            variants={fadeIn2("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="executives w-[80%] mx-auto mt-10  mb-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Executive</span> &nbsp; Members</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Shreeraksha N"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sayan Das"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sanjana"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Krish"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Abir Sarkar"
                position="Technical Team"
                linkedin="LINKEDIN"
                className="md:col-span-2 lg:col-span-1 lg:col-start-2"
              />
            </div>


          </motion.div>

          <motion.div 
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="design w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Curations</span> &nbsp;</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Mohith Sai"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Navtej"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Arshan"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Khushi A Narayan"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anaya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Shreeya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Vaishnavi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Jeet"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Skarma"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Tanay"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Kana Vahini"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Srinidhi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn2("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="marketing w-[80%] mx-auto my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14 md:flex flex-col'>
              <span className='text-red-600'>Marketing</span>
              <span></span> 
              <span></span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Tarun"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Purbayan Biswas"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sanvi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Ritvik"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anurag"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Ashutosh"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Arpita"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Himank"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Basayya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Karan Anand"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Poorvika"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Saish"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Shubhankar"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Kapil"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Prem"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Mawlya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anisha"
                position="Technical Team"
                linkedin="LINKEDIN"
              />

            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn2("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="curation w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Socials</span> &nbsp; </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Juhi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Avinash"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Falak Taj"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Abhishek Hiremath"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Monal"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sadiya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Poornima"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Abhishek Gupta"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Piyush Kumar"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Om Trivedi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Gagan"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Trupti"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Pawan"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Kartik"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anagha"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Dhruthi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn2("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}

            className="technical w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Development</span> &nbsp; Team</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Aditya Agarwal"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Rajdeep Paul"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Jishnu Khargharia"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Prajna"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anusha H"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Rahul"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Devank"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="finance w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Budget</span> &nbsp; Team</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Purbayan Biswas"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Arshan"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Ashish"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn2("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
          
            className="finance w-[80%] mx-auto  my-20 pl-10 flex flex-col justify-center items-center ">
            <div className='text-6xl flex justify-center items-center my-14'><span className='text-red-600'>Arts</span> &nbsp; &amp;<span>Operations</span></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
              <Card
                name="Shrusti"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Lavanya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Anjali"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Ankit"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sadiya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="HS Shreyas"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Tejaswini"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Dhanush"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Viraj"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Nidhi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Shreyash"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Richa Jha"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Sampreethi"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Shreya"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Khushi MC"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
              <Card
                name="Satyakam Vats"
                position="Technical Team"
                linkedin="LINKEDIN"
              />
            </div>

          </motion.div>

        </div>

      </section>
    </>
  )
}

export default About
