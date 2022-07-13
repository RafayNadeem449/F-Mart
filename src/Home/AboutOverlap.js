import React from "react";
import "../Overlap.css";

function AboutOverlap() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>DUBAI</h2>
             <p className="jkl">The jewel of the Middle East has earned a reputation worldwide for its inimitable style and vigor. Dubai is a cosmopolitan city that offers a premium lifestyle to its citizens and residents alike, small wonder that it is home to 200 nationalities from all corners of the globe.
With a ever evolving skyline, bustling city life, world-class infrastructure, unparalleled retail, entertainment and hotel options, a booming economy and impeccable business friendly environment make Dubai a city that is ideal to live, work and thrive.
F Mart is proud to be an integral part of this remarkable city that houses our Headquarters. 
            </p>
          </div>
        </div>
        <div className="right">
          <img className="pic" src="./dubai.jpg" alt="FMART" />
        </div>
      </div>
    </section>
  );
}

export default AboutOverlap;
