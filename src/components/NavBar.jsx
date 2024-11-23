import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  return (
    <>
      <div className="nav-main" style={{ marginBottom: "7rem" }}>
        <Navbar
          expand="lg"
          className="nav1 fixed-top"
          style={{ backgroundColor: "#000000" }}
        >
          <Navbar.Brand>
            <Link
              to="/"
              style={{ fontFamily: "Playfair Display, serif", color: "white" }}
            >
              <div
                className="logo "
                style={{ marginLeft: "45px", marginTop: "13px" }}
              ></div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "white", backgroundColor: "white", padding: "7px" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="justify-content-center w-100"
              style={{
                // color: "white",
                fontFamily: "Playfair Display, serif",
                height: "6rem",
                marginLeft: "-1.5rem",
                padding: "10px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              {/* <Nav.Item>
                <Nav.Link className="nav-bar-link">
                <span style={{color:"white"}}> <h4 style={{marginTop:"-5px",paddingLeft:"16px",paddingTop:"25px"}}>|</h4></span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} className="nav-bar-link" to="/" style={{ color: "white" ,paddingTop:"30px"}}>
                  HOME
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  className="nav-bar-link"
                  to="/Clubs"
                  style={{ color: "white", paddingTop: "30px" }}
                >
                  CLUBS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  className="nav-bar-link"
                  to="/MemberBenefits"
                  style={{ color: "white", paddingTop: "30px" }}
                >
                  MEMBER BENEFITS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  className="nav-bar-link"
                  to="/Classes"
                  style={{ color: "white", paddingTop: "30px" }}
                >
                  CLASSES
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "#000000",
                    color: "white",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "18px",
                    paddingTop: "30px",
                  }}
                >
                  TRAINING
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    to="PersonalTraining"
                    style={{
                      color: "black",
                      border: "none",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    PERSONAL TRAINING
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    to="Pilates"
                    style={{
                      color: "black",
                      border: "none",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    PILATES
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  className="nav-bar-link"
                  to="/SPA"
                  style={{ color: "white", paddingTop: "30px" }}
                >
                  SPA
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  className="nav-bar-link"
                  to="/JoinClub"
                  style={{ color: "white", paddingTop: "30px" }}
                >
                  JOIN CLUB
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-bar-link">
                  <span style={{ color: "white" }}>
                    {" "}
                    <h4 style={{ marginTop: "-5px", paddingTop: "25px" }}>|</h4>
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item>
            <Nav.Link
              as={Link}
              className="nav-bar-link background"
              to="/JoinOnline"
              style={{
                color: "black",
                fontWeight: "700",
                fontSize: "18px",
                fontFamily: "Playfair Display, serif",
                marginRight: "45px",
                // backgroundColor: "White",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "5.5px",
                paddingRight: "5.5px",
                borderRadius: "10px",
                marginTop: "13px",
              }}
            >
              JOIN ONLINE
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
