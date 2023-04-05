import React from "react";
import "./SearchItem.scss";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const navigate = useNavigate();
  const checkAvaibility = () => {
    navigate("/hotels/id");
  };
  return (
    <div className="searchItem">
      <div className="siImg">
        <img
          src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Vista Views Apartment</h1>
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
          <button className="siCheckButton" onClick={checkAvaibility}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
