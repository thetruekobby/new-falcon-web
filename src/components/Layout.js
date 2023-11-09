import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useEffect } from "react"

const Layout = () => {
  

  return (
    <div className="container-full bg-white">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
