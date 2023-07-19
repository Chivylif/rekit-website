import React, { useState } from 'react'
import WeAre from '../../components/WeAre'
import { wearedata } from '../../constants'

const WeAreContainers = () => {
    const [item] = useState(wearedata)
    return  item?.map((item,idx) =>(
        <WeAre key={idx} image={item.image} description={item.desc} order={item.order} />
    ))
}

export default WeAreContainers