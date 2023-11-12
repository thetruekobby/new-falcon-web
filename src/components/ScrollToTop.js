import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (pathname === "/") return
    document.title = `Falcon Technologies | ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`
  }, [pathname])
  return null
}

export default ScrollToTop
