import React from 'react'

const SimpleBanner = (props) => {
    const { title = "Simple Banner"} = props
  return (
    <div className="simple_banner w-full h-[499px] flex justify-center items-center">
        <h1 className="uppercase font-raleway text-[3em] text-white font-bold">{title}</h1>
    </div>
  )
}

export default SimpleBanner