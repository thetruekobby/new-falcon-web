import Layout from "./components/Layout"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import FullMethodology from "./pages/FullMethodology"
import Team from "./pages/Team"
import NotFound from "./pages/NotFound"
import { useRef, useState } from "react"

const App = () => {
  // const location = useLocation()
  // const methodologypage = location.pathname === "/methodology"
  // document.documentElement.style.scrollBehavior = methodologypage ? "smooth" : "auto"


  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home  />} />
          <Route path="/team" element={<Team />} />
          <Route path="/methodology" element={<FullMethodology />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
