import React from "react";
import "../index.css";
import img4 from "../assets/img/8.webp";
import img from "../assets/img/138.webp";
import img1 from "../assets/img/139.webp";
import img2 from "../assets/img/140.webp";
import img3 from "../assets/img/141.webp";
import img5 from "../assets/img/143.webp";
import img6 from "../assets/img/144.webp";
import img7 from "../assets/img/145.webp";
import img8 from "../assets/img/146.webp";
import img9 from "../assets/img/147.webp";
import img10 from "../assets/img/142.webp";
import img11 from "../assets/img/148.webp";
import img12 from "../assets/img/149.webp";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const MemberBenefits = () => {
  return (
    <>
      <div>
        <div>
          <div style={{ marginBottom: "11rem" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "52rem",
                width: "100%",
                objectFit: "cover", // Displays full video without cropping
                // backgroundPosition:"center center ",
                zIndex: -1,
                marginTop: "55rem",
              }}
            >
              <img
                src={img}
                alt=""
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "100%",
                  marginTop: "-48rem",
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: "Playfair Display, serif",
                color: "white",
                padding: "20px",
                paddingLeft: "4rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "80px",
                    lineHeight: "80px",
                    paddingTop: "10rem",
                  }}
                >
                  MEMBERSHIP <br /> WITH BENEFITS .
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    paddingTop: "2.5rem",
                    lineHeight: "35px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Equinox is available however, whenever, and wherever you want{" "}
                  <br />
                  it with seamlessly integrated physical and digital offerings.{" "}
                  <br /> Explore the benefits of an Equinox membership below..
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      height: "4.5rem",
                      width: "18rem",
                      fontSize: "30px",
                      marginTop: "2rem",
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            <div className="row" style={{ padding: "3rem" }}>
              <div className="col-sm-4">
                <p style={{ fontSize: "45px", fontWeight: "700" }}>
                  NEW <br /> MEMBER <br /> BENEFITS <br /> WHEN YOU <br /> JOIN
                </p>
              </div>
              <div className="col-sm-4">
                <ul style={{ fontSize: "20px", paddingTop: "2rem" }}>
                  <p>Join Equinox today and unlock exclusive benefits:</p>
                  <li>Complimentary Equifit Assessment</li>
                  <li>Complimentary Personal Training session</li>
                  <li>Complimentary Studio Pilates session</li>
                  <li>15% off your first in-store purchase at The Shop</li>
                  <li>25% off your first session at The Spa at Equinox</li>
                </ul>
              </div>
            </div>
            <div
              className="row"
              style={{ paddingLeft: "3rem", marginTop: "5rem" }}
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
                <img src={img1} height={750} alt="" />
              </div>
            </div>
            <div
              className="row"
              style={{ paddingLeft: "3rem", marginTop: "15rem" }}
            >
              <div className="col-sm-4">
                <p style={{ fontSize: "45px", fontWeight: "600" }}>
                  EXPERT <br />
                  COACHING
                </p>
                <p style={{ fontSize: "18px" }}>
                  One-on-One training at Equinox is backed by our Health
                  Advisory Board, and the EQX OS. This proprietary operating
                  system, built to advance full health optimization, decodes and
                  unlocks the peak of your potential, redefining
                  High-Performance Living on a whole new scale. <br />
                  <br />
                  This is more than training, it's the first-of-its- kind,
                  data-driven and expert led path to unlocking your absolute
                  best and achieving extraordinary results.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "4.5rem",
                      width: "18rem",
                      fontSize: "30px",
                      marginTop: "5rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="col-sm-6 offset-2">
                <img src={img2} height={750} alt="" />
              </div>
            </div>
            <div
              className="row"
              style={{ paddingLeft: "3rem", marginTop: "17rem" }}
            >
              <div className="col-sm-4">
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "600",
                    paddingTop: "5rem",
                  }}
                >
                  PILATES <br />
                  EVOLVED
                </p>
                <p style={{ fontSize: "18px" }}>
                  Improve your strength, mobility, and flexibility with guidance
                  in our studios or at home. Our certified Pilates instructors
                  with over 400 hours of experience will help you tighten what's
                  loose and loosen what's tight with touchless adjustments.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "4.5rem",
                      width: "18rem",
                      fontSize: "30px",
                      marginTop: "5rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="col-sm-6 offset-2">
                <img src={img3} height={750} alt="" />
              </div>
            </div>
            <div style={{ marginBottom: "15.1rem", marginTop: "15rem" }}>
              <div style={{ width: "100%", position: "relative" }}>
                <img src={img4} alt="" style={{ width: "100%" }} />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "Playfair Display, serif",
                    color: "black",
                    backgroundColor: "white",
                    marginTop: "-43rem",
                    width: "28rem",
                    height: "23rem",
                    marginLeft: "4rem",
                    marginTop: "-35rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "600",
                      padding: "3rem 5rem 0 5rem",
                      fontSize: "35px",
                    }}
                  >
                    Equinox+
                  </p>
                  <p
                    style={{
                      padding: "0 5rem 0 5rem",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    Get exclusive access to 1,000+ hours of live and on-demand
                    classes. Wherever you are. Whenever you're ready.
                  </p>
                  <Link
                    to="/JoinOnline"
                    style={{
                      padding: "0 0 0 5rem",
                      textDecoration: "none",
                      fontSize: "23px",
                      color: "black",
                    }}
                  >
                    Explore the App
                  </Link>
                  <div
                    style={{
                      border: "1.5px solid black",
                      width: "9.4rem",
                      marginLeft: "4.9rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3" style={{ paddingLeft: "3rem" }}>
                <p style={{ fontSize: "45px", fontWeight: "600" }}>
                  EQUINOX <br />
                  CIRCLE
                </p>
                <p style={{ fontSize: "18px" }}>
                  Our friends are your friends. Your membership now unlocks
                  exclusive partnerships, curated just for you. <br />
                  <br /> Our partners include Thorne, Provenance, Dorsia, Blade,
                  Oura, Indagare, Bezel and StockX.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "3.5rem",
                      width: "14rem",
                      fontSize: "30px",
                      marginTop: "5rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="col-sm-9"style={{}}>
                <Carousel data-bs-theme="white">
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img5}
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
                      <h4>StockX</h4>
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
                      src={img6}
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
                      <h5>Blade</h5>
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
                      src={img7}
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
                      <h5>ÕURA</h5>
                      <p>
                        Õura is the creator of the most trusted smart ring and
                        the Oura App, a world-class health platform that
                        delivers the Oura Membership and provides our members
                        with accurate and personalized daily health data,
                        insights, and guidance.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img8}
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
                      <h5>Bezel</h5>
                      <p>
                        Bezel Founded by a team of collectors, enthusiasts, and
                        technologists, Bezel is the first technology company
                        dedicated to high-end watches, building a 100%
                        authenticated marketplace that delivers trust at scale.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img9}
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
                      <h5>Thorne</h5>
                      <p>
                        Predicated on the power of the individual, Thorne
                        leverages artificial intelligence models to provide
                        insights and personalized data, products, and services
                        that help individuals take a proactive and actionable
                        approach to longevity.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      style={{ width: "500px", borderRadius: "20px" }}
                      src={img10}
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
                      <h5>Provenance</h5>
                      <p>
                        Provenance Meals is a luxury meal service to help busy
                        people achieve their goals. Meals and cleanse programs
                        are 100% free of gluten, dairy, refined sugars, and
                        canola oil, designed by wellness experts and made from
                        scratch with local ingredients.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div>
                <div
                  className="row"
                  style={{ marginTop: "13rem", paddingLeft: "3rem" }}
                >
                  <div className="col-sm-3">
                    <p style={{ fontSize: "45px", fontWeight: "600" }}>
                      EXPRESS <br /> YOUR <br />
                      DESIRES
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      Put your Equinox membership on your American Express
                      Platinum Card® and you'll get up to $300 back per year.
                      Applicable on any Equinox membership and the Equinox+
                      digital fitness app. Terms apply.
                    </p>
                    <Link to="/JoinClub">
                      <button
                        to="/JoinClub"
                        style={{
                          backgroundColor: "black",
                          height: "3.5rem",
                          width: "14rem",
                          fontSize: "30px",
                          marginTop: "5rem",
                          color: "white",
                          borderColor: "white",
                          outline: "2px solid white",
                        }}
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                  <div className="col-sm-8">
                    <img
                      src={img11}
                      height={450}
                      style={{ marginLeft: "2.7rem", marginTop: "2rem" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "6rem" }}>
                <img src={img12} style={{ width: "100%" }} alt="" />
              </div>
              <div style={{ padding: "4rem 10rem 4rem 10rem" }}>
                <p style={{ fontWeight: "500", fontSize: "40px" }}>
                  WANT IT ALL.GET IT ALL TOGETHER
                </p>
                <p style={{ fontSize: "20px" }}>
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
      </div>
    </>
  );
};

export default MemberBenefits;
