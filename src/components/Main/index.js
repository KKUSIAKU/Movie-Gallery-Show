import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as  actions from "../../state/actions.js";
import ArticleCard from "../ArticleCard";
import Pagination from "../Pagination";
import Filter from "../Filter";
import SearchForm from "../SearchForm";

const url = "/videos";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMovies.bind(null, url, { page: 0 })();
  }

  render() {
    //movies = this.props.movies[this.props.page],
    var movies = this.props.movies, 
      numberOfResult = this.props.numberOfResult,
      ln;

    movies = movies ? movies : [];

    ln = numberOfResult ? numberOfResult :movies.length;

    return (
      <main>
        <SearchForm/>
        <Filter/>
        <p className="text-info px-5">{`${ln} results`} </p>
        <div className="d-flex flex-wrap justify-content-center">
          {movies.map((movie, index) =>
            <div className="articleItem card border-secondary m-1 p-2" key={index}>
              <ArticleCard {...movie} />
            </div>)
          }
        </div>
        <Pagination />
      </main>
    );
  }
}


const mapStateToProps = (state) => {
  let { movies, page, numberOfResult, filter } = state;
  
  movies = movies[page];
  if (filter != "All")
    movies = movies.filter( data => data.genres.includes(filter))

  return {
    movies,
    numberOfResult
  };
};

const mapDispathToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(Main); 