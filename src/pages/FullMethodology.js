import React, { useEffect, useState } from "react"
import db from "../db.json"
import { useLocation } from "react-router-dom"

const FullMethodology = () => {
  const location = useLocation()
  useEffect(() => {
    if (!location?.state?.section) return
    window.location.hash = location?.state?.section
  }, [])
  return (
    <div id="full-methodology" className="container mx-auto pt-10">
      <h1 className="section-title text-center">Our Methodology</h1>
      <div className="">
        {db.methodology.map((methodology, index) => (
          <div
            key={index}
            id={methodology.id}
            className="relative bg-gray-100 shadow-[0_0_20px_10px_theme('colors.gray.100')] mt-32 w-[60%] mx-auto px-24 py-10"
          >
            <div className="absolute min-w-[160px] w-[20%] aspect-[1/1.1] -left-20 -top-20 shadow-md rounded overflow-hidden">
              <img src={methodology.image} class="w-full h-full object-cover object-center" alt="methodologyimage" />
            </div>
            <div className="">
              <p className="font-bold text-xl mb-2">{methodology.name}</p>
              <p className="">{methodology.description}</p>
              {/* <p className="">{methodology.profile}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FullMethodology
