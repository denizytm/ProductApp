import React from 'react'
import { Breadcrumb } from 'antd'

export const BreadCrumbComponent = () => {
  return (
    <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: 'List',
              },
              {
                title: 'App',
              },
            ]}
            style={{
              margin: '16px 0',
            }}
          />
  )
}
