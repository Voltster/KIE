import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
// import './Gallery.css';

const GridGallery = () => {
  const galleryItems = [
    {
      id: 1,
      name: 'Image 1',
      imgSrc: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'Image 2',
      imgSrc: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      name: 'Image 3',
      imgSrc: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fHww',
    },
    {
      id: 4,
      name: 'Image 4',
      imgSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fHww',
    },
    {
      id: 5,
      name: 'Image 1',
      imgSrc: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 6,
      name: 'Image 2',
      imgSrc: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 7,
      name: 'Image 3',
      imgSrc: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fHww',
    },
    {
      id: 8,
      name: 'Image 4',
      imgSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fHww',
    },
    // Add more gallery items here
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <Zoom triggerOnce>
              <div className="image-wrapper">
                <img src={item.imgSrc} alt={item.name} />
              </div>
            </Zoom>
            <Fade triggerOnce cascade damping={0.2}>
              <h3 className="image-name">{item.name}</h3>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridGallery;
