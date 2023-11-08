import Layout from "./components/Layout"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FullMethodology from "./pages/FullMethodology"
import Team from "./pages/Team"
import NotFound from "./pages/NotFound"
import { useEffect } from "react"

const App = () => {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/methodology" element={<FullMethodology />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
