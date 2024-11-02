import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { SidebarComponent } from './SidebarComponent';
import { AdminSidebarComponent } from '../../components/admin/AdminSidebarComponent';
import { AdminHeaderComponent } from '../../components/admin/AdminHeaderComponent';
import { BreadCrumbComponent } from '../../components/global/BreadCrumbComponent';
import { ContentComponent } from '../../components/global/ContentComponent';
const { Header, Content, Sider } = Layout;

const items1 = ['Admin', 'User'].map((key) => ({
  key,
  label: `${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const Hello = () => {

  return (
    <Layout>
        <AdminHeaderComponent {...{items1}} />
      <Layout>
          <AdminSidebarComponent {...{title : "naber"}} />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <BreadCrumbComponent />
          <ContentComponent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Hello;