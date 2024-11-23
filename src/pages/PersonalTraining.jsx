import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import vedio1 from "../assets/vedio/3.mp4";
import { Link } from "react-router-dom";
import img1 from "../assets/img/168.webp";
import img2 from "../assets/img/169.webp";
import img3 from "../assets/img/170.webp";
import img4 from "../assets/img/171.webp";
import img5 from "../assets/img/173.webp";
import img6 from "../assets/img/174.webp";
import img7 from "../assets/img/176.webp";
import FormFooter from '../components/Form';
function PersonalTraining() {
  const items = [
    {
      id: 1,
      img: img1,
      title: "Science-Backed",
      description:
        "Fitness innovation is driven by our Health Advisory Board and Coaches certified by the Equinox Fitness Training Institute.",
    },
    {
      id: 2,
      img: img2,
      title: "Data Collection",
      description:
        "Expert-led physiological and performance assessments establish your baseline.",
    },
    {
      id: 3,
      img: img3,
      title: "Engineered Results",
      description:
        "Best-in-class coaching and education tailored to achieve extraordinary results.",
    },
    {
      id: 4,
      img: img4,
      title: "Interdisciplinary Approach",
      description:
        "Holistic strategy for a whole-body focus. Based on the three core pillars of Movement, Nutrition, and Regeneration.",
    },
    {
      id: 5,
      img: img5,
      title: "Performance Visualization",
      description:
        "Member-owned data tracking and transparency for continuous improvement and goal creation.",
    },
    {
      id: 6,
      img: img6,
      title: "Full Health Optimization",
      description:
        "Holistic performance strategies created by experts across health and science.",
    },
  ];
  const [bgImage, setBgImage] = useState(img1);

  const handleMouseEnter = (imgUrl) => {
    setBgImage(imgUrl);
  };

  return (
    <>
      <div>
        <div>
          <div
            style={{ position: "relative", height: "54.8rem", width: "100%",marginTop:"-3rem"}}
          >
            <video
              src={vedio1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                objectFit: "contain", // Displays full video without cropping
                // backgroundPosition:"center center ",
                zIndex: -1,
                filter: "brightness(0.8) contrast(1.1)", // Optional enhancements
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
                // fontFamily: "Playfair Display, serif",
                color: "white",
                padding: "20px",
                paddingLeft: "4rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: "90px",
                    lineHeight: "80px",
                    paddingTop: "10rem",
                  }}
                >
                  PERSONAL <br /> TRAINING <br /> AT EQUINOX
                </p>
                <p
                  style={{
                    fontSize: "35px",
                    fontWeight: "500",
                    paddingTop: "2.5rem",
                  }}
                >
                  Raising the power of performance.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      height: "3.5rem",
                      width: "15rem",
                      fontSize: "20px",
                      marginTop: "2rem",
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "black",marginTop:"-3rem" }}>
            <div
              className="row"
              style={{
                color: "white",
                padding: "4rem 0 0 3rem",
                lineHeight: "45px",
              }}
            >
              <div className="col-sm-4">
                <p style={{ fontSize: "50px" }}>
                  RAISING THE <br /> POWER OF <br /> PERFORMANCE
                </p>
              </div>
              <div className="col-sm-7">
                <p style={{ fontSize: "22px", lineHeight: "35px" }}>
                  One-on-One training at Equinox is backed by our Health
                  Advisory Board, and the EQX OS. This proprietary operating
                  system, built to advance full health optimization, decodes and
                  unlocks the peak of your potential, redefining
                  High-Performance Living on a whole new scale. <br />
                  <br /> This is more than training, it's the first-of-its-kind,
                  data-driven and expert led path to unlocking your absolute
                  best and achieving extraordinary results.
                </p>
              </div>
            </div>
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
                marginTop: "10rem",
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
                  <div className="box-6">
                    <p style={{ fontSize: "24px", fontWeight: "bold",fontFamily:"YouTube Noto, Roboto, Arial, Helvetica, sans-serif" }}>
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
            <div
              className="row"
              style={{ paddingLeft: "3rem", marginTop: "5rem", color:"white", marginTop:"15rem" ,marginBottom:"15rem"}}
            >
              <div className="col-sm-6">
                <p style={{ fontSize: "45px", fontWeight: "600" }}>
                EQX OPTIMIZE
                </p>
                <p style={{ fontSize: "20px" }}>
                Developed by Equinox and Function Health, <br /> EQX Optimize combines biometric analysis <br /> and elite training to deliver extraordinary <br /> results.
                </p>
                <Link to="/JoinClub">
                  <button
                    to="/JoinClub"
                    style={{
                      backgroundColor: "black",
                      height: "4.5rem",
                      width: "20rem",
                      fontSize: "30px",
                      marginTop: "4rem",
                      color: "white",
                      borderColor: "white",
                      outline: "2px solid white",
                    }}
                  >
                    Explore EQX Optimize
                  </button>
                </Link>
              </div>
              <div className="col-sm-6">
                <img src={img7} height={750} alt="" />
              </div>
            </div>
            <FormFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalTraining;
