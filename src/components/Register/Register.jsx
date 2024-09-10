import React, { useState } from 'react';

import { motion } from 'framer-motion'
import { fadeIn5 } from '../../variants.js';

const Register = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);

        try {
            const response = await fetch('https://sheetdb.io/api/v1/c5ywh686aln6o', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                form.reset();
                setFormSubmitted(true);
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <motion.div
                variants={fadeIn5("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
            
            >
                <form onSubmit={handleSubmit} id="sheetdb-form" className='border-red-600 border-2 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto my-20 p-9 rounded-lg'>
                    <h1 className='text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] mb-10 pl-5'>
                        <span className='text-red-600'>TED<sup>X</sup> </span> &nbsp; REGISTRATION
                    </h1>
                    <div className='flex flex-col'>
                        <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>NAME</label>
                        <input className="text-black mb-5 h-10 text-lg sm:text-xl md:text-2xl rounded-sm" type="text" name="data[Name]" required />
                        <br />
                        <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>USN</label>
                        <input className="text-black mb-5 h-10 text-lg sm:text-xl md:text-2xl rounded-sm" type="text" name="data[Usn]" required />
                        <br />
                        <label className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-3'>PHONE NUMBER</label>
                        <input className="text-black mb-14 h-10 text-lg sm:text-xl md:text-2xl rounded-sm" type="text" name="data[Contact]" required />

                        <input
                            className="h-14 bg-[rgb(18,18,18)] text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] cursor-pointer text-white transition-colors duration-300 hover:bg-[rgb(30,30,30)] hover:text-gray-300"
                            type="submit"
                            value="Submit"
                        />

                    </div>
                </form>
                {formSubmitted && (
                    <div className='text-lg sm:text-xl md:text-2xl w-[33vh] mx-auto mb-10'>
                        <p>Form submitted successfully!</p>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default Register;
