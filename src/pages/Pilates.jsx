import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import vidoe1 from "../assets/vedio/4.mp4";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import { Link } from "react-router-dom";
import img1 from "../assets/img/178.webp";
import img2 from "../assets/img/179.webp";
import img3 from "../assets/img/180.webp";
import img4 from "../assets/img/181.webp";
import img5 from "../assets/img/182.webp";
import img6 from "../assets/img/183.webp";
import img7 from "../assets/img/184.webp";
import img8 from "../assets/img/185.webp";
import Carousel from 'react-bootstrap/Carousel';
import FormFooter from "../components/Form"
function Pilates() {
  const items = [
    {
      id: 1,
      img: img1,
      title: "STARTING FITNESS",
      description:
        "Fitness innovation is driven by our Health Advis  Fitness Training Inseducation tailored to achieveeducation tailored to achievetitute.",
    },
    {
      id: 2,
      img: img2,
      title: "HIGH-IMPACT TONING WORKOUT",
      description:
        "Expert-led physiological and performance asablish your education tailored to achieve baseline.",
    },
    {
      id: 3,
      img: img3,
      title: "REHABILITATION",
      description:
        "Best-in-class coaching and education tailored to achieve education tailored to achieveex traordinary results.",
    },
  ];
  const [bgImage, setBgImage] = useState(img1);

  const handleMouseEnter = (imgUrl) => {
    setBgImage(imgUrl);
  };
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      <div>
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ height: "60rem" }}>
            <video
              src={vidoe1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "50rem",
                width: "100%",
                objectFit: "cover", // Displays full video without cropping
                // backgroundPosition:"center center ",
                zIndex: -1,
                filter: "brightness(0.8) contrast(1.1)", // Optional enhancements
                marginTop: "5rem",
              }}
              loop
              muted={isMuted}
              autoPlay
              playsInline
            />
            <button
              onClick={toggleMute}
              style={{
                marginTop: "8rem",
                position: "absolute",
                top: "10px",
                right: "40px",
                background: "none",
                color: "white",
                border: "none",
                borderRadius: "50%",
                padding: "0.5rem",
                cursor: "pointer",
                zIndex: 1,
              }}
            >
              {isMuted ? (
                <span
                  role="img"
                  aria-label="Muted"
                  style={{ fontSize: "45px", color: "black" }}
                >
                  <GiSoundOff />
                </span>
              ) : (
                <span
                  role="img"
                  aria-label="Unmuted"
                  style={{ fontSize: "45px", color: "black" }}
                >
                  <GiSoundOn />
                </span>
              )}
            </button>
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              color: "white",
              marginTop: "-43rem",
              width: "28rem",
              height: "23rem",
              marginLeft: "4rem",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                margin: "3rem 5rem 2rem 5rem",
                fontSize: "85px",
              }}
            >
              STUDIO <br />
              PILATES
            </p>
            <Link
              to="/Clubs"
              style={{
                padding: "1rem",
                textDecoration: "none",
                fontSize: "40px",
                color: "black",
                backgroundColor: "white",
                margin: "0 0 0 5rem",
                width: "20rem",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "600",
            marginTop: "10rem",
            paddingLeft: "3rem",
            color: "white",
          }}
        >
          MOVEMENT <br /> WITH BENEFITS
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            height: "100vh",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.7s ease-in-out",
            color: "white",
            marginTop: "-15rem",
            padding: "2rem",
            outline: "2px solid white",
            height: "50rem",
            paddingTop: "32rem",
            // active:backgroundColor:"white"
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.img)}
              style={{
                marginBottom: "2rem",
                cursor: "pointer",
              }}
            >
              <div className="box-6" style={{ padding: "3rem" }}>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    fontFamily:
                      "YouTube Noto, Roboto, Arial, Helvetica, sans-serif",
                  }}
                >
                  {String(item.id).padStart(2, "0")} <br /> {item.title}
                </p>
                <p
                  className="description"
                  style={{ fontSize: "18px", maxWidth: "500px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "relative" ,marginBottom:"3rem"}}>
  {/* Title Text Overlay */}
  <p
    style={{
      fontSize: "60px",
      fontWeight: "600",
      marginTop: "3rem",
      color: "white",
      zIndex: "1",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-120%, -420%)",
      textAlign: "center",
    }}
  >
    PRISTINE SPACES
  </p>

  {/* Carousel */}
  <Carousel data-bs-theme="white" style={{ fontWeight: "900" }}>
    <Carousel.Item>
      <img className="d-block w-100" src={img4} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img5} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img6} alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img7} alt="Fourth slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img8} alt="Fifth slide" />
    </Carousel.Item>
  </Carousel>
</div>
      <FormFooter />
      </div>
    </>
  );
}

export default Pilates;
