import { Link } from "react-scroll"
const Header = () => {
  return (
    <section id="hero" className="bg-gray-100 ">
      <div className="container flex flex-col md:flex-row gap-5 items-center pr-4 py-14 pt-20 mx-auto">
        <div className="flex-[1] lg:flex-1 order-last md:order-first animate-slide-in">
          <h1 className="capitalize font-bold text-5xl mb-4">software solutions for ambitious ideas</h1>
          <h2 className="font-semibold text-[var(--clr-text-secondary)] text-2xl mb-10">
            Unleashing the power of code to transform your vision to reality.
          </h2>
          <Link to="get-in-touch" offset={-200} className="btn-primary">
            get in touch
          </Link>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last animate-slide-in2 z-10 self-stretch">
          <img src="/img/stock/twopeople.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Header
