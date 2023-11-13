import React from "react"

const BTPortfolio = () => {
  const portfolio = [
    { title: "keed payment gateway system", image: "/img/clients/keedpay.png", description: "" },
    { title: "Fuel Automation Merchant payment", image: "/img/clients/automation.jpg", description: "" },
    { title: "keed agent loan system", image: "/img/clients/keedpay.png", description: "" },
  ]
  return (
    <section id="portfolio" className="  pt-16 pb-10 bg-gray-50">
      <h1 className="section-title mb-7 fade-in">Our Portfolio</h1>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))]  gap-5 ">
        {portfolio.map((portfolio, index) => (
          <div
            style={{ "--delay": `${index * 0.2}s` }}
            key={index}
            className="px-5 border flex hover:shadow-md rounded-lg bg-white w-full aspect-square max-h-[250px] relative fade-in"
          >
            <img src={portfolio.image} alt="project" className="h-28 min-h-28 min-w-[100px] object-contain block mx-auto" />
            <p className="text-center font-semibold capitalize absolute bottom-3 left-0 right-0">{portfolio.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BTPortfolio
