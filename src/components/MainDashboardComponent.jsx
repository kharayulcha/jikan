import React from 'react'
import { Outlet } from 'react-router-dom'

const MainDashboardComponent = () => {
  return (
    <>
    <div style={{height: "100vh", width: "100%"}}>
      <Outlet/>
    </div>
    </>
  )
}

export default MainDashboardComponent
