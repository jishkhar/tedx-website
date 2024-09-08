import React from 'react'
import test from '../../Images/text .png'


const Card = ({ name, position }) => {

    return (
        <>
            <div className="h-fit w-fit rounded-3xl  py-10 px-5">
                <img
                    src={test}
                    className="h-[300px] rounded-full"
                />
                <div className="pt-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-red-600 font-semibold">{name}</h1>
                    <p className=" text-[1.6rem] mt-3 text-gray-600">
                        {position}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card
