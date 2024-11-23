import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../assets/features/UserDetails"

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    if (id && users) {
      const singleUser = users.find((element) => element.id === id);
      setUpdateData(singleUser);
    }
  }, [id, users]);
  
  const handleInputChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, data: updateData })).then(() => navigate("/showData"));
  };

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{}}>
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
              Edit The Form Here...
            </p>
          </div>
          {/* Form section */}
          <Form style={{ marginLeft: "-2rem" }} onSubmit={handleSubmit}>
            <div
              style={{
                width: "100%",
                maxWidth: "700px",
                padding: "3rem",
                marginTop: "-5--rem",
                marginBottom: "10rem",
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ fontSize: "30px", color: "white" }}>
                Fill Up All The Fields
              </p>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="firstName"
                  value={updateData?.firstName || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.lastName || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.gender || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.email || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.contactNumber || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.country || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.city || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.clubName || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.pckage || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.timingZone || ""}
                  onChange={handleInputChange}
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
                  value={updateData?.trainer || ""}
                  onChange={handleInputChange}
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
                  to="/showData"
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
      </div>
    </>
  );
}
export default Edit;
