import React from 'react';

const TeamCard = ({
  customClass,
  src,
  alt,
  heading,
  text,
  sectionHeading,
  mainTitle,
  mainPara,
  bgColor
}) => {
  const isReversed = customClass && customClass.includes('reverse'); 

  return (
    <div
      className={`w-11/12 mx-auto block md:flex flex-row gap-20 ${isReversed ? 'flex-row-reverse' : customClass}`}
      data-aos="zoom-in-down"
    >
      {/* Left Section */}
      <div className={`w-full  md:w-[50%] md:flex flex-row items-start justify-center overflow-hidden rounded-md md:rounded-none ${customClass}`}>
        <img src={src} alt={alt} loading='lazy' className=' md:w-3/6' />
        <span className={`md:w-3/6 h-full   flex flex-col justify-center items-center py-4 rounded-b-[10vw] md:rounded-none ${bgColor}`} >
          <h4 className='text-white'>{heading}</h4>
          <p className='w-[60%] text-center text-white '>{text}</p>
        </span>
      </div>

      {/* Right Section */}
      <div className={`flex flex-col justify-center md:w-[40%] p-8 ${customClass}`}>
        <h3 className='no-underline mb-4'>{sectionHeading}</h3>
        <h2 className='font-normal md:font-bold'>{mainTitle}</h2>
        <p className=' text-2xl md:text-4xl'>{mainPara}</p>
      </div>
    </div>
  );
};

export default TeamCard;