import React from 'react'
import { Layout, theme } from 'antd';
const { Header, Content, Sider } = Layout;

export const ContentComponent = (Data) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

  return (
    <Content
    style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
      background: colorBgContainer,
      borderRadius: borderRadiusLG,
    }}
  >
    <Data />
  </Content>
  )
}
