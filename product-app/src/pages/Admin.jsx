import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd'
import { AdminHeaderComponent } from '../components/admin/AdminHeaderComponent';
import { AdminSidebarComponent } from '../components/admin/AdminSidebarComponent';
import { BreadCrumbComponent } from '../components/global/BreadCrumbComponent';
import { ContentComponent } from '../components/global/ContentComponent';

const { Header, Content, Sider } = Layout;

const items1 = ['Admin', 'User'].map((key) => ({
  key,
  label: `${key}`,
}));

export const Admin = () => {

  const navigate = useNavigate();

  const path = useLocation();
  const title = path.pathname.split("/")[2];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AdminHeaderComponent {...{items1}} />
      <Layout>
        <AdminSidebarComponent />
        <Layout
         style={{
          padding: '0 24px 24px',
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
