// Packages
import React from 'react'
import { Layout, theme } from 'antd';
// Styling
import "../style/global/ContentComponent.css";
const { Header, Content, Sider } = Layout;

export const ContentComponent = (Data) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

  return (
    <Content
    className='content-component'
    style={{
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >
    <Data />
  </Content>
  )
}
