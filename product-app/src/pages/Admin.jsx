// Packages
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
// Components
import { AdminHeaderComponent } from "../components/admin/AdminHeaderComponent"
import { AdminSidebarComponent } from "../components/admin/AdminSidebarComponent"
import { BreadCrumbComponent } from "../components/BreadCrumbComponent";
// Styling
import "../style/admin/Admin.css"

const { Header, Content, Sider } = Layout;

const items1 = ['Admin', 'User'].map((key,value) => ({
  key : value + 1,
  label: `${key}`,
}));

export const Admin = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout  >
      <AdminHeaderComponent {...{items1}} />
      <Layout>
        <AdminSidebarComponent />
        <Layout 
         className='admin-layout'
        >
          <BreadCrumbComponent />
          <Content
           className='admin-content'
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
