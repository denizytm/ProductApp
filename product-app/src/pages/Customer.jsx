import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { CustomerHeaderComponent } from '../shared/customer/CustomerHeaderComponent';
import { CustomerSidebarComponent } from '../shared/customer/CustomerSidebarComponent';
import { BreadCrumbComponent } from '../shared/BreadCrumbComponent';

const { Content } = Layout;

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
