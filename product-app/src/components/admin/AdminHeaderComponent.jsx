import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const AdminHeaderComponent = ({items1}) => {
  return (
    <Header
        style={{
          position : "fixed",
          width : "100%",
          display: 'flex',
          alignItems: 'center',
          zIndex : "5"
        }}
        defaultValue={1}
      >
        <h1 style={{color : "white",marginRight : 20}} >Product App</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
  )
}
