import Image from 'next/image'
import React from 'react'

const SmallCard = ({title, image, description}) => {
    return (
        <div className="grid lg:grid-cols-2">
            <div>
                <Image src={image} alt={description} />
            </div>
            <div className="p-3 pl-[1px]">
                <h1 className="mb-5 capitalize font-raleway font-bold text-xl">{title}</h1>
                <div className="font-inter font-normal leading-[1.8rem] text-[#1A1919]">{description}</div>
            </div>
        </div>
    )
}

export default SmallCard