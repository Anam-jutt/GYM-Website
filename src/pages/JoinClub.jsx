import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';
import React, { useState } from "react";
import gymData from "../components/ClubsData";

const JoinClub = () => {
  const [expandedBranches, setExpandedBranches] = useState(
    gymData.countries.flatMap(country => country.branches.map(branch => branch.id))
  );
  const toggleBranch = (branchId) => {
    setExpandedBranches((prevExpanded) =>
      prevExpanded.includes(branchId)
        ? prevExpanded.filter(id => id !== branchId)
        : [...prevExpanded, branchId]
    );
  };
  return (
    <div style={{ backgroundColor: "rgba(23, 5, 5, 0.224)" }}>
      <div style={{ backgroundColor: "black",marginBottom:"6rem" }}>
        <p style={{ padding: "3rem 0 1rem 3rem", color: "white", fontSize: "35px", fontWeight: "500" }}>
          <span style={{ fontSize: "50px", fontFamily: "italic" }}className="neon1">Explore</span> <br />
          Our Diverse <span style={{ fontSize: "50px", fontFamily: "italic" }}> <u className="text">Equinox</u> </span> Branches and Choose One That Resonates With You To Embark On Your Registration
          <span style={{ fontSize: "50px", fontFamily: "italic" }}> Journey Today!</span>
        </p>
      </div>
      {gymData.countries.map((country) =>
        country.branches.map((branch) => (
          <div key={branch.id} className="branch" style={{ padding: "0 3rem 3rem 3rem", }}>
            <div className="row hover-effect1" style={{ borderRadius: "50px", marginTop:"-3rem",padding: "2rem 2rem 2rem 0" }}>
              
              {/* Branch Name, Location, and Contact Information */}
              <div className="col-sm-4" style={{ padding: "3rem 2rem 3rem 2rem" }}>
                <h4>{branch.name}</h4>
                <p>{branch.location}</p>
                <p>{branch.contact}</p>
                <button
                  style={{
                    border: "none",
                    padding: "1rem",
                    borderRadius: "50px",
                    fontSize: "20px",
                    marginTop: "2rem",
                    textShadow: "2px 5px 5px black",
                  }}
                  onClick={() => toggleBranch(branch.id)}
                >
                  {expandedBranches.includes(branch.id) ? "Hide Features" : "Show Features"}
                </button>
              </div>

              {/* Amenities Section */}
              {expandedBranches.includes(branch.id) && (
                <div className="col-sm-4" style={{ padding: "3rem 2rem 2rem 2rem" }}>
                  <h5>{branch.amenities.heading}</h5>
                  <ul>
                    {branch.amenities.listItems.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Branch Image */}
              <div className="col-sm-4">
                <img
                  src={branch.img}
                  alt={`${branch.name} branch`}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div style={{ border: "1px solid white", width: "100%" }}></div>
          </div>
        ))
      )}
    </div>
  );
};

export default JoinClub;

