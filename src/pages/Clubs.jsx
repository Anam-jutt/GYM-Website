import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import gymData from "../components/ClubsData";
import { useNavigate } from "react-router-dom";
import FormFooter from "../components/Form";

function GymLocations({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState(null); // Track expanded country

  const navigate = useNavigate();

  const searchItems = gymData.countries.flatMap((country) => [
    { name: country.name, type: "country" },
    ...country.branches.map((branch) => ({
      name: branch.name,
      type: "branch",
    })),
  ]);

  const filteredItems = searchItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleItemClick = (item) => {
    setSearchQuery(item.name);
    setShowSuggestions(false);

    if (item.type === "country") {
      navigate(`/countries/${item.name}`);
    } else if (item.type === "branch") {
      navigate(`/branches/${item.name}`);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  // Toggle branches display
  const toggleCountry = (countryId) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId);
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div>
          <p className="text"
            style={{
              // color: "white",
              padding: "4rem 0 1rem 3rem",
              fontSize: "75px",
              letterSpacing: "2px",
              lineHeight: "70px",
              fontWeight: "600",
            }}
          >
            109 CLUBS <br /> WORLDWIDE: <br /> FIND A CLUB <br /> NEAR YOU
          </p>
        </div>
        <div style={{ backgroundColor: "black", padding: "4rem" }}>
          <h2 style={{ color: "#f0f0f0" }}>Search For Clubs</h2>
          <div
            style={{ position: "relative", maxWidth: "500px", margin: "20px" }}
          >
            <IoSearchOutline
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
                fontSize: "20px",
                marginLeft: "-1.3rem",
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search Location Near You..."
              onBlur={handleBlur}
              style={{
                width: "100%",
                padding: "0.5rem 0.5rem 0.5rem 2.5rem",
                fontSize: "16px",
                color: "#f0f0f0",
                backgroundColor: "#000",
                border: "none",
                borderBottom: "2px solid #f0f0f0",
                outline: "none",
                marginLeft: "-1.2rem",
              }}
            />
          </div>
          {showSuggestions && searchQuery && (
            <ul
              style={{
                listStyleType: "none",
                margin: "0 0 0 3.4rem",
                padding: "0.5rem 0",
                backgroundColor: "#333",
                color: "#f0f0f0",
                borderRadius: "0 0 5px 5px",
                border: "1px solid #444",
                borderTop: "none",
                maxHeight: "150px",
                overflowY: "auto",
                position: "absolute",
                width: "calc(38% - 2.4rem)",
                left: "10px",
                zIndex: 1,
              }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleItemClick(item)}
                    style={{
                      padding: "0.5rem",
                      cursor: "pointer",
                      borderBottom: "1px solid #444",
                    }}
                  >
                    {item.name}
                  </li>
                ))
              ) : (
                <li style={{ padding: "0.5rem", color: "#888" }}>
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>
        <div style={{ margin: "1rem 3rem 3rem 3rem" }}>
          {" "}
          <div style={{ border: "1px solid white", width: "100%" }}></div>
          {data.countries.map((country) => (
            <div key={country.id} className="country-row">
              <div
                className="row hover-effect"
                style={{ borderRadius: "50px" ,padding:"3rem 2rem 2rem 0"}}
              >
                <div className="col-sm-4 " style={{ padding: "2rem " }}>
                  <p style={{ fontSize: "55px" }}>{country.name}</p>
                  <p>{country.description}</p>
                  <button
                    style={{
                      border: "none",
                      padding: "1rem",
                      borderRadius: "20px",
                      fontSize: "20px",
                      textShadow: "2px 5px 5px black",
                      marginTop:"2rem",
                    }}
                    onClick={() => toggleCountry(country.id)}
                  >
                    {expandedCountry === country.id
                      ? "Hide All Clubs"
                      : "View All Clubs"}
                  </button>
                </div>
                <div className="col-sm-4 " style={{ padding: "5rem 0 0 3rem" }}>
                  {/* Display features heading */}
                  <h6 style={{ fontSize: "25px", paddingTop: "1rem" }}>
                    {country.features.heading}
                  </h6>
                  <ul>
                    {country.features.listItems.map((item, index) => (
                      <li key={index}>{item}</li> // Display each featured club
                    ))}
                  </ul>
                </div>
                <div className="col-sm-4">
                  <img
                    src={country.img}
                    alt={`${country.name} location`}
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
              {expandedCountry === country.id && (
                <div className="branches">
                  <div
                    style={{
                      border: "1px solid white",
                      width: "100%",
                      margin: "5rem 0 0 0",
                    }}
                  ></div>
                  {country.branches.map((branch) => (
                    <div
                      className="row hover-effect"
                      style={{ borderRadius: "50px" }}
                    >
                      <div key={branch.id} className="branch ">
                        <div className="row" style={{padding:"2rem 2rem 2rem 0",marginTop:"-1rem"}}>
                          <div
                            className="col-sm-4"
                            style={{ padding: "3rem 2rem 3rem 2rem" }}
                          >
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
                            >
                              {branch.btnText}
                            </button>
                          </div>
                          <div
                            className="col-sm-4"
                            style={{ padding: "3rem 2rem 2rem 2rem" }}
                          >
                            <h5>{branch.amenities.heading}</h5>
                            <ul>
                              {branch.amenities.listItems.map(
                                (amenity, index) => (
                                  <li key={index}>{amenity}</li>
                                )
                              )}
                            </ul>
                          </div>
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
                          <div
                            style={{ border: "1px solid white", width: "100%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <FormFooter />
      </div>
    </>
  );
}

export default function App() {
  return <GymLocations data={gymData} />;
}
