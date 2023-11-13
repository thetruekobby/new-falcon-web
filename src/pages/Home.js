import { useEffect, useState, useRef } from "react"
import AboutUs from "../AboutUs"
import BTMethodology from "../BTMethodology"
import BTPortfolio from "../BTPortfolio"
import BTServices from "../BTServices"
import ContactUs from "../ContactUs"
import Header from "../components/Header"
import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
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

    return () => {
      observeElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])
  useEffect(() => {
    if (!location?.state?.hash) return
    window.location.hash = location?.state?.hash
  }, [])

  return (
    <div>
      <Header />
      <AboutUs />
      <BTServices />
      <BTMethodology />
      <BTPortfolio />
      <ContactUs/>
    </div>
  )
}

export default Home
