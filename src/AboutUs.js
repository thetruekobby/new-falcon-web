import React, { Fragment } from "react"
import ourTeam from "./db.json"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-5 pr-4 py-14 pt-20">
          <div className="flex-[1] lg:flex-1 order-last md:order-first ">
            <h1 className="section-title mb-4 fade-in">About Us</h1>
            <div className="space-y-6 text-lg">
              <p className="fade-in">
                Falcon Technologies Web Development is a forward-thinking web development company known for its technical expertise and commitment to
                excellence. We bring creativity and innovation to every web project we undertake.
              </p>
              <p className="fade-in">
                Our mission is to democratize web development by providing user-friendly and powerful software solutions that enable anyone to create
                stunning websites and web applications.
              </p>
            </div>
          </div>
          <div className="flex-1 order-first md:order-last z-10">
            <img src="/img/stock/linkedin-sales-solutions-EI50ZDA-l8Y-unsplash.jpg" alt="" className="w-full object-contain max-h-[350px]" />
          </div>
        </div>
        <div className="p-12">
          <h1 className="section-title text-center mb-14 fade-in">Meet Our Team</h1>
          <div className="flex flex-row justify-center mt-5 items-center space-x-5">
            {ourTeam.teams.map((team, i) => (
              <div
                key={i}
                style={{ "--delay": `${i * 0.1}s` }}
                className="bg-white border rounded-lg overflow-hidden cursor-pointer hover:shadow-md fade-in flex-shrink-0 flex-1"
              >
                <div className="">
                  <img
                    src={team.image}
                    style={{ objectPosition: team["object-position"] }}
                    alt="Profile"
                    className={`w-full h-48 object-cover object-center `}
                  />
                </div>
                <div className="p-3 text-center">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{team.name}</h2>
                  <div className="tracking-wide text-sm text-gray-400 font-semibold">{team.position}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="btn-primary mt-6 fade-in"
              onClick={() => {
                navigate("/team")
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
