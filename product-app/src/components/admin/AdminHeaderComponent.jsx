import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const AdminHeaderComponent = ({items1}) => {
  return (
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 style={{color : "white",marginRight : 20}} >Product App</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
  )
}
