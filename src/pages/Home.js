import { useEffect, useState } from "react"
import AboutUs from "../AboutUs"
import BTMethodology from "../BTMethodology"
import BTPortfolio from "../BTPortfolio"
import BTServices from "../BTServices"
import ContactUs from "../ContactUs"
import Header from "../components/Header"

const Home = () => {
  useEffect(() => {
    const observeElements = document.querySelectorAll(".fade-in")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )
    observeElements.forEach((element) => {
      observer.observe(element)
    })
  }, [])

  return (
    <div>
      <Header />
      <AboutUs />
      <BTServices />
      <BTMethodology />
      <BTPortfolio />
      <ContactUs />
    </div>
  )
}

export default Home
