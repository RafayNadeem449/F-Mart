import React from 'react'
import "../Content.css";

function Content() {
  return (
    <React.Fragment>
        <section className="nh-padding services-wrap">
                <div className="container">    
                    {/* <!-- About --> */}
                    <div className="row">
                        
                        {/* <!-- About Services --> */}
                        <div className="col-md-8 col-xs-12">
                            <div className="fmart-img">
                        <img src="./Grocery2.avif" id='pic' className="img-responsive . img-fluid" alt='Img'/></div>
                        </div><div className="col-md-4 col-xs-12 bg-white">
                     {/* <!-- Main Heading --> */}
					 <div className="">
                    <div className="main-heading-holder">
                        <div className="main-heading">
                            <h2>Our Experience</h2>
                            <span>A little about us and a brief history of how we started.</span>
                        </div>
                    </div>
                    {/* <!-- Main Heading --> */}
						<p>At F Mart, we research, identify and make available new products and categories that suit the everyday needs of the family. Our mission is to provide the best value possible for our customers, so that every rupee they spend on shopping with us gives them more value for money than they would get anywhere else.</p>
						</div>
                       
</div>
<div className="col-sm-4"></div>
                    </div>
                </div>
            </section>
    </React.Fragment>
  )
}

export default Content;