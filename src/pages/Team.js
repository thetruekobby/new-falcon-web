import ourTeam from "../team.json"
const Team = () => {
  return (
    <div className="container mx-auto">
      <h1 className="section-title text-center">Our Team</h1>
      <div className="">
        {ourTeam.teams.map((member, index) => (
          <div key={index} className="relative bg-gray-100 shadow-[1_1_5px_10px_theme('colors.gray.100')] mt-32 w-[60%] mx-auto px-24 py-10">
            <div className="absolute min-w-[160px] w-[20%] aspect-[1/1.1] -left-20 -top-20 shadow-md rounded overflow-hidden">
              <img src={member.image} alt="w-full h-full object-cover object-center" />
            </div>
            <div className="">
              <p className="font-bold text-xl">{member.name}</p>
              <p className="font-semibold">{member.position}</p>
              <p className="mb-2">With Falcon Technologies for{member.employment}</p>
              <p className="">{member.profile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
