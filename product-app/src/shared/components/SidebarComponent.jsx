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
            <Menu
              style={{gap : 10}} 
              theme='dark' 
              mode="inline" 
              defaultSelectedKeys={['1']}
            >
                <Menu.Item style={{marginBottom : 10}} key="1" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}`)}>
                    <span style={{marginLeft : "5px"}} >{textTitle}s</span>
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} onClick={() => navigate(`/admin/${title}/add`)}>
                    <span style={{marginLeft : "5px"}} >Add {textTitle}</span>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
