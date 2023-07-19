import React from 'react'
import Tabs from '../../components/Tabs'
import { wealthTabsData } from '../../constants'

const WealthTabsContainer = (props) => {
    const { activeTab, setActiveTab} = props
  return wealthTabsData.map(tab => <Tabs activeTab={activeTab} content={tab.content} key={tab.key} tabkey={tab.key} text={tab.text} onClick={() =>setActiveTab(tab.key)} />)
}

export default WealthTabsContainer