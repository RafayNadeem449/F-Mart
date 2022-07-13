import React from "react";
import "../Overlap.css";

function Overlap() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>About F Mart</h2>
            <p className="jkl" style={{fontWeight:'bolder'}}>
              A little about us and a brief history of how we started.</p>
             <p className="jkl"> F Mart is a one-stop supermarket chain that aims to offer
              customers a wide range of basic home and personal products under
              one roof. Each F Mart store stocks home utility products -
              including food, toiletries, beauty products, garments, kitchenware
              and more - available at competitive prices that our customers
              appreciate. Our core objective is to offer customers good products
              at great value
            </p>
          </div>
        </div>
        <div className="right">
          <img className="pic" src="./FMart.jpg" alt="FMART" />
        </div>
      </div>
    </section>
  );
}

export default Overlap;
