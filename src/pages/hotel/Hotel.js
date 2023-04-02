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
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <i
              class="fa-solid fa-circle-xmark"
              className="close"
              // onClick={() => setOpen(!open)}
            ></i>
            <i class="fa-solid fa-circle-arrow-left" className="arrow"></i>
            <div className="sliderWrapper">
              <img src={photos[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <i class="fa-solid fa-circle-arrow-right" className="arrow"></i>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hoteladdress">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
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
              <h1 className="hotelTitle">Luxury City Hotel</h1>
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
