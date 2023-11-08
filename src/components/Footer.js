import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-white">
      <div className="container mx-auto flex flex-wrap justify-between w-full py-20 pb-5">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 flex flex-col justify-center item-center">
          <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-20 w-20" />
          <p className="font-bold">Falcon Technologies</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
          <ul className="space-y-3">
            <li className="font-bold">Services</li>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"fintech"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Fintech Solutions
            </Link>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"mobile"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Mobile and Web Application Development
            </Link>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"ussd"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              USSD Services
            </Link>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
          <ul className="space-y-3">
            <li className="font-bold">Quick Links</li>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              About Us
            </Link>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"portfolio"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Our Portfolio
            </Link>
            <Link
              className="block cursor-pointer"
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center mt-16 border-t p-4">2023 Falcon Technologies All Rights Reserved</p>
    </footer>
  )
}

export default Footer
