import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export const SidebarComponent = ({title}) => {

    const navigate = useNavigate();

    const textTitle = title.charAt(0).toUpperCase() + title.slice(1,title.length - 1)

    return (
        <Sider
            style={{
                height: '100vh',
                position: 'fixed',
                left: 0,
                top : "50px",
                overflow: 'auto',
                background: '#001529', // default Ant Design dark color
            }}
            width={200}
        >
            <div className="logo" style={{ height: '32px', margin: '16px', color: '#fff', fontSize: '18px', textAlign: 'center' }}>
                Admin
            </div>
            <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item style={{overflow : "visible"}} key="1" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}`)}>
                    <span style={{marginLeft : "5px"}} >{textTitle}s</span>
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}/add`)}>
                    <span style={{marginLeft : "5px"}} >Add {textTitle}</span>
                </Menu.Item>
                <Menu.Item key="3" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}/edit`)}>
                    <span style={{marginLeft : "5px"}} >Edit {textTitle}</span>
                </Menu.Item>
                <Menu.Item key="4" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}/delete`)}>
                    <span style={{marginLeft : "5px"}} >Delete {textTitle}</span>
                </Menu.Item>
                <Menu.Item style={{color : "red"}} >Hello</Menu.Item>
            </Menu>
        </Sider>
    );
}
