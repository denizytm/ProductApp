import React from 'react'
import { Outlet } from 'react-router-dom'

export const Hello = () => {
  return (
    <>
    <div>Hello</div>
    <Outlet />
    </>
  )
}
