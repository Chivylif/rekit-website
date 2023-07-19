import React from 'react'
import { Menu as MyMenu } from 'antd'

const Menu = (props) => {
    const { text } = props
  return (
    <MyMenu>{text}</MyMenu>
  )
}

export default Menu