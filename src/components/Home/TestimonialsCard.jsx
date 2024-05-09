import React from 'react'

const TestimonialsCard = ({ quote, author, image }) => {
  return (
    <div className="flex flex-col h-[25vh] md:h-[18vw] border-l border-gray-600  p-6 pl-10  m-4 cursor-pointer">
    <div className="flex flex-col justify-center items-center">

      {image && (
        <img src={image} alt={author} className=" md:max-w-[8rem] object-contain  mb-4 mix-blend-multiply" />
      )}
      <div className="flex-grow">
        <p className="text-gray-700 md:text-lg leading-relaxed max-w-[80% ">{quote}</p>
       
      </div>
    </div>
  </div>
  )
}

export default TestimonialsCard
