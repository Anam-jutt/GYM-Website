import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import img4 from '../assets/img/logo1.png';
import '../index.css';
function Footer() {
  return (
    <>
      <div style={{backgroundColor:"black",color:"white"}}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",padding:"5rem 3rem 0rem 3rem" }}>
      <div>
        <Link style={{ textDecoration: "none",fontSize:"29px",fontWeight:"bold",color:"white" }}>Corporate Membership</Link>
      </div>
      <div style={{ display: "flex", gap: "1rem",paddingRight:"5rem" }}> {/* Optional: Add gap between links */}
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"" }} className="i1"><FaFacebook /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"" }} className="i2"><GrTwitter /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"red" }} className="i3"><IoLogoYoutube /></Link>
      <Link style={{ textDecoration: "none", fontSize: "24px",color:"#D55157" }} className="i4"><GrInstagram /></Link>
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
      <Link  style={{ textDecoration: "none",fontSize:"20px",color:"white",padding:"3rem 03rem 2rem 3rem", }}>FAQs</Link>
    </div>
        </div>
    </>
  );
}
export default Footer;
