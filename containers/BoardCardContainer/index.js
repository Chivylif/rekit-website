import React from 'react'
import BoardCard from '../../components/BoardCard'
import { boardData } from '../../constants'

const BoardCardContainer = ({switchStep, showDetails, data=[], step, myShow}) => {
  return data.map(item =>(
      <BoardCard key={item.key} showStep={step} myShow={myShow} switchStep={switchStep} step={item.key} showDetails={showDetails} image={item.image} name={item.name} cert={item.cert} role={item.role} />
  ))
}

export default BoardCardContainer