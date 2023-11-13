import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()
  if (pathname === "/") {
    document.title = `Falcon Technologies`
    document.documentElement.style.scrollPadding = "var(--nav-height)"
  } else {
    document.title = `Falcon Technologies | ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`
    document.documentElement.style.scrollPadding = "calc(var(--nav-height) + 128px)"
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default ScrollToTop
