// Packages
import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
// Styling
import "../../style/customer/CustomerHeaderComponent.css";

const { Header } = Layout;

export const CustomerHeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <Header
      className='customer-header'
    >
      <h1>Product App</h1>
      <Menu
        className='customer-menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}    
      >
        <Menu.Item key={1} onClick={()=>navigate("/admin/products")} >Admin</Menu.Item>
        <Menu.Item key={2} onClick={()=>navigate("/products")} >User</Menu.Item>
      </Menu>
    </Header>
  );
};
