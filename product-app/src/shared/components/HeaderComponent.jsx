import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export const HeaderComponent = () => {
    
    const navigate = useNavigate();

    return (
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height : '50px',
          color : 'white',
          paddingLeft : 20
        }} 
      >
        <h1 style={{marginRight : 20}} >Product App</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
          }}
          defaultSelectedKeys={1}
        >
          <Menu.Item onClick={()=>navigate("/admin/users")}  key="1">Users</Menu.Item>
          <Menu.Item onClick={()=>navigate("/admin/products")} key="2">Products</Menu.Item>
        </Menu>
      </Header>
    );
};
