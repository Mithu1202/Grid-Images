import React from 'react'
import './Gallery.css'

function Gallery() {

    const images = [
        "images\\image1.jpeg",
        "images\\image2.jpg",
        "images\\image3.jpg",
        "images\\image4.jpg",
        "images\\image5.jpg",
        "images\\image6.jpg",
        "images\\image7.jpg",
        "images\\image8.jpg",
        "images\\image9.jpg",
        "images\\image10.jpg",
        "images\\image11.jpg",
        "images\\image12.jpg",
    ]

    return (
        <div className="container">
          {images.map((img, index) => (
            <div className="item" key={index} >
              <img src={img} alt={`Cat ${index + 1}`}/>
            </div>
          ))}
        </div>
      );
    };

export default Gallery
