import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import img1 from "../assets/img/113.webp";
import img2 from "../assets/img/160.webp";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { createUser } from "../assets/features/UserDetails";
import { useNavigate } from "react-router-dom";

function JoinOnline() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));

    // Ensure that firstName exists in users before navigating
    if (users.firstName) {
      navigate("/welcomePage", {
        state: { firstName: users.firstName, lastName: users.lastName },
      });
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh", // Use minHeight to allow content to grow
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Keeps image fixed in place when scrolling
          filter: "brightness(1)", // Full brightness for the background
          display: "flex",
          justifyContent: "center", // Centers the form horizontally
          alignItems: "center", // Centers the form vertically
          flexDirection: "column", // Stacks the text and form vertically
          padding: "2rem", // Padding for inner space
        }}
      >
        {/* Overlay text */}
        <h1
          style={{
            fontSize: "10rem",
            fontWeight: "900",
            color: "transparent",
            backgroundImage: `url(${img1})`, // Image clipped for the text effect
            backgroundSize: "cover",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            lineHeight: "0.8",
            letterSpacing: "25px",
            fontFamily: "Arial, sans-serif",
            textShadow: "none", // No shadow for full brightness
            marginBottom: "2rem", // Space between the text and form
          }}
        >
          WELCOME
          <br /> IN
          <br /> EQUINQX
        </h1>
        <div>
          <p
            className="text"
            style={{
              marginTop: "2rem",
              fontFamily: "italic",
              fontSize: "70px",
              fontWeight: "600",
            }}
          >
            Fill Up The Form And Register Your Self
          </p>
        </div>
        {/* Form section */}
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              padding: "3rem",
              marginTop: "5rem",
              marginBottom: "10rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <p style={{ fontSize: "30px", color: "white" }}>
              Fill Up All The Fields{" "}
              <span style={{ color: "red" }}> ( *Required )</span>
            </p>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="firstName"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="First Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="lastName"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Last Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="gender"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="gender"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Gender"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Email address."
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Contact"
              className="mb-3"
            >
              <Form.Control
                type="number"
                name="contactNumber"
                onChange={getUserData}
                style={{ backgroundColor: "transparent" }}
                placeholder="Contact Number."
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label=" Countray"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="country"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Countray Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="City"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="city"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="City Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="club"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="clubName"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Write Club Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Package"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="pckage"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Write Your Package Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Tmie"
              className="mb-3"
            >
              <Form.Control
                type="time"
                name="timingZone"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
                placeholder="Write Your Time"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Trainer"
              style={{ backgroundColor: "transparent", color: "White" }}
            >
              <Form.Select
                aria-label="Floating label select example"
                name="trainer"
                onChange={getUserData}
                style={{ backgroundColor: "transparent", color: "White" }}
              >
                <option
                  style={{ backgroundColor: "transparent", color: "black" }}
                >
                  What About Trainer{" "}
                </option>
                <option
                  style={{ backgroundColor: "transparent", color: "black" }}
                  value="1"
                >
                  Personal Trainer
                </option>
                <option
                  style={{ backgroundColor: "transparent", color: "black" }}
                  value="2"
                >
                  Only Assistant
                </option>
                <option
                  style={{ backgroundColor: "transparent", color: "black" }}
                  value="3"
                >
                  No Need
                </option>
              </Form.Select>
            </FloatingLabel>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="transparent"
                style={{
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 20px",
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default JoinOnline;
