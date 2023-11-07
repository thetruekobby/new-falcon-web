import ourTeam from "./team.json"


const OurTeam = () => {
  return (
    <div>
      <h1 className="section-title">Our Team</h1>
      <div className="">
        {ourTeam.teams.map((member, index) => (
          <div key={index}>
            <img src={member.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam