import Image from 'next/image'
import React from 'react'
import rekitdesktoplogo from '../../assets/images/rekitdesktoplogo.png'
import rekitfooterlogo from '../../assets/images/footerlogo.png'

export const RekitFooterLogo = () => {
  return (
    <Image src={rekitdesktoplogo}  alt="rekit financial advisors limited brand logo" />
  )
}
export const RekitSmallLogo = () => {
  return (
    <Image
      src={rekitdesktoplogo}
      width={160}
      height={60}
      alt="rekit financial advisors limited brand logo" 
      className="lg:hidden"
      />
  )
}
const RekitLogo = () => {
  return (
    <Image
      src={rekitdesktoplogo}
       width={160}
      height={60}
      alt="rekit financial advisors limited brand logo"
      className="hidden"
      />
  )
}

export default RekitLogo

// width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        //layout fill responsive 