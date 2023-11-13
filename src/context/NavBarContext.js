import { useContext, useState, createContext } from "react"

const NavBarContext = createContext()

export const NavBarContextProvider = ({ children }) => {
  const [navHeight, setNavHeight] = useState(118)

  return <NavBarContext.Provider value={{ navHeight, setNavHeight }}>{children}</NavBarContext.Provider>
}

export const useNavbarContext = () => {
  const context = useContext(NavBarContext)
  if (!context) throw Error("NavbarContext must be called within the navbar context provider")
  return context
}

export default NavBarContext
