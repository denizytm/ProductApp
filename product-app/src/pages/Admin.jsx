import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { AdminHeaderComponent } from "../shared/admin/AdminHeaderComponent"
import { AdminSidebarComponent } from "../shared/admin/AdminSidebarComponent"
import { BreadCrumbComponent } from "../shared/BreadCrumbComponent";

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
