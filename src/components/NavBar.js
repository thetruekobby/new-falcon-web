import { Link, animateScroll as scroll } from "react-scroll"
import { useEffect, useRef } from "react"
import { useLocation, useNavigate, NavLink } from "react-router-dom"

import { HiOutlineMenu } from "react-icons/hi"
import { IoCloseSharp } from "react-icons/io5"

const NavBar = ({nav}) => {
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
  console.log("🚀 ~ file: NavBar.js:22 ~ NavBar ~ checker:", checker)
  const mobileNav = useRef()

 

  const removeTransition = () => {
    if (checker.current !== 0) return
    console.log("🚀 ~ file: NavBar.js:35 ~ removeTransition ~ removeTransition:")
    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((element) => {
      element.classList.remove("fade-in")
      // element.style.transitionProperty = "none"
      // element.style.transform = "translateX(0)"
      // element.style.opacity = "1"
    })
    checker.current = 1
  }

  useEffect(() => {
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty("--nav-height", nav.current.offsetHeight + "px")
    }
    setHeaderHeight()
    window.addEventListener("resize", setHeaderHeight)
    return () => {
      window.removeEventListener("resize", setHeaderHeight)
    }
  }, [])

  const openMobileNav = () => {
    // document.querySelector("body").style.overflowY = "hidden"
    mobileNav.current.classList.add("show")
  }
  const closeMobileNav = () => {
    // document.querySelector("body").style.overflowY = "visible"
    mobileNav.current.classList.remove("show")
  }

  const updateUrl = (option) => {
    if (location.pathname === "/") return window.history.replaceState({}, document.title, window.location.href.split("#")[0])

    navigate("/", { state: { hash: option.id } })
  }

  return (
    <nav id="nav" ref={nav} className="bg-white fixed left-0 top-0 right-0 z-50 border-b border-gray-100">
      <div className="container flex justify-between items-center py-3 mx-auto">
        <NavLink to="/" className="flex flex-row items-center cursor-pointer" reloadDocument>
          <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-10 md:h-20" />
          <span className="  md:hidden xl:block text-lg xl:text-2xl font-bold">Falcon Technologies</span>
        </NavLink>
        <ul className="items-center gap-5 capitalize text-xl whitespace hidden md:flex ">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              to={option.id}
              // to={option.id}
              // spy={true}
              //smooth has been commented out because it is being handled by the css
              // smooth={true}
              offset={-nav?.current?.offsetHeight}
              // duration={500}
              // onClick={() => {
              // scroll.scrollTo(300)
              // removeTransition()
              // navigate("/")
              // testRef.current.scrollIntoView({
              //   behavior: "smooth",
              // })
              // scroll.scrollTo(testRef)
              // }}
              onClick={() => {
                updateUrl(option)
              }}
              className={option.id === "contact" ? "btn-primary" : "p-2 font-semibold whitespace-nowrap cursor-pointer"}
            >
              {option.label}
            </Link>
          ))}
        </ul>
        <HiOutlineMenu size={30} className="md:hidden cursor-pointer" onClick={openMobileNav} />
        {/* mobile menu */}
        <div ref={mobileNav} className="mobile-nav md:hidden fixed inset-0  capitalize translate-x-full transition-transform bg-black/10">
          <div className="ml-auto w-4/5 h-full bg-white px-4 py-4">
            <IoCloseSharp size={30} className="ml-auto cursor-pointer" onClick={closeMobileNav} />
            <ul>
              {navOptions.map((option, i) => (
                <Link
                  key={i}
                  to={option.id}
                  // spy={true}
                  //smooth has been commented out because it is being handled by the css
                  // smooth={true}
                  offset={-nav?.current?.offsetHeight}
                  // duration={500}
                  className="mb-2 block"
                  onClick={() => {
                    closeMobileNav()
                    updateUrl(option)
                  }}
                >
                  {option.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
