import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("https://learlab-server-assignement.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleryImages(data);
      });
  }, []);

  return (
    <div data-aos='fade-top' className='my-20 container mx-auto'>
      <div className='divider text-gray-400'>Gallery</div>
      <h1 className='text-4xl text-center font-bold mb-10'>
        Toy Showcase: Exploring the Magic
      </h1>{" "}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-3 md:mx-0'>
        {galleryImages.map((image) => (
          <div key={image._id} className='card  duration-700 ease-in-out hover:scale-110 transition-transform bg-gray-500 h-60 shadow-xl image-full'>
            <figure>
              
              <img
              className=""
                src={image.picture}
                alt={image.toyName}
              />
            </figure>
            <div className='card-body duration-700 ease-in-out delay-100 opacity-0 transition-opacity hover:opacity-100'>
              <h2 className='card-title'>{image.toyName}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
