import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"

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
