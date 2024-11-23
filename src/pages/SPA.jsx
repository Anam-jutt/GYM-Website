import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import vidoe from '../assets/vedio/5.mp4';
import { Link } from "react-router-dom";
import img1 from '../assets/img/186.jpg'
import img2 from '../assets/img/187.jpg'
import img3 from '../assets/img/188.jpg'
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import img4 from '../assets/img/logo1.png'
function SPA() {
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* Fixed Video Background */}
        <video
          src={vidoe}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover", // Ensures video fills the viewport
            zIndex: -1,
            filter: "brightness(0.8) contrast(1.1)", // Optional enhancements
          }}
          loop
          muted
          autoPlay
          playsInline
        />

        {/* Overlay Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            padding: "20px",
            textAlign: "center",
            paddingTop: "20vh", // Adjust as needed to vertically center
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              paddingTop: "2.5rem",
            }}
          >
            Regenerate And Elevate Your Performance
          </p>
          <p
            style={{
              fontWeight: "350",
              fontSize: "200px",
              letterSpacing: "10px",
              marginTop: "-5rem",
            }}
          >
            THE SPA
          </p>
          <Link to="/JoinClub">
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                height: "3.5rem",
                width: "15rem",
                fontSize: "25px",
                marginTop: "-2rem",
              }}
            >
              Find a Spa
            </button>
          </Link>
        </div>
        <div className="row parent" style={{marginLeft:"3rem",marginRight:"3rem",textAlign:"left",marginTop:"10rem",marginBottom:"15rem"}}>
          <div className="col-sm-4 slide-up" style={{backgroundColor:"black", borderRight:"1px solid rgba(255, 255, 255, 0.421)",cursor:"pointer"}}>
             <div style={{padding:"30px 0 0 0",paddingLeft:"20px"}}>
             <p style={{color:"white",fontSize:"50px",fontWeight:"500"}}> <sup><span style={{fontSize:"40px",color:"rgba(255, 255, 255, 0.621)"}}>1</span></sup> BODYWORK</p><br />
              <p style={{color:"rgba(255, 255, 255, 0.621)",fontSize:"20px"}}>Direct, hands-on relief applied by Licensed Massage Therapists that blends modalities such as stretching, trigger point therapy, myofascial release, and more.
              </p>
              <p style={{color:"white",fontSize:"25px"}}>Includes:</p>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork (SC)</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"40px"}}>Master Tharepist Bodywork </li>
             </div>
             <div style={{height:"40rem"}}>
              <img src={img1} style={{ height:"100%", width:"100%",objectFit:"cover",paddingBottom:"20px"}} alt="" />
             </div>
          </div>
          <div className="col-sm-4 slide-up" style={{backgroundColor:"black", borderRight:"1px solid rgba(255, 255, 255, 0.421)",cursor:"pointer"}}>
             <div style={{padding:"30px 0 0 0",paddingLeft:"20px"}}>
             <p style={{color:"white",fontSize:"50px",fontWeight:"500"}}> <sup><span style={{fontSize:"40px",color:"rgba(255, 255, 255, 0.621)"}}>2</span></sup> SKINCARE</p><br />
              <p style={{color:"rgba(255, 255, 255, 0.621)",fontSize:"20px"}}>Customized, performance-forward skin therapies applied by a Licensed Esthetician that blend clinical formulas and holistic techniques.
              </p>
              <p style={{color:"white",fontSize:"25px"}}>Includes:</p>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork (SC)</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"40px"}}>Master Tharepist Bodywork </li>
             </div>
             <div style={{height:"40rem"}}>
              <img src={img2} style={{ height:"100%", width:"100%",objectFit:"cover",paddingBottom:"20px"}} alt="" />
             </div>
          </div>
          <div className="col-sm-4 slide-up" style={{backgroundColor:"black",cursor:"pointer"}}>
             <div style={{padding:"30px 0 0 0",paddingLeft:"20px"}}>
             <p style={{color:"white",fontSize:"50px",fontWeight:"500"}}> <sup><span style={{fontSize:"40px",color:"rgba(255, 255, 255, 0.621)"}}>1</span></sup> SPECIALTY</p><br />
              <p style={{color:"rgba(255, 255, 255, 0.621)",fontSize:"20px"}}>Technology based, science backed treatments to optimize your performance, beauty and well-being.
              </p>
              <p style={{color:"white",fontSize:"25px"}}>Includes:</p>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"5px"}}>Bodywork (SC)</li>
              <li style={{color:"rgba(255, 255, 255, 0.621)",paddingBottom:"70px"}}>Master Tharepist Bodywork </li>
             </div>
             <div style={{height:"40rem"}}>
              <img src={img3} style={{ height:"100%", width:"100%",objectFit:"cover",paddingBottom:"20px"}} alt="" />
             </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",color:"white",marginBottom:"13rem"}}>
          <div>
          <p style={{fontSize:"70px",fontWeight:"400",wordSpacing:"10px",letterSpacing:"5px"}}>AT YOUR SERVICE.</p>
          <p style={{fontSize:"25px", letterSpacing:"2px"}}>Browse Locations Near You</p>
          </div>
          <div style={{width:"13rem",height:"4rem",marginTop:"5rem",marginLeft:"4rem",padding:"1rem 0.5rem 1rem 2rem",backgroundColor:"white",}}>
            <Link style={{textDecoration:"none",fontWeight:"500",padding:"rem",color:"black",fontSize:"25px"}}>Find a Spa</Link>
          </div>
        </div>
        <div style={{backgroundColor:"black",color:"white"}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",padding:"5rem 3rem 0rem 3rem" }}>
      <div>
        <Link style={{ textDecoration: "none",fontSize:"22px",color:"black" }}>Corporate Membership</Link>
      </div>
      <div style={{ display: "flex", gap: "1rem",paddingRight:"5rem" }}> {/* Optional: Add gap between links */}
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"white" }}><FaFacebook /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"white" }}><GrTwitter /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"white" }}><IoLogoYoutube /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"white" }}><GrInstagram /></Link>
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",paddingLeft:"5rem"}}>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>Careers</Link>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>Pilates Teacher Training</Link>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>Gift Card</Link>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>Contact Us</Link>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>Member Policies</Link>
      <Link style={{ textDecoration: "none",fontSize:"22px",color:"white",padding:"1rem 0 0 3rem" }}>U.K. Disclosures</Link>
    </div>
    <div style={{marginTop:"2rem",marginBottom:"1rem",display:"flex",justifyContent:"center"}}>
      <img src={img4} height={40} alt="" />
      <p style={{fontSize:"25px", paddingLeft:"2rem", letterSpacing:"3px"}}>THE SPA</p>
    </div>
    <div style={{display:"flex"}}>
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 0.5rem 2rem 3rem", }}>Send Feedback</Link>
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 0.5rem 2rem 3rem", }}>Privacy Policy</Link>
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 0.5rem 2rem 3rem", }}>California Consumer Privacy Statement</Link>
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 0.5rem 2rem 3rem", }}>Do Not Sell or Share My Personal Information</Link>
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 0.5rem 2rem 3rem", }}>FAQs</Link>
    </div>
        </div>
      </div>
    </>
  );
}

export default SPA;
