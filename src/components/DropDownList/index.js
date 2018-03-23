import React from "react";

const DropDownList = ({ label,filter, list }) => {
  return (
    <div className="d-flex flex-row">
      <div className="filter-label mx-2">{label}</div>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button" id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {filter}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {list.map((item, index) => <li className="dropdown-item"
            key={`${label}-item-${index}`}>
            {item}
          </li>)}
        </ul>
      </div>
    </div>
  );
};



export default DropDownList;