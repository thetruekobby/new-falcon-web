import { Link } from "react-scroll"
const Header = () => {
  return (
    <div id="hero" className="bg-gray-100">
      <div className="container flex flex-col md:flex-row gap-5 items-center pr-4 py-14 pt-20 mx-auto">
        <div className="flex-[1] lg:flex-1 order-last md:order-first animate-slide-in">
          <h1 className="capitalize font-bold text-5xl mb-4">software solutions for ambitious ideas</h1>
          <h2 className="font-semibold text-[var(--clr-text-secondary)] text-2xl mb-4">
            Unleashing the power of code to transform your vision to reality.
          </h2>
          <Link to="contact" smooth={true} offset={-90} className="btn-primary mt-14">
            get in touch
          </Link>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last animate-slide-in2 z-10">
          <img src="/img/stock/allgo-an-app-for-plus-size-people-eqlRthvN188-unsplash.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Header
