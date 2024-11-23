import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import vidoe from "../assets/vedio/2.mp4";
import vidoe1 from "../assets/vedio/1.mp4";
import img from "../assets/img/1.webp";
import img2 from "../assets/img/2.webp";
import img3 from "../assets/img/3.webp";
import img4 from "../assets/img/4.webp";
import img5 from "../assets/img/5.webp";
import img6 from "../assets/img/6.webp";
import img7 from "../assets/img/7.webp";
import img8 from "../assets/img/8.webp";
import {  Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { GiSoundOn } from "react-icons/gi";
import { GiSoundOff } from "react-icons/gi";
import FormFooter from '../components/Form'
function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const navigate = useNavigate();
  const navigators = () => {
    navigate("/classes");
  };
  const navigate1 = useNavigate();
  const navigators1 = () => {
    navigate1("/PersonalTraining");
  };
  const navigate2 = useNavigate();
  const navigators2 = () => {
    navigate2("/SPA");
  };
  const [bgImage, setBgImage] = useState(img2);
  const handleMouseEnter = (imgUrl) => {
    setBgImage(imgUrl);
  };
  const [bgImage1, setBgImage1] = useState(img5);
  const handleMouseEnter1 = (imgUrl1) => {
    setBgImage1(imgUrl1);
  };

  return (
    <>
      <div>
        <div style={{ position: "relative", height: "49rem", width: "100%" }}>
          <video
            src={vidoe}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              objectFit: "cover", // Displays full video without cropping
              // backgroundPosition:"center center ",
              zIndex: -1,
              filter: "brightness(0.8) contrast(1.1)", // Optional enhancements
            }}
            loop
            muted
            autoPlay
            playsInline
          />
          <div className="text"
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              // color: "white",
              padding: "20px",
              paddingLeft: "4rem",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "80px",
                  lineHeight: "80px",
                  paddingTop: "10rem",
                }}
              >
                WANT IT ALL. GET IT <br /> TOGETHER.
              </p>
              <p
                style={{
                  fontSize: "35px",
                  fontWeight: "500",
                  paddingTop: "2.5rem",
                }}
              >
                Earn back your initiation. Offer ends soon.
              </p>
              <Link to="/JoinClub">
                <button
                className="background"
                  to="/JoinClub"
                  style={{
                    // backgroundColor: "white",
                    border: "none",
                    height: "3.5rem",
                    width: "15rem",
                    fontSize: "20px",
                    marginTop: "2rem",
                  }}
                >
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
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
              style={{ height: "100%", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              color: "black",
              backgroundColor: "white",
              marginTop: "5rem",
              width: "28rem",
              height: "23rem",
              marginLeft: "4rem",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                padding: "3rem 5rem 0 5rem",
                fontSize: "35px",
              }}
            >
              One Membership. Limitless Potential.
            </p>
            <p
              style={{
                padding: "0 5rem 0 5rem",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Unlimited Signature Classes, precision- backed Personal Training,
              and exclusive amenities to recover and regenerate. Explore{" "}
            </p>
            <Link
              to="/MemberBenefits"
              style={{
                padding: "0 0 0 5rem",
                textDecoration: "none",
                fontSize: "23px",
                color: "black",
              }}
            >
              Explore Membership
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "12.3rem",
                marginLeft: "4.9rem",
              }}
            ></div>
          </div>
        </div>
        <div>
          <div style={{ height: "72rem" }}>
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
                marginTop: "107rem",
              }}
              loop
              muted={isMuted}
              autoPlay
              playsInline
            />
            <button
              onClick={toggleMute}
              style={{
                marginTop: "108rem",
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
                <span role="img" aria-label="Muted" style={{fontSize:"45px"}}>
                  <GiSoundOff />
                </span>
              ) : (
                <span role="img" aria-label="Unmuted" style={{fontSize:"45px"}}>
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
              color: "black",
              backgroundColor: "white",
              marginTop: "-43rem",
              width: "28rem",
              height: "23rem",
              marginLeft: "4rem",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                padding: "3rem 5rem 0 5rem",
                fontSize: "35px",
              }}
            >
              Where Luxury and Fitness Meet
            </p>
            <p
              style={{
                padding: "0 5rem 0 5rem",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Award-winning spaces and regenerative amenities designed to drive
              your performance forward.
            </p>
            <Link
              to="/Clubs"
              style={{
                padding: "0 0 0 5rem",
                textDecoration: "none",
                fontSize: "23px",
                color: "black",
              }}
            >
              Find A Club
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "7rem",
                marginLeft: "4.9rem",
              }}
            ></div>
          </div>
        </div>
        <div 
          style={{
            display: "flex",
            marginTop: "15rem",
            height: "50rem",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.7s ease-in-out',
            // filter: 'brightness(0.9)'
          }}
          id="mail-pic-box"
        >
          <div className="class1" >
          <div id="classes" 
            onClick={navigators}
            onMouseEnter={() => handleMouseEnter(img2)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "18rem",
              marginLeft: "4.5rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2.5rem 3rem 0 3rem",
                fontSize: "33px",
              }}
            >
              Signature Classes
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              New and Unlimited Classes exclusive to Equinox. Designed for the
              individual. Powered by the collective.
            </p>
            <Link
              to="/Classes"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover Classes
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "8.9rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
          <div className="personTraining">
          <div
            id="personal"
            onClick={navigators1}
            onMouseEnter={() => handleMouseEnter(img3)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "18rem",
              marginLeft: "2rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2.5rem 3rem 0 3rem",
                fontSize: "33px",
              }}
            >
              Personal Training
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Precision-backed 1:1 Personal Training with EFTI-certified
              COACHES, dedicated to maximizing your potential.
            </p>
            <Link
              to="/PersonalTraining"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover Personal Training
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "14.7rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
          <div className="APAAthlete">
          <div
            id="SPAAth"
            onClick={navigators2}
            onMouseEnter={() => handleMouseEnter(img4)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "18rem",
              marginLeft: "2rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2.5rem 3rem 0 3rem",
                fontSize: "33px",
              }}
            >
              Authentic Pilates
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Studio Pilates sessions with 1:1 instruction. Tone your core and
              activate your mind- body connection.
            </p>
            <Link
              to="/SPA"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover Pilates
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "8.6rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
        </div>
        <div 
          style={{
            display: "flex",
            marginTop: "rem",
            height: "50rem",
            backgroundImage: `url(${bgImage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.7s ease-in-out',
            // filter: 'brightness(0.9)'
          }}
          id="mail-pic-box"
        >
          <div className="class1" >
          <div id="classes" 
            onClick={navigators2}
            onMouseEnter={() => handleMouseEnter1(img5)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "18rem",
              marginLeft: "4.5rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2rem 1rem 0 3rem",
                fontSize: "33px",
              }}
            >
              The Spa at Equinox
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Relax. Recover. Want It All at The Spa, where innovative treatments rejuvenate the body at a cellular level.
            </p>
            <Link
              to="/SPA"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover The Spa
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "9.3rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
          <div className="personTraining">
          <div
            id="personal"
            onClick={navigators}
            onMouseEnter={() => handleMouseEnter1(img6)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "19rem",
              marginLeft: "2rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2rem 1rem 0 3rem",
                fontSize: "33px",
              }}
            >
              Exclusive Amenities
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Access immaculate locker rooms, saunas, and steam rooms equipped with eucalyptus towels and Grown Alchemist products.
            </p>
            <Link
              to="/classes"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover More
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "7.8rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
          <div className="APAAthlete">
          <div
            id="SPAAth"
            onClick={navigators}
            onMouseEnter={() => handleMouseEnter1(img7)}
            // onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: "Playfair Display, serif",
              marginTop: "28rem",
              width: "22rem",
              height: "18rem",
              marginLeft: "2rem",
              cursor: "pointer",
              transition: 'background-color 0.7s ease-in-out',
            }}
          >
            <p
              style={{
                fontWeight: "500",
                padding: "2.5rem 3rem 0 3rem",
                fontSize: "33px",
              }}
            >
             Iconic Spaces
            </p>
            <p
              style={{
                padding: "0 3rem 0 3rem",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
             Each Club is designed with Award- Winning Precision to reflect our High- Performance Community.
            </p>
            <Link
              to="/classes"
              style={{
                padding: "0 0 0 3rem",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
              }}
            >
              Discover More
            </Link>
            <div
              style={{
                border: "1.5px solid black",
                width: "8rem",
                marginLeft: "3rem",
              }}
            ></div>
          </div>
          </div>
        </div>
        <div style={{marginBottom:"15.1rem"}}>
          <div style={{width:"100%",position:"relative"}}>
          <img src={img8} alt=""  style={{width:"100%",}}/>
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
              marginTop:"-35rem"
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
              Get exclusive access to 1,000+ hours of live and on-demand classes. Wherever you are. Whenever you're ready.
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
        <FormFooter />
      </div>
    </>
  );
}

export default Home;
