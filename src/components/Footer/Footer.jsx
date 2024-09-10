import React from 'react'
import logo from '../../logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Footer = () => {
    return (
        <>
            <footer className="bg-[rgb(18,18,18)]">
                <div className='flex justify-around py-10 w-[90%] m-auto lg:flex-row  flex-col  md:pl-7'>
                    <div className='md:pb-10'>
                        <img src={logo} alt="tedx_logo" className='w-[40vh]' />
                    </div>

                    <div className='md:pb-10'>
                        <h1 className='text-red-600 text-3xl mb-4'>Follow Us</h1>
                        <div className='flex flex-row gap-5'>
                            <a href="https://www.instagram.com/tedxsiddaganga/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8' icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/tedxsiddagangainstituteoftechnology/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8' icon={faLinkedin} />
                            </a>
                            <a href="https://www.facebook.com/TedxSiddaganga/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='h-8' icon={faFacebook} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-red-600 text-3xl'>Contact Us</h1>
                        <div className='text-xl'>
                            <div className='hover:underline decoration-red-600'>
                                <a href="mailto:tedx@sit.ac.in" target="_blank" rel="noopener noreferrer">
                                    tedx@sit.ac.in
                                </a>
                            </div>
                            <div>
                                <div>phno</div>
                                <div>phon</div>
                            </div>
                            <div>
                                Siddaganga Institute Of Technology,
                                <br />
                                Dr. Sree Sree Shivakumara Swamiji Road,
                                <br />
                                Tumakuru, Karnataka 572103
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
