// Packages
import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
// Styling
import "../../style/admin/AdminHeaderComponent.css";

const { Header } = Layout;

export const AdminHeaderComponent = () => {

  const navigate = useNavigate();

  return (
    <Header
      className='admin-header'
    >
      <h1>Product App</h1>
      <Menu
        className='admin-menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}    
      >
        <Menu.Item key={1} onClick={()=>navigate("/admin/products")} >Admin</Menu.Item>
        <Menu.Item key={2} onClick={()=>navigate("/products")} >User</Menu.Item>
      </Menu>
    </Header>
  );
};
