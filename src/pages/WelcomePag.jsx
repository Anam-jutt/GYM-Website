import React, { useState } from "react";
import vidoe1 from "../assets/vedio/1.mp4";
import { Link, useLocation } from "react-router-dom";
import { GiSoundOn, GiSoundOff } from "react-icons/gi";

function WelcomePage() {
  const location = useLocation();
  const { firstName , lastName } = location.state || {};
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
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
              objectFit: "cover",
              zIndex: -1,
              filter: "brightness(0.8) contrast(1.1)",
              marginTop: "6rem",
            }}
            loop
            muted={isMuted}
            autoPlay
            playsInline
          />
          <button
            onClick={toggleMute}
            style={{
              marginTop: "10rem",
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
              <span role="img" aria-label="Muted" style={{ fontSize: "45px" }}>
                <GiSoundOff />
              </span>
            ) : (
              <span role="img" aria-label="Unmuted" style={{ fontSize: "45px" }}>
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
            width: "28rem",
            height: "auto",
            left: "20%",
            backdropFilter: "blur(10px)",
            marginTop: "-65rem",
            marginBottom: "10rem",
          }}
        >
          <p
            style={{
              fontWeight: "600",
              padding: "3rem 5rem 0 5rem",
              fontSize: "35px",
              color: "white",
            }}
          >
            HI</p>
          <p  className="text"
            style={{
              fontWeight: "600",
              padding: "0 0 0 5rem",
              fontSize: "35px",
              // color: "white",
            }}
          >
            {firstName} {lastName}!
          </p>
          <p
            style={{
              fontWeight: "600",
              padding: "0 0 0 5rem",
              fontSize: "35px",
              color: "white",
            }}
          >
            Welcome Here.
          </p>
          <p
            style={{
              padding: "0 5rem 0 5rem",
              fontSize: "18px",
              fontWeight: "500",
              color: "white",
            }}
          >
            Welcome to Equinox, the premier fitness destination where luxury
            meets performance. We're thrilled to have you join our community of
            driven individuals.
          </p>
         <button style={{backgroundColor:"black", padding:"15px",borderRadius:"20px",width:"",marginLeft:"4rem",marginBottom:"2rem"}}>
         <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "30px",
              color: "white",
            }}
          >
            Go Back
          </Link>
          <div
            style={{
              border: "1.5px solid ",
              width: "5.5rem",
              marginLeft: "4.9rem",
            }}
          ></div>
         </button>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
