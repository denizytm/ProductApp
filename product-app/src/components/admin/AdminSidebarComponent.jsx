import React, { useState } from 'react';
import { Menu, Layout, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const { Sider } = Layout;

function getItem(label, key, icon, onClick, children) {
    return {
      key,
      icon,
      children,
      label,
      onClick, // onClick eventini burada ekliyoruz
    };
}

export const AdminSidebarComponent = ({title}) => {

    const navigate = useNavigate();

    const textTitle = title.charAt(0).toUpperCase() + title.slice(1,title.length - 1)

    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

      const items = [
        getItem('Option 1', '1', <PieChartOutlined />, () => navigate('/option1')),
        getItem('User', 'sub1', <UserOutlined />, null, [
          getItem('All Users', '3', null, () => navigate('/admin/users')),
          getItem('Create User', '4', null, () => navigate('/admin/users/add')),
        ]),
        getItem('Product', 'sub2', <UserOutlined />, null, [
          getItem('All Products', '5', null, () => navigate('/admin/products')),
          getItem('Create Product', '6', null, () => navigate('/admin/products/add')),
        ]),
    ];

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
     
    );
}