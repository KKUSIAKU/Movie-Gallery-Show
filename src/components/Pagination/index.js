import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../state/actions.js";

import PageButton from "./PageButton";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPages: this.props.numberOfPages,
      activePage: 0
    };

    this.createPageLinks = this.createPageLinks.bind(this);
  }

  createPageLinks() {
    let pages = [];
    for (let index = 1; index <= this.state.numberOfPages; index += 1) {
      pages.push(<PageButton
        key={`page-${index}`}
        page={index}
        fetchAllMovies={this.props.fetchAllMovies} />);
    }
    return pages; 
  }

  render() {
    return (
      <div className="search-pages d-flex justify-content-center">
        {this.createPageLinks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let numberOfPages = state.numberOfPages;
  return {
    numberOfPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);