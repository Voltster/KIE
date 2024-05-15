import React from 'react'
import GridGallery from '../common/GridGallery'
// import GridGallery from './GridGallery'

const GallerySection = () => {
  return (
    <div className='w-11/12 mx-auto pb-20'>
      <h3 className='text-center no-underline mb-2'>Gallery</h3>
      <h2 className='text-center mb-20'>Spectacular Works From <br/> Our Digital Print Services</h2>
      <GridGallery/>
    </div>
  )
}

export default Gallery
