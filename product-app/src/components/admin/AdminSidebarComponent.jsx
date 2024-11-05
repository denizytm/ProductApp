// Packages
import React, { useEffect, useState } from 'react';
import { Menu, Layout, theme } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons';
// Styling
import "../../style/admin/AdminSidebarComponent.css";

const { Sider } = Layout;

function getItem(label, key, icon, onClick, children, address) {
    return {
        key,
        icon,
        children,
        label,
        onClick, 
        address
    };
}

export const AdminSidebarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [collapsed, setCollapsed] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const items = [
        getItem('User', 'sub1', <UserOutlined />, null, [
            getItem('All Users', '1', null, () => navigate('/admin/users'), null, '/admin/users'),
            getItem('Create User', '2', null, () => navigate('/admin/users/add'), null, '/admin/users/add'),
        ]),
        getItem('Product', 'sub2', <PieChartOutlined />, null, [
            getItem('All Products', '3', null, () => navigate('/admin/products'), null, '/admin/products'),
            getItem('Create Product', '4', null, () => navigate('/admin/products/add'), null, '/admin/products/add'),
        ]),
    ];

    useEffect(() => {
        const matchingItem = items.flatMap(item => item.children || [item]).find(subItem => subItem.address === location.pathname);
        if (matchingItem) {
            setSelectedAddress(matchingItem.key); // bulunan adrese göre selectedAddress seçiyoruz 
        }
    }, [location.pathname]);

    return (
      <Sider 
        className='admin-sider'
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}>
        <Menu 
          theme="dark" 
          selectedKeys={[selectedAddress]} 
          mode="inline" 
          items={items} 
        />
      </Sider>
    );
};
