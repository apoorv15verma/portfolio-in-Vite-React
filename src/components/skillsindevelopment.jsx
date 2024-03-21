
import javascript from "../assets/img/javascript.webp";


import html from "../assets/img/html.webp";
import react from "../assets/img/react.webp";
import bootstrap from "../assets/img/bootstrap.webp";
import tailwind from "../assets/img/tailwind.webp";
import node from "../assets/img/node.webp";
import mongo from "../assets/img/mongodb.webp";
import express from "../assets/img/expres.webp";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/skill banner bg - Copy.webp"


export const Skillsindevelopment = () => {








  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },

  };

  return (
    <section className="skill" id="skills">

      <div className="container ">
        <div className="row ">
          <div className="col-12 ">
            <div className="skill-bx wow zoomIn" style={{ backgroundColor: 'none', backdropFilter: 'blur(10px)' }}>
              <h2>Skills in Web development</h2>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              
                
                <div className="item">
                  <img src={react} alt="" />
                  <h5>
                    React.js
                  </h5>
                </div>

                
                <div className="item">
                  <img src={tailwind} alt="" />
                  <h5>
                    Tailwind
                  </h5>
                </div>
                <div className="item">
                  <img src={node} alt="" />
                  <h5>
                    Nodejs
                  </h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="" />
                  <h5>
                    Bootstrap
                  </h5>
                </div>
               

                <div className="item">
                  <img src={javascript} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={express} alt="" />
                  <h5>
                    Express
                  </h5>
                </div>

                <div className="item">
                  <img src={mongo} alt="" />
                  <h5>
                    MongoDB
                  </h5>
                </div>

                



                <div className="item">
                  <img src={html} alt="" />
                  <h5>
                    html
                  </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>


      
      <img className="background-image-left" src={colorSharp} alt="" />

    </section>
  )
}
