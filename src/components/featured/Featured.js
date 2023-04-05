import "./Featured.scss";

import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredImg">
          <img
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="featuredTitle">
            <h1>Sydney</h1>
            <h2>Australia</h2>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredImg">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="featuredTitle">
            <h1>Los Angeles</h1>
            <h2>United States</h2>
          </div>
        </div>
      </div>
      <div className="featuredItem">
        <div className="featuredImg">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2240&q=80"
            alt=""
          />
          <div className="featuredTitle">
            <h1>Paris</h1>
            <h2>France</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
