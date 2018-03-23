import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import ToggleButton from "../ToggleButton";

// Bootstrap justify-content registry
const justifyContent = {
  end: "justify-content-end",
  start: "justify-content-start",
  center: "justify-content-center"
};

const createLinkItem = (link, key) => {
  // check later to include regex formulation on ref
  if (!link.hasOwnProperty("href") || !link.hasOwnProperty("label")) {
    throw new Error("In NavigationBar component :" +
      "Invalid link property assigned to NavigationBar." +
      "Each link item shoud be in form of {href:value, label:value}");
  }

  return (
    <li className="nav-item" key={key}>
      <a className="nav-link" href={`#${link.href}`}>{link.label}</a>
    </li>);
};

// justify props: see justifyContent variable above 
const NavigationLinks = ({ links, justify }) => {
  let align = "";

  if (justify in justifyContent) {
    align = justifyContent[justify];
  }

  return (
    <ul className={`navbar-nav  container ${align} flex-row flex-wrap`}>
      {links.map((link, index) => createLinkItem(link, index))}
    </ul>
  );
};

// .flex-row set flex-direction to row. It is redundand with navbar-expand-md but this on is present only from medium size device
const Navigation = (props) => {
  var { links, toggleable, menuId, justify, children } = props; 

  invariant(
    React.Children.count(children) == 0, 
    "Navigation may not have any child component"
  ); 

  return (
    <nav id={`nav-${menuId}`} className="navbar navbar-expand-md ">
      <p></p>
      {toggleable && <ToggleButton targetId={menuId}/>}
      <div className={toggleable ? "collapse navbar-collapse" : ""} id={`${menuId}`}>
        <NavigationLinks links={links} justify={justify}/>
      </div>
    </nav>
  );
} ;


Navigation.defaultProps = {
  toggleable: true,
},

Navigation.propTypes = {
  links: PropTypes.arrayOf(Object).isRequired,
  menuId: PropTypes.string.isRequired,
  toggleable: PropTypes.bool,
};


export default Navigation;
