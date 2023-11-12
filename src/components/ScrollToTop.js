import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (pathname === "/") {
      document.documentElement.style.scrollPadding = "var(--nav-height)"
    } else {
      document.title = `Falcon Technologies | ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`
      document.documentElement.style.scrollPadding = "200px"
    }
  }, [pathname])
  return null
}

export default ScrollToTop
