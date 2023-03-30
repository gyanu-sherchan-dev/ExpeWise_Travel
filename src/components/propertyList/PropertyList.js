import React from "react";
import "./PropertyList.scss";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <div className="pListImg">
          <img
            src="https://images.unsplash.com/photo-1514662792719-eae794750d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
          />
        </div>
        <div className="pListTitles">
          <h1>Beach Front Hotels</h1>
          <h2>Sydney</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="pListImg">
          <img
            src="https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="pListImg"
          />
        </div>
        <div className="pListTitles">
          <h1>Beach Camping</h1>
          <h2>Turkey</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="pListImg">
          <img
            src="https://images.unsplash.com/photo-1611441085268-7674a97a0905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
            className="pListImg"
          />
        </div>
        <div className="pListTitles">
          <h1>Villa Stay</h1>
          <h2>Bali</h2>
        </div>
      </div>
      <div className="pListItem">
        <div className="pListImg">
          <img
            src="https://images.unsplash.com/photo-1663687057511-4c42e01412f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="pListImg"
          />
        </div>
        <div className="pListTitles">
          <h1>Sun Cruise Hotel</h1>
          <h2>South Korea</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
