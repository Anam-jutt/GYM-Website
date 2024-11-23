import React from "react";
import Form from "react-bootstrap/Form";
import img from "../assets/img/9.webp";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function FormFooter(){
    return(
        <>
        <div>
        <div className="row" style={{ marginTop: "-3rem" }}>
          <div
            className="col-sm-6"
            style={{
              position: "relative",
              width: "50%",
              height: "30rem",
              overflow: "hidden",
            }}
          >
            {/* Background Image */}
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity as needed
                zIndex: 1,
              }}
            ></div>

            {/* Text Content */}
            <div
              style={{
                position: "absolute",
                top: "6rem",
                left: "4rem",
                color: "white",
                zIndex: 2,
              }}
            >
              <p
                style={{
                  fontSize: "65px",
                  fontWeight: "600",
                  lineHeight: "70px",
                }}
              >
                WANT IT ALL. <br /> GET IT <br /> TOGETHER.
              </p>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                }}
              >
                Earn back your initiation. Offer ends soon.
              </p> 
            </div>
          </div>
          <div className="col-sm-6 FormFooter" style={{ padding: "6rem 5rem 3rem 5rem",height:"30rem",overflow:"auto",width:"49%" }}>
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="First Name">
                  <Form.Control type="text" placeholder="FirstName" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Second Name"
                >
                  <Form.Control type="text" placeholder="SecondName" />
                </FloatingLabel>
              </Col>
              <Form.Floating className="mb-3 mt-5">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
              </Form.Floating>

              <Form.Floating className="mb-3 mt-5">
                <Form.Control
                  id="floatingInputCustom"
                  type="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">
                  Company Email Address (Optional)
                </label>
                <p style={{ fontSize: "13px", paddingTop: "10px",color:"white" }}>
                  We offer exclusive corporate partnerships. Please add yours to
                  see if you apply.
                </p>
              </Form.Floating>
              <Form.Floating className="mb-3 mt-4">
                <Form.Control
                  id="floatingInputCustom"
                  type="number"
                  placeholder="Phone Number"
                />
                <label htmlFor="floatingInputCustom">Phone Number</label>
              </Form.Floating>
              <Form.Floating className="mb-3 mt-4">
                <Form.Control
                  id="floatingInputCustom"
                  type="text"
                  placeholder="Select Club"
                />
                <label htmlFor="floatingInputCustom">
                  Write Club Name Here
                </label>
                <p style={{ fontSize: "13px", paddingTop: "10px",color:"white" }}>
                  By continuing, I agree to the Equinox Terms & Conditions,
                  Privacy Policy and that Equinox brand companies and their
                  membership advisors can contact me regarding promotions,
                  marketing, products, services, and other information that may
                  interest me.
                </p>
              </Form.Floating>
              <button to="/Clubs" style={{backgroundColor:"EDEDED",border:"none",height:"4rem",fontSize:"25px"}}>Visite a Club</button>
            </Row> <hr />
          </div><hr />
          </div>
        </div>
        </>
    )
}
export default FormFooter