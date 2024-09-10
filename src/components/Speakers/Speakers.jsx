import React, { useState } from 'react';
import Card from './Card.jsx';

const Speakers = () => {

  const [visibleYear, setVisibleYear] = useState('2024');

  const handleButtonClick = (year) => {
    setVisibleYear(year);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center w-[90%] mx-auto my-14'>
        <div className='text-[2.9rem]'>
          <span className='text-red-600'>PAST</span> &nbsp; SPEAKERS
        </div>

        <div id="years" className='flex gap-12 text-3xl py-10'>
          {['2024', '2023', '2022', '2021', '2020', '2019'].map((year) => (
            <button
              key={year}
              className={`py-3 px-6 rounded-full cursor-pointer ${visibleYear === year ? 'text-red-600' : 'text-white'}`}
              onClick={() => handleButtonClick(year)}
            >
              {year}
            </button>
          ))}
        </div>

        
        <div id="2019" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2019' ? '' : 'hidden'}`}>
          <Card name="Pooja Sachdeva" position="CEO" />
          <Card name="Santa Santosh Avvannavar" position="CEO" />
          <Card name="Alcatraz Dey" position="CEO" />
          <Card name="Baisakhi Saha" position="CEO" />
          <Card name="The Params" position="CEO" />
          <Card name="Goonjan Mall" position="CEO" />
          <Card name="Rohit Dey" position="CEO" />
          <Card name="Dr. Dakshayini Kanna" position="CEO" />
          <Card name="Natasha Noel" position="CEO" />
          <Card name="Surender Shah" position="CEO" />
          <Card name="Dr. Praveen Vemula" position="CEO" />
          <Card name="Prasanna Murthy" position="CEO" />
        </div>

        <div id="2020" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2020' ? '' : 'hidden'}`}>
          <Card name="Avelo Roy" position="CEO" />
          <Card name="K Visalini" position="CEO" />
          <Card name="Shweta Ratanpura" position="CEO" />
          <Card name="Mohd Shams Alam" position="CEO" />
          <Card name="Shweta Kothari" position="CEO" />
          <Card name="Dr Shyam Vasudeva Rao" position="CEO" />
          <Card name="Piali Bopanna" position="CEO" />
          <Card name="Binay Kumar" position="CEO" />
          <Card name="Swamy Veereshanda" position="CEO" />
          <Card name="Dr YS Rajan" position="CEO" />
          <Card name="Dhanush Devang" position="CEO" />
        </div>

        <div id="2021" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2021' ? '' : 'hidden'}`}>
          <Card name="Hitesh Choudhary" position="CEO" />
          <Card name="Dr Syed Asad Abbas" position="CEO" />
          <Card name="Clince Varghese" position="CEO" />
          <Card name="Mira Erda" position="CEO" />
          <Card name="Radhika Bajoria" position="CEO" />
          <Card name="Abhay Chopra" position="CEO" />
          <Card name="Shreya Pattar" position="CEO" />
          <Card name="Dravisha Katoch" position="CEO" />
          <Card name="Ankur Chaudhary" position="CEO" />
        </div>

        <div id="2022" className={` h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2022' ? '' : 'hidden'}`}>
          {/* Event did not take place in 2022 */}
        </div>

        <div id="2023" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2023' ? '' : 'hidden'}`}>
          <Card name="Prakash Belawadi" position="CEO" />
          <Card name="Santa Santosh Avvannavar" position="CEO" />
          <Card name="Shilpa Kulshrestha" position="CEO" />
          <Card name="Akshay Chopra" position="CEO" />
          <Card name="Major Aditi" position="CEO" />
          <Card name="Nithyashree Mani" position="CEO" />
          <Card name="Ganesh Datta Lakkur" position="CEO" />
          <Card name="Ajinkya Lohakare" position="CEO" />
          <Card name="Yashwant J" position="CEO" />
          <Card name="Suma Annegowda and Pushpalatha" position="CEO" />

        </div>

        <div id="2024" className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${visibleYear === '2024' ? '' : 'hidden'}`}>
          <Card name="Shreya Rao Kumavarapu" position="CEO" />
          <Card name="Anurag Mourya" position="CEO" />
          <Card name="Karen Vincent" position="CEO" />
          <Card name="Ashok Venkat" position="CEO" />
          <Card name="Vignesh Shankar" position="CEO" />
          <Card name="Pavana Ganga" position="CEO" />
          <Card name="Sadhwin Shetty" position="CEO" />
          <Card name="Kalyan Manjunath" position="CEO" />
        </div>

      </div>
    </>
  );
};

export default Speakers;
