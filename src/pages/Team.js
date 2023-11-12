import { useLocation } from "react-router-dom"
import ourTeam from "../db.json"
import { useEffect } from "react"
const Team = () => {
  const location = useLocation()
  useEffect(() => {
    if (!location?.state?.section) return
    window.location.hash = location?.state?.section
  }, [])
  return (
    <section className="container mx-auto pt-10">
      <h1 className="section-title text-center">Meet Our Team</h1>
      <div className="text-justify lg:text-left">
        {ourTeam.teams.map((member, index) => (
          <div
            key={index}
            id={member.id}
            className="relative bg-gray-100 shadow-[0_0_20px_10px_theme('colors.gray.100')] mt-32 w-[90%] xl:w-[60%] mx-auto  px-5 lg:px-24 pb-10 pt-28 lg:pt-10 last:hidden"
          >
            <div className="absolute min-w-[160px] max-w-[200px] w-[80%] lg:w-[20%] aspect-square lg:aspect-[1/1.1] left-0   lg:-left-20 -top-20 shadow-md rounded overflow-hidden bg-orange-50">
              <img src={member.image} alt="team member" className="w-full h-full object-cover object-center" />
            </div>
            <div className="">
              <p className="font-bold text-xl">{member.name}</p>
              <p className="font-semibold">{member.position}</p>
              <p className="mb-2">With Falcon Technologies for {member.employment}</p>
              <p className="">{member.profile}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
