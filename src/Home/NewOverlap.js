import React from "react";
import "../Overlap.css";

function NewOverlap() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>BRAND PROMISE</h2>
            <p className="jkl" style={{ fontWeight: "bolder" }}>
            WE STAND FOR FRESHNESS
            </p>
            <p className="jkl">
              Freshly baked food, fresh fruits and vegetables, fresh juices and
              beverages and quality everyday grocery items but selected based on
              the requirements in each area. In most of our stores, the Fresh
              Food counter offers wide choice and variety in food especially for
              working individuals along with the people who like to share the
              cooking responsibility with us. Each of our stores is designed to
              offer an ambience of modernity to suit the modern-age resident of
              the UAE. We truly believe in a holistic experience that begins
              with the products we sell and trickles down to the service we
              offer.
            </p>
          </div>
        </div>
        <div className="right">
          <img className="pic" src="./Promise.jpg" alt="FMART" />
        </div>
      </div>
    </section>
  );
}

export default NewOverlap;
