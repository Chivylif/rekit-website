import React, { useState } from 'react'
import aboutmission from '../../assets/images/aboutmission.png'
import aboutvision from '../../assets/images/aboutvision.png'
import SmallCard from '../../components/SmallCard'

const data = [
    {
        image: aboutmission,
        title: 'mission',
        description: 'To become the premier financial and investment advisory firm in Nigeria, providing our clients with access to unparalleled investment solutions.'
    },
    {
    image: aboutvision,
    title: 'vision',
    description: 'To help our clients make smart investment decisions through holistic financial and investment advisory services while leveraging professional relationships built on integrity, trust, and personalised service.'
    }
]
const SmallCardContainer = () => {
    const [item] = useState(data)
  return item?.map((item, idx) => (
      <SmallCard key={idx} title={item.title} description={item.description} image={item.image} />
  ))
}

export default SmallCardContainer