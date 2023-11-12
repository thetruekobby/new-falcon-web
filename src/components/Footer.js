import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-white  ">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap gap-10 justify-between w-full py-20 pb-5">
        <div className="flex-1 sm:basis-[40%] md:basis-[0%] flex flex-col justify-center item-center">
          <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-20 w-20" />
          <p className="font-bold">Falcon Technologies</p>
        </div>
        <div className="flex-1 sm:basis-[40%] md:basis-[0%]">
          <ul className="space-y-3">
            <li className="font-bold">Services</li>
            <Link
              className="block cursor-pointer"
              to={"fintech"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Fintech Solutions
            </Link>
            <Link
              className="block cursor-pointer"
              to={"mobile"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Mobile and Web Application Development
            </Link>
            <Link
              className="block cursor-pointer"
              to={"ussd"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              USSD Services
            </Link>
          </ul>
        </div>
        <div className="flex-1 sm:basis-[40%] md:basis-[0%]">
          <ul className="space-y-3">
            <li className="font-bold">Quick Links</li>
            <Link
              className="block cursor-pointer"
              to={"about"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              About Us
            </Link>
            <Link
              className="block cursor-pointer"
              to={"portfolio"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Our Portfolio
            </Link>
            <Link
              className="block cursor-pointer"
              to={"contact"}
              // smooth={true}
              offset={-118}
              // duration={500}
              onClick={() => {
                navigate("/")
              }}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center mt-16 border-t py-4">2023 Falcon Technologies All Rights Reserved</p>
    </footer>
  )
}

export default Footer
