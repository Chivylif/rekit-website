import Image from 'next/image'
import React from 'react'

const WeAre = (props) => {
  const { image, description=[], order } = props
  return (
      <div className="grid lg:grid-cols-2 mb-8 lg:mb-16 lg:gap-x-5">
          <div>
              <Image src={image} alt={description} />
          </div>
              <div className={`${order && 'order-first'}`}>
                  {description.map((item,idx) => (
                      <p key={idx} className="leading-[38px] font-inter text-base">{item}</p>
                  ))}
              </div>
          </div>
  )
}

export default WeAre