import React from "react";
import "./FeaturedProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <div className="fpImg">
          <img
            src="https://images.unsplash.com/photo-1531256793340-2f7398cfca4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>
            <span className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            4.7
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <div className="fpImg">
          <img
            src="https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <span className="fpName">Grand Teton Cabin</span>
        <span className="fpCity">USA</span>
        <span className="fpPrice">Starting from $180</span>
        <div className="fpRating">
          <button>
            <span className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
            5
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <div className="fpImg">
          <img
            src="https://images.unsplash.com/photo-1516831972173-00f3d79da863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80"
            alt=""
          />
        </div>
        <span className="fpName">Seydisfjordur Bunglow</span>
        <span className="fpCity">Iceland</span>
        <span className="fpPrice">Starting from $240</span>
        <div className="fpRating">
          <button>
            <span className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
            5
          </button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <div className="fpImg">
          <img
            src="https://images.unsplash.com/photo-1564329895729-c5bbcd512d7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <span className="fpName">River side Farm Stay</span>
        <span className="fpCity">India</span>
        <span className="fpPrice">Starting from $110</span>
        <div className="fpRating">
          <button>
            <span className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            4.6
          </button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
