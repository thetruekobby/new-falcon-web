import { Link } from "react-scroll"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const NavBar = () => {
  const location = useLocation()
  const navOptions = [
    { label: "home", id: "hero" },
    { label: "about us", id: "about" },
    { label: "services", id: "services" },
    { label: "portfolio", id: "portfolio" },
    { label: "contact us", id: "contact" },
  ]

  const navigate = useNavigate()

  const checker = useRef(0)

  const nav = useRef()

  const removeTransition = () => {
    if (checker.current !== 0) return
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((element) => {
      element.classList.remove("fade-in")
      // element.style.transitionProperty = "none"
      // element.style.transform = "translateX(0)"
      // element.style.opacity = "1"
    })
    checker.current = checker.current + 1
  }

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
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={() => {
            window.location.assign("/")
          }}
        >
          <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-20 w-20" />
          <span className="text-2xl font-bold">Falcon Technologies</span>
        </div>
        <ul className="flex items-center gap-5 capitalize text-xl">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              to={option.id}
              // spy={true}
              //smooth has been commented out because it is being handled by the css
              smooth={true}
              offset={option.label === "home" ? -105 : -70}
              duration={500}
              onClick={() => {
                removeTransition()
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
