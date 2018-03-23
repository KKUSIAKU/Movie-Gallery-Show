import React from "react";
import Brand from "../Brand";
import Navigation from "../Navigation"; 

const justifyContent = "center";

const footerLinks = [
  {href:"#", label:"About Us"}, 
  {href:"#courses", label:"Terms of use"},
  {href:"#mycourses", label:"Policy"},  
  {href:"#sign-in", label:"Contact Us"}
]; 
const footerMenuId = "footer"; 

const footerToggeable = false; 

const Footer = () => (
  <footer className="page-footer bg-light py-5">
    <div id="page-footer-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className="brand-container col-lg-2 menu-border">
            <Brand />
          </div>
          <div className="menu-container col-lg-6 menu-border">
            <Navigation
              menuId={footerMenuId}
              toggleable = {footerToggeable}
              links = {footerLinks}
              justify={justifyContent}/>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer; 