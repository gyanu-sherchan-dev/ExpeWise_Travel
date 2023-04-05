import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./Hotel.scss";
import MailList from "../../components/mailList/MailList";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    },
  ];

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;
    if (direction === "l") {
      newSlideIndex = slideIndex === 0 ? 8 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 8 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <div className="close" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>

            <div className="arrow" onClick={() => handleMove("l")}>
              <i className="fa-solid fa-circle-arrow-left"></i>
            </div>
            <div className="sliderWrapper">
              <img src={photos[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <div className="arrow" onClick={() => handleMove("r")}>
              <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Vista Views Apartment</h1>
          <div className="hoteladdress">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <span>387 Tunnel Ave. New York, NY 10002</span>
          </div>
          <span className="hotelDistance">
            Central location apartment with mordern amenities
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $110 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Luxury City Apartment</h1>
              <p className="hotelDesc">
                The hotel is a luxurious property located in the heart of the
                city, offering easy access to the main attractions and
                entertainment areas. The hotel features elegantly decorated
                rooms and suites, equipped with modern amenities such as
                flat-screen TVs, high-speed internet, and comfortable bedding.
                Guests can enjoy a range of on-site facilities, including a
                fitness center, spa, and swimming pool. The hotel also has
                multiple dining options, including a fine-dining restaurant, a
                cafe, and a bar. With excellent service and a prime location,
                this hotel is an ideal choice for both leisure and business
                travelers.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Urban Retreat-perfect for weekend escape</h1>
              <span>
                5-star modern hotel with luxurious rooms and rooftop bar.
                Infinity pool with city views.
              </span>
              <h2>
                <b>$345</b> (2 nights)
              </h2>
              <button>Reserve or Book Now !</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
