
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 
 



 


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__" : ""}>
                <h2>Get In Touch</h2>
                <form  action="https://formspree.io/f/xvoyaree"
        method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name"  name="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" name="last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" v placeholder="Message" name="Message" ></textarea>
                      <button className="vvd" type="submit"><span>Submit</span></button>
                    </Col>
                    {
                    
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
