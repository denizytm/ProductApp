import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { AdminHeaderComponent } from '../components/admin/AdminHeaderComponent';
import { AdminSidebarComponent } from '../components/admin/AdminSidebarComponent';
import { BreadCrumbComponent } from '../components/global/BreadCrumbComponent';
import { ContentComponent } from '../components/global/ContentComponent';

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
