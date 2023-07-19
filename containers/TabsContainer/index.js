import React, { useState } from 'react'
import { tabsData } from '../../constants'
import Tabs from '../../components/Tabs'

const TabsContainer = (props) => {
    const { activeTab, setActiveTab, tabItem=[] } = props
  return tabItem?.map(tab => <Tabs activeTab={activeTab} content={tab.content} key={tab.key} tabkey={tab.key} text={tab.text} onClick={() =>setActiveTab(tab.key)} />)
}

export default TabsContainer