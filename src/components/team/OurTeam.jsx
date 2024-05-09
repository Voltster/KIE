import React from 'react'
import TeamCard from './TeamCard'

const OurTeam = () => {
  return (
    <div className='my-[5vh] md:my-[4vw]'>
      <TeamCard 
        customClass={""}
        src={'https://i.pinimg.com/564x/d5/f5/fc/d5f5fca3d27ccd8e9437c564b5701286.jpg'}
        alt={"teams"}
        heading={'Anil Verma'}
        text={`Graphic Designer Of Koncept India Enterprises`}
        sectionHeading={'Our Team'}
        mainTitle={'Unlimited Creativity With Our Professional Team'}
        bgColor={"bg-blue-500"}
      />
       <TeamCard 
        customClass={"reverse"}
        src={'https://i.pinimg.com/564x/26/4b/2f/264b2f4eb28380339a65cc2afe1f2040.jpg'}
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
