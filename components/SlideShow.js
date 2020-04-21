import React, { Component } from "react";
import Slider from "react-slick";
import Head from "next/head";

class SlideShow extends Component {
  render() {
    const settings = {
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      Padding: '40px',
      
    };
    return (
      <div>      
        <div>
          <Head>
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <link rel="stylesheet" type="text/css" href="/static/css/slick1.css" />
          </Head>
          <style jsx>{`
                img {
                  padding-left:10px;
                  padding-right:10px;
                                      
                }                
            `}</style>
          <div className="container-fluid col-lg-12 col-md-12 col-sm-12">
          <Slider {...settings}>
                <img src="/static/images/test/test1.png" className="img-fluid" />
                <img src="/static/images/test/test2.png" className="img-fluid" />   
                <img src="/static/images/test/test3.png" className="img-fluid" />  
                <img src="/static/images/test/test4.png" className="img-fluid" /> 
                       
          </Slider>
          </div>
          <div>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;