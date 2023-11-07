import React from "react"

const BTServices = () => {
  return (
    <section id="services" className="container mx-auto py-8">
      <h1 className="section-title">Our Services</h1>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last animate-slide-in">
          <div className="">
            <h2 className="section-subtitle">Fintech solutions</h2>
            <p>
              Falcon Technologies is a forward-thinking fintech company driven by a passion for innovation. <br /> <br /> With a commitment to
              delivering cutting-edge solutions, we have become a trusted partner for those seeking to leverage technology for busines success. <br />{" "}
              <br />
              Our fintech solution offers a wide range of financial services, including digital wallets, payment processing, and financial education.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last md:order-first animate-slide-in">
          <div className="">
            <h2 className="section-subtitle mb-4">mobile and web development</h2>
            <p>
              Our team of skilled developers, designers, and strategists has extensive experience in building mobile apps across various platforms and
              industries. <br />
              <br />
              We prioritize user experience and design, ensuring that your app is not only functional but also visually appealing and intuitive.{" "}
              <br />
              <br /> We stay up to date with the latest mobile technologies and trends to provide you with the most advanced solutions.
            </p>
          </div>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last animate-slide-in">
          <div className="">
            <h2 className="section-subtitle mb-4">USSD Technology</h2>
            <p>
              Falcon Technologies USSD Developer is a leading USSD development company that thrives on innovation and technical excellence. <br /><br /> With a
              deep understanding of USSD technology, we create interactive and efficient USSD solutions. <br /><br /> Our team of USSD experts brings a wealth of
              experience in developing USSD applications across various sectors, including finance, healthcare, education, and more.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default BTServices
