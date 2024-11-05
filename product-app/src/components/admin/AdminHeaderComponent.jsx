import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export const AdminHeaderComponent = () => {

  const navigate = useNavigate();

  return (
    <Header
      style={{
        position: 'fixed',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: '5',
      }}
    >
      <h1 style={{ color: 'white', marginRight: 20 }}>Product App</h1>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}    
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <Menu.Item key={1} onClick={()=>navigate("/admin/products")} >Admin</Menu.Item>
        <Menu.Item key={2} onClick={()=>navigate("/products")} >User</Menu.Item>
      </Menu>
    </Header>
  );
};
