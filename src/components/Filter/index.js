import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DropDownList from "../DropDownList";

import * as  actions from "../../state/actions.js";

const myList = ["item1", "item2", "item3", "item4"]; 
const myLabel = "Genre"; 



class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: this.props.filters[0] || "undefined",
    };
    
    this.list = myList; 
    this.label = myLabel;

    this.setFilter = this.setFilter.bind(this);
    this.selectFiltersOnClick = this.selectFiltersOnClick.bind(this);
  }

  setFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  selectFiltersOnClick(e) {
    let filter = e.target.innerHTML;
    this.setFilter(filter);
    this.props.setFilter(filter);
  }

  render() {
    return (
      <div className="filter-container d-flex p-3 justify-content-between">
        <div className="filter d-flex">
          <div id="genre-filter" className="mx-2" onClick={this.selectFiltersOnClick}>
            <DropDownList label={myLabel} filter={this.state.filter} list={this.props.filters}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters:state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Filter); 
