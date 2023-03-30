import React, { useEffect, useState } from "react";
import "./BackgroundImg.scss";

const BackgroundImg = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // const [images, setImages] = useState([]);

  // //function that returns the image URL based on the current slide index:
  // const getBackgroundImageUrl = (slideIndex) => {
  //   setImages([
  //     { src: "culture.png", alt: "image 1" },
  //     { src: "fun.png", alt: "image 2" },
  //     { src: "laugh.png", alt: "image 3" },
  //     { src: "mountain.png", alt: "image 4" },
  //     { src: "ocean.png", alt: "image 5" },
  //     { src: "safari.png", alt: "image 6" },
  //   ]);

  //   return `url(${images[slideIndex]})`;
  // };

  const images = [
    { src: "culture.png", alt: "image 1" },
    { src: "fun.png", alt: "image 2" },
    { src: "laugh.png", alt: "image 3" },
    { src: "mountain.png", alt: "image 4" },
    { src: "ocean.png", alt: "image 5" },
    { src: "safari.png", alt: "image 6" },
  ];

  // useEffect to set the interval for auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }, 2000);
      return () => clearInterval(timer);
    });
  }, [images.length]);
  return (
    <div
      className="backgroundImg"
      style={{
        backgroundImage: `url(${images[slideIndex].src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImg;
