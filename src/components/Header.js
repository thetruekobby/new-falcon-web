const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center pr-3">
      <div className="flex-[1] lg:flex-1 order-last md:order-first">
        <h1 className="capitalize font-bold text-6xl mb-4">software solutions for ambitious ideas</h1>
        <h2 className="font-semibold text-[var(--clr-text-secondary)] text-lg mb-4">
          Unleashing the power of code to transform your vision to reality.
        </h2>
        <button className="btn-primary">get in touch</button>
      </div>
      <div className="img-outline-right flex-1 order-first md:order-last">
        <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
      </div>
    </div>
  )
}

export default Header
