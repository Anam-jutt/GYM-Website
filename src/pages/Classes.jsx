import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import vedio2 from "../assets/vedio/2.mp4";
import img12 from "../assets/img/139.webp";
import img1 from "../assets/img/150.webp";
import img2 from "../assets/img/151.webp";
import img3 from "../assets/img/152.webp";
import img4 from "../assets/img/153.webp";
import img5 from "../assets/img/154.webp";
import img6 from "../assets/img/155.webp";
import img7 from "../assets/img/156.webp";
import img8 from "../assets/img/157.webp";
import img9 from "../assets/img/158.webp";
import img10 from "../assets/img/159.webp";
import img11 from "../assets/img/160.webp";
import img13 from "../assets/img/161.webp";
import img14 from "../assets/img/162.webp";
import img15 from "../assets/img/163.webp";
import img16 from "../assets/img/164.webp";
import img17 from "../assets/img/165.webp";
import Carousel from "react-bootstrap/Carousel";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function Classes() {
  const bgImage = img1; // Default image
  const defaultColor = "rgba(0 0 0 0.9)"; // Default color when not hovered
  const [hoveredImage, setHoveredImage] = useState(bgImage);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (image, index) => {
    setHoveredImage(image);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(bgImage);
    setHoveredIndex(null);
  };

  const boxItems = [
    { text: "BOXING/", img: img1 },
    { text: "REGENERATION/", img: img2 },
    { text: "HIIT/", img: img3 },
    { text: "BARRE/", img: img4 },
    { text: "SWIM/", img: img5 },
    { text: "CYCLING/", img: img6 },
    { text: "SCULPT/", img: img7 },
    { text: "PILATES/", img: img8 },
    { text: "DANCE/", img: img9 },
    { text: "RUNNING/", img: img10 },
    { text: "YOGA", img: img11 },
  ];

  return (
    <>
      <div>
        <div style={{ position: "relative", height: "56.8rem", width: "100%",marginTop:"-4rem" }}>
          <video
            src={vedio2}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "contain",
              zIndex: -1,
              filter: "brightness(0.8) contrast(1.1)",
            }}
            loop
            muted
            autoPlay
            playsInline
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              color: "white",
              padding: "20px",
              paddingLeft: "4rem",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "100px",
                  lineHeight: "100px",
                  paddingTop: "10rem",
                }}
              >
                DESIGNED FOR THE <br /> INDIVIDUAL.
                <br /> POWERED BY THE <br /> COLLECTIVE.
                <br />
              </p>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  paddingTop: "2.5rem",
                }}
              >
                Signature Classes engineered to drive results, only at Equinox.
              </p>
              <Link to="/JoinClub">
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    height: "4.5rem",
                    width: "18rem",
                    fontSize: "30px",
                    marginTop: "2rem",
                  }}
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "2rem",
              height: "50rem",
              backgroundImage: `url(${hoveredImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition:
                "background-image 0.7s ease-in-out, filter 0.3s ease-in-out",
              filter:
                hoveredIndex !== null ? "brightness(100%)" : "brightness(40%)",
            }}
            id="mail-pic-box"
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                padding: "2rem 4rem 4rem 2rem",
                display: "flex",
                flexWrap: "wrap",
              }}
              className="multi-img"
            >
              {boxItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: "100px",
                    fontWeight: "700",
                    cursor: "pointer",
                    color: hoveredIndex === index ? "white" : defaultColor, // Default color when not hovered
                    opacity:
                      hoveredIndex === index || hoveredIndex === null ? 1 : 0, // Show only the hovered text
                    transition:
                      "opacity 0.3s ease-in-out, color 0.3s ease-in-out",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.img, index)}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: "black", marginTop: "-5rem" }}>
            <div
              className="row"
              style={{
                paddingLeft: "3rem",
                marginTop: "5rem",
                color: "white",
                padding: "15rem 0 0 3rem",
              }}
            >
              <div className="col-sm-6">
                <p style={{ fontSize: "45px", fontWeight: "600" }}>
                  UNLIMITED <br /> SIGNATURE <br /> CLASSES
                </p>
                <p style={{ fontSize: "20px" }}>
                  Science-backed classes developed by the <br /> industry's best
                  minds to maximize <br /> transformation.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "4.5rem",
                      width: "18rem",
                      fontSize: "30px",
                      marginTop: "4rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="col-sm-6">
                <img src={img12} height={750} alt="" />
              </div>
            </div>
            <div className="row" style={{ marginTop: "10rem" }}>
              <div className="col-sm-3">
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "600",
                    paddingLeft: "3rem",
                    color: "white",
                  }}
                >
                  NEW EQUINOX <br /> EXCLUSIVES <br /> CLASSES
                </p>
              </div>
              <div className="col-sm-7 offset-1">
                <Carousel data-bs-theme="white">
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img13}
                      alt="First slide"
                    />
                    <Carousel.Caption
                      style={{
                        color: "white",
                        marginLeft: "18rem",
                        backgroundColor: "white",
                        color: "black",
                        padding: "2rem",
                      }}
                    >
                      <h4>
                        PRECISION RIDE <sup>TM</sup>
                      </h4>
                      <p>
                        Providing access to the world's most coveted items in
                        the smartest way possible. Buy and sell the hottest
                        sneakers, apparel, electronics, collectibles, trading
                        cards and accessories.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img14}
                      alt="Second slide"
                    />
                    <Carousel.Caption
                      style={{
                        color: "white",
                        marginLeft: "18rem",
                        backgroundColor: "white",
                        color: "black",
                        padding: "2rem",
                      }}
                    >
                      <h5>
                        SCULPTED YOGA <sup>TM</sup>
                      </h5>
                      <p>
                        {" "}
                        Blade is a technology-powered platform reducing travel
                        friction via air transportation alternatives to
                        congested ground routes. Upon booking, you'll experience
                        a level of precision, culture of accommodation, and
                        unmatched, on-the-ground experience.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img15}
                      alt="Third slide"
                    />
                    <Carousel.Caption
                      style={{
                        color: "white",
                        marginLeft: "18rem",
                        backgroundColor: "white",
                        color: "black",
                        padding: "2rem",
                      }}
                    >
                      <h5>PILATES RISE</h5>
                      <p>
                        Õura is the creator of the most trusted smart ring and
                        the Oura App, a world-class health platform that
                        delivers the Oura Membership and provides our members
                        with accurate and personalized daily health data,
                        insights, and guidance.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div
              className="row"
              style={{
                paddingLeft: "3rem",
                marginTop: "5rem",
                color: "white",
                padding: "15rem 0 0 3rem",
              }}
            >
              <div className="col-sm-6">
                <p style={{ fontSize: "45px", fontWeight: "600" }}>
                EXPERT  <br /> INSTRUCTORS 
                </p>
                <p style={{ fontSize: "20px" }}>
                  Science-backed classes developed by the <br /> industry's best
                  minds to maximize <br /> transformation.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "4.5rem",
                      width: "18rem",
                      fontSize: "30px",
                      marginTop: "4rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Take A Class
                  </button>
                </Link>
              </div>
              <div className="col-sm-6">
                <img src={img16} height={750} alt="" />
              </div>
            </div>
            <div style={{marginTop:"15rem"}}>
              <img src={img17} style={{width:"100%"}} alt="" />
            </div>
              <div style={{ padding: "4rem 10rem 4rem 10rem" }}>
                <p style={{ fontWeight: "500", fontSize: "40px",color:"white" }}>
                  WANT IT ALL.GET IT ALL TOGETHER
                </p>
                <p style={{ fontSize: "20px",color:"white" }}>
                  Join Today and Reach Your Potential.
                </p>
                <FloatingLabel
                  controlId="floatingInput"
                  label="First Name"
                  className="mb-3"
                  style={{ color: "black" }}
                >
                  <Form.Control type="text" placeholder="First Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Last Name"
                  className="mb-3"
                  style={{ color: "black" }}
                >
                  <Form.Control type="email" placeholder="Last Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Email"
                  style={{ color: "black" }}
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ color: "black" }}
                  />
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      style={{ color: "black", marginTop: "1rem" }}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Write A Club Name"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Write A Club Name"
                      style={{ color: "black", marginTop: "1rem" }}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Contact Number"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Contact Number"
                      style={{ color: "black", marginTop: "1rem" }}
                    />
                  </FloatingLabel>
                  <div style={{ display: "grid", justifyContent: "center" }}>
                    <Link
                      style={{
                        color: "white",
                        textDecoration: "none",
                        textAlign: "center",
                        marginTop: "3rem",
                        backgroundColor: "white",
                        color: "black",
                        padding: "1rem",
                        fontSize: "28px",
                        width: "20rem",
                      }}
                    >
                      Join Us Now
                    </Link>
                  </div>
                </FloatingLabel>
              </div>
          </div>
          
        </div>
      </div> 
      
    </>
  );
}

export default Classes;
