import React from "react";
import "./SearchItem.scss";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <div className="siImg">
        <img
          src="https://images.unsplash.com/photo-1668169064092-04dc2c657d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt=""
        />
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">400m from center</span>
        <span className="siTaxiOp">Free airport Taxi</span>
        <span className="siSubTitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom .21m2 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOptionSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>4.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
