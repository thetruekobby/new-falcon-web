import { PiListChecksBold } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import db from "./db.json"
console.log("🚀 ~ file: BTMethodology.js:4 ~ db:", db)

const BTMethodology = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-[var(--clr-bg-gray)] px-24 py-5">
      <h1 className="section-title mb-7 fade-in">Our Methodology</h1>

      <div className="grid grid-cols-12 gap-x-9 gap-y-9">
        {db?.methodology?.map((methodology, index) => (
          <div style={{ "--delay": `${index * 0.1}s` }} key={index} className="methodology-card px-3 pt-3 fade-in">
            {/* <PiListChecksBold size={30} /> */}
            <div className="h-48 w-full">
              <img src={methodology.image} alt="methodology" className="w-full h-full object-cover object-[0%_15%]" />
            </div>
            <h1 className="font-bold">{methodology.name}</h1>
          </div>
        ))}
      </div>

      <button
        className="btn-primary block mx-auto my-6 fade-in"
        onClick={() => {
          navigate("/methodology")
        }}
      >
        Read More
      </button>
    </section>
  )
}

export default BTMethodology
