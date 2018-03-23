import React from "react";
import Brand from "../Brand";
import Navigation from "../Navigation";

// use to set up bootstrapt class. See <Navigation/> component
const justifyContent = "end"; 

const headerLinks = [
  { href: "", label: "HOME" },
  { href: "genre", label: "GENRE" },
  { href: "mycourses", label: "MY VIEWS" },
  { href: "sign-in", label: "LOG IN" },
  { href: "sign-up", label: "SIGN UP" },
];
const headerMenuId = "nav-header";

const headerToggeable = true;

const Header = () => (
  <header className="page-header navbar-light bg-light fixed-top">
    <div id="page-header-container">
      <div className="container-fluid">
        <div className="row row-border justify-content-between">
          <div className="brand-container col-6 col-md-2 menu-border">
            <Brand />
          </div>
          <div className="menu-container col-5 col-md-6 menu-border">
            <Navigation
              menuId={headerMenuId}
              toggleable={headerToggeable}
              links={headerLinks}
              justify={justifyContent} />
          </div>
        </div>
      </div>
    </div>
  </header>);

export default Header;
