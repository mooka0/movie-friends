import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/favorite">Favorites</a>
    </Menu.Item>
    
  </Menu>
  )
}

export default LeftMenu