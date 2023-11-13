import React, { useEffect, useState } from "react"
import db from "../db.json"
import { useLocation } from "react-router-dom"

const FullMethodology = () => {
  const location = useLocation()
  // useEffect(() => {
  //   if (!location?.state?.section) return
  //   window.location.hash = location?.state?.section
  // }, [])
  return (
    <section id="full-methodology" className="container mx-auto pt-10">
      <h1 className="section-title text-center">Our Methodology</h1>
      <div className="">
        {db.methodology.map((methodology, index) => (
          <div
            key={index}
            id={methodology.id}
            className="relative bg-gray-100 shadow-[0_0_20px_10px_theme('colors.gray.100')] mt-32 w-[90%] xl:w-[60%] mx-auto  px-5 lg:px-24 pb-10 pt-28 lg:pt-10"
          >
            <div className="absolute min-w-[160px] max-h-[200px] w-[80%] lg:w-[20%] aspect-video lg:aspect-[1/1.1] left-1/2 -translate-x-1/2 lg:translate-x-0  lg:-left-20 -top-20 shadow-md rounded overflow-hidden">
              <img
                src={methodology.image}
                className={`w-full h-full  object-cover ${methodology.id === 1 ? "object-[0%_15%]" : "object-[0%_15%] md:object-center"}`}
                alt="methodologyimage"
              />
            </div>
            <div className="">
              <p className="font-bold text-xl mb-2">{methodology.name}</p>
              <p className="">{methodology.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FullMethodology
