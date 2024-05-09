import React from 'react'

const ServiceCard = ({customClass, imgSrc , heading}) => {
  return (
    <div className={`flex flex-col ${customClass}`}>
    <img src={imgSrc} alt="" />
    <h4>{heading}</h4>
  </div>
  )
}

export default ServiceCard
