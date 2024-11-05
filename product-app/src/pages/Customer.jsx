// Packages
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
// Components
import { CustomerHeaderComponent } from '../components/customer/CustomerHeaderComponent';
import { CustomerSidebarComponent } from '../components/customer/CustomerSidebarComponent';
import { BreadCrumbComponent } from '../components/BreadCrumbComponent';
// Styling
import "../style/customer/Customer.css"

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
          className='customer-layout'
        >
          <BreadCrumbComponent />
          <Content
           className='customer-content'
           style={{
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
