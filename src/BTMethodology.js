import React from "react"
import { PiListChecksBold } from "react-icons/pi"

const BTMethodology = () => {
  return (
    <section className="bg-[var(--clr-bg-gray)] px-4 py-5">
      <h1>Our Methodology</h1>

      <div className="grid grid-cols-12 gap-5">
        <div className="methodology-card">
          <PiListChecksBold size={30} />
          <h1 className="font-bold">Requirement Analysis</h1>
        </div>
        <div className="methodology-card">
          <PiListChecksBold size={30} />
          <h1 className="font-bold">Requirement Analysis</h1>
        </div>
        <div className="methodology-card">
          <PiListChecksBold size={30} />
          <h1 className="font-bold">Requirement Analysis</h1>
        </div>
      </div>

      <button className="btn-primary block mx-auto my-6">Read More</button>
    </section>
  )
}

export default BTMethodology
