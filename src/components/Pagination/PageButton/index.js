import React from "react";
//import { bindActionCreators } from "redux";
//import { connect } from "react-redux";

//import * as  actions from "../../state/actions.js";

const url = "/videos";

class PageButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let page = parseInt(this.props.page);
    return (
      <button className="m-2"
        onClick={this.props.fetchAllMovies.bind(null, url, { page: page - 1 })}>
        {page}
      </button>
    );
  }
}

export default PageButton; 

/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(PageButton); */