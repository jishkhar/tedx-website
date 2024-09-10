import React from 'react'
import test from '../../Images/text .png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

const Card = ({ name, position, linkedin }) => {
    return (
        <>
            <div className="bg-[rgb(18,18,18)] w-[300px] rounded-md border hover:shadow-lg hover:scale-110 transition-transform duration-300">
                <img
                    src={test}
                    alt="Laptop"
                    className="h-[300px] rounded-t-md object-cover"
                />
                <div className="p-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="text-[1.28rem] mt-3 text-gray-600">
                        {position}
                    </p>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <div>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="h-7 mt-2 px-2 hover:text-blue-700 hover:scale-110 transition-transform duration-300"
                            />

                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="h-7 mt-2 px-2 hover:text-blue-700 hover:scale-110 transition-transform duration-300"
                            />

                            <FontAwesomeIcon
                                icon={faGithub}
                                className="h-7 mt-2 px-2 hover:text-blue-700 hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card
