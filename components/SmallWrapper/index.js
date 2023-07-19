import React from 'react'

const SmallWrapper = ({children}) => {
  return (
    <div className="w-full px-[1rem] lg:px-[6rem] pt-16 mx-auto bg-white pb-16">{children}</div>
  )
}

export default SmallWrapper