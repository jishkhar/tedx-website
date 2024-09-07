import React, { useState } from 'react';
import logo from '../../logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';

const Header = () => {
    const [icon, setIcon] = useState(faBars);
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setIcon((prevIcon) => (prevIcon === faBars ? faX : faBars));
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    return (
        <>
            <header className="bg-[rgb(18,18,18)]">
                <nav className='flex justify-between items-center w-[92%] mx-auto py-5'>
                    <div>
                        <img src={logo} alt="tedx_logo" className='w-[35vh]' />
                    </div>

                    <div>
                        <div className={`lg:static absolute bg-[rgb(18,18,18)] lg:w-auto w-full  lg:min-h-fit min-h-[60vh] left-0 ${navOpen ? 'top-[10%]' : 'top-[-100%]'
                            } `}>
                            <ul className='flex lg:flex-row flex-col items-center lg:gap-[5vw] gap-10 text-[1.3rem]'>
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>SPEAKERS</li>
                                <li>PARTNERS</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>

                        <div onClick={toggleNav}>
                            <FontAwesomeIcon
                                icon={icon}
                                style={{ cursor: 'pointer' }}
                                className="lg:hidden h-6 flex items-center justify-center pt-1"
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
