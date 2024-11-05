// Packages
import React from 'react'
import { Breadcrumb } from 'antd'
// Styling
import "../style/global/BreadCrumbComponent.css";

export const BreadCrumbComponent = () => {
  return (
    <Breadcrumb
      className='bread-crumb'
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
    />
  )
}
