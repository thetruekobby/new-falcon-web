import React from "react"

const BTPortfolio = () => {
  const portfolio = [
    { title: "keedpay payment gateway system", image: "/img/clients/keedpay.png", description: "" },
    { title: "Fuel Automation Merchant payment", image: "/img/clients/automation.jpg", description: "" },
    { title: "keed agent loan", image: "/img/clients/keedpay.png", description: "" },
  ]
  return (
    <section id="portfolio" className="  pt-16 pb-10 bg-gray-50">
      <h1 className="section-title mb-7 fade-in">Our Portfolio</h1>
      <div className="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-5 justify-items-center">
        {portfolio.map((portfolio, index) => (
          <div
            style={{ "--delay": `${index * 0.2}s` }}
            key={index}
            className="pt-7 px-5 border flex justify-center  hover:shadow-md rounded-lg bg-white relative aspect-square fade-in"
          >
            <img src={portfolio.image} alt="project" className="h-28 min-h-28 min-w-[100px] object-contain" />
            <p className="text-center font-semibold capitalize absolute bottom-3 left-0 right-0">{portfolio.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BTPortfolio
