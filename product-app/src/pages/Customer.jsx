import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { CustomerHeaderComponent } from '../components/customer/CustomerHeaderComponent';
import { CustomerSidebarComponent } from '../components/customer/CustomerSidebarComponent';
import { BreadCrumbComponent } from '../components/global/BreadCrumbComponent';
import { ContentComponent } from '../components/global/ContentComponent';

const { Header, Content, Sider } = Layout;


export const Customer = () => {
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout  >
      <CustomerHeaderComponent />
      <Layout>
        <CustomerSidebarComponent />
        <Layout
         style={{
          padding : "25px",
          paddingLeft: '300px',
         }}
        >
          <BreadCrumbComponent />
          <Content
           style={{
           padding: 24,
           margin: 0,
           minHeight: 280,
           background: colorBgContainer,
           borderRadius: borderRadiusLG,

          }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
