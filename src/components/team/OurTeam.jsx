import React from 'react'
import TeamCard from './TeamCard'
import team from "../../assets/team.jpg"
import team1 from "../../assets/team1.jpg"

const OurTeam = () => {
  return (
    <div className='my-[5vh] md:my-[4vw]'>
      <TeamCard 
        customClass={""}
        src={team}
        alt={"teams"}
        heading={'Anil Verma'}
        text={`Graphic Designer Of Koncept India Enterprises`}
        sectionHeading={'Our Team'}
        mainTitle={'Unlimited Creativity With Our Professional Team'}
        bgColor={"bg-blue-500"}
      />
       <TeamCard 
        customClass={"reverse"}
        src={team1}
        alt={"teams"}
        heading={'Pandey Ji'}
        text={`Senior Graphic Designer Of Koncept India Enterprises`}
        mainPara={"Our team of skilled professionals, equipped with advanced PCs and  Macintosh systems, is committed to crafting designs that captivate and  communicate"}
        bgColor="bg-red-500"
      />
    </div>
  )
}

export default OurTeam
