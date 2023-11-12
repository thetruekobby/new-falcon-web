import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useEffect, useRef } from "react"

const Layout = ({ testRef }) => {
  const nav = useRef()
  return (
    <div className="bg-white">
      <NavBar nav={nav} />
      <div className="mt-[var(--nav-height)]">
        <Outlet />
      </div>
      <Footer nav={nav} />
    </div>
  )
}

export default Layout
