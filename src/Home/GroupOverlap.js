import React from "react";
import "../Overlap.css";

function GroupOverlap() {
  return (
    <section>
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>THE GROUP BEHIND F MART</h2>

            <p className="jkl">
              {" "}
              F Mart draws from a rich collective experience of its founders,
              who have been in the retail industry since 2013. We understand
              community culture and their requirements.
              <br></br>The UAE is ever expanding, transforming and getting smarter in terms of
              technology, lifestyle and offerings. And what FMART offers is a
              smart shopping solution, established in the new Dubai residential
              areas and similar developments are being deployed in the Emirate
              of Abu Dhabi.
              <br></br>
               We want to present a smarter convenience store chain
              that offers the freshest and the finest produce and products to
              professionals, families and communities alike. F Mart operates
              with the same fervor, but with a renewed vision of offering
              premium quality products within a modern age set up. F Mart stores
              are operated, licensed and franchised by F Mart Convenient Store
              Middle East, headquartered in Dubai.
            </p>
          </div>
        </div>
        <div className="right">
          <img className="pic" src="./INTRO.jpg" alt="FMART" style={{height:"580px"}} />
        </div>
      </div>
    </section>
  );
}

export default GroupOverlap;
