import React from 'react'
import test from '../../Images/text .png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';


const Card = ({ name, position, linkedin }) => {

    return (
        <>
            <div className="w-[300px] rounded-md border">
                <img
                    src={test}
                    alt="Laptop"
                    className="h-[300px] w-full rounded-md object-cover"
                />
                <div className="p-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className=" text-[1.28rem] mt-3 text-gray-600">
                        {position}
                    </p>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className='h-7 mt-2 hover:text-blue-700 hover:scale-110 transition-transform duration-300'
                        />

                    </a>

                </div>
            </div>
        </>
    )
}

export default Card
