import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { HeaderComponent } from '../shared/components/HeaderComponent';
import { SidebarComponent } from '../shared/components/SidebarComponent';

const { Header, Content, Sider } = Layout;

export const Admin = () => {

  const navigate = useNavigate();

  const path = useLocation();
  const title = path.pathname.split("/")[2];

  return (
    <Layout>
      <Layout style={{
        height : "50px",
        width : "100%",
        position : "fixed",
        top : 0
      }} >
        <HeaderComponent />
      </Layout>
      <Layout >
        <SidebarComponent {...{title}} />
      </Layout>
      <Layout style={{
        marginLeft : "200px",
        marginTop : "50px"
      }} >
        <h1 style={{margin : "25px"}} >{title}</h1>
        <Outlet /> {/* Outlet, "/admin" path'inden sonra girilecek olan path değerine göre diğer module dosyalarında bulunan Componenti buraya eklememi sağlar */}
      </Layout>
    </Layout>
  )
}
