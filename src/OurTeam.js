import ourTeam from "./team.json"


const OurTeam = () => {
  return (
    <div>
      <h1 className="section-title">Our Team</h1>
      <div className="">
        {ourTeam.teams.map((member, index) => (
          <div key={index}>
            <div className="">
              <img src={member.image} alt="" />
            </div>
            <div className="">
              <p className="">{member.position}</p>
              <p className="">{member.profile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam