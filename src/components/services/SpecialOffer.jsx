import React from 'react'

const SpecialOffer = () => {
  return (
    <div className='w-screen h-[20vh]  md:h-[40vh]  flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat my-[8vw] shadow-xl ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <h2 className='text-white text-center mb-4 p-4  bg-black/20 w-full font-semibold'>Get <span className='text-green-500'>Special Offer</span> For Today <br/> With Koncept India </h2>
      <button className="btn-primary md:text-4xl py-3 px-8">Let’s Try</button>
    </div>
  )
}

export default SpecialOffer
