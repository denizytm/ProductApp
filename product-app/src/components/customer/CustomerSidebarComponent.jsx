// Packages
import React, { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChartOutlined } from '@ant-design/icons';

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

export const CustomerSidebarComponent = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [collapsed, setCollapsed] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState("");

    const items = [ // sidebar'da bulunacak olan url'lerin ve butonların belirlenmesi
        getItem('Product', 'sub2', <PieChartOutlined />, null, [
            getItem('All Products', '3', null, () => navigate('/products'), null, '/products'),
            getItem('My Favorites', '4', null, () => navigate('/products/favorites'), null, '/products/favorites'),
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
        style={{ minHeight: "100vh", position: "fixed", top: "64px", zIndex: "5" }} 
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
