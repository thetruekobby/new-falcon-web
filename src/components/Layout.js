import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useEffect, useRef } from "react"

const Layout = ({ testRef }) => {
  return (
    <div className="bg-white">
      <NavBar  />
      <div className="mt-[var(--nav-height)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
