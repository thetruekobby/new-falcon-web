import { Link } from "react-scroll"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navOptions = [
    { label: "home", id: "hero" },
    { label: "about us", id: "about" },
    { label: "services", id: "services" },
    { label: "portfolio", id: "portfolio" },
    { label: "contact us", id: "contact" },
  ]

  const navigate = useNavigate()

  const nav = useRef()

  // useEffect(() => {
  //   const setHeaderHeight = () => {
  //     document.documentElement.setProperty("--nav-height", nav.current.offsetHeight + "px")
  //   }
  //   window.addEventListener("resize", setHeaderHeight)
  //   return () => {
  //     window.removeEventListener("resize", setHeaderHeight)
  //   }
  // }, [])

  return (
    <nav id="nav" ref={nav} className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container flex justify-between py-3 mx-auto">
        <div className="flex flex-row items-center">
          <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-20 w-20" />
          <span className="text-2xl font-bold">Falcon Technologies</span>
        </div>
        <ul className="flex items-center gap-5 capitalize text-xl">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              activeClass="active"
              to={option.id}
              spy={true}
              smooth={true}
              offset={option.label === "home" ? -105 : -70}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
              /* onSetActive={handleSetActive} */ className={
                option.id === "contact" ? "btn-primary" : "p-2 font-semibold whitespace-nowrap cursor-pointer"
              }
            >
              {option.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
