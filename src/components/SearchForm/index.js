import React from "react";

function getSearchFormValue() {
  return document.getElementById("movies-search").value;
}

function search() {
  var search,httpRequest;

  var url = "/videos/search";

  search = getSearchFormValue();
  
  console.log(search ? search : "oops no value");
  
  httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
    var result;
    switch (httpRequest.readyState) {
      case XMLHttpRequest.UNSENT:
        break;
      case XMLHttpRequest.LOADING:
        break;
      case XMLHttpRequest.DONE:
        result = JSON.parse(httpRequest.response);
        console.log(result);
    }
  };

  url += `?q=${search}`;

  httpRequest.open("GET", url, true);
  httpRequest.setRequestHeader("Accept", "json");
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send(null);

}


function SearchForm() {
  return (
    <div id="movies-search-container" className="d-flex justify-content-center p-3">
      <form className="search-form w-75 d-flex" autocomplete="off">
        <label className="visuallyhidden " for="movies-search" >Enter movies search query</label>
        <input id="movies-search" className="w-75 p-2" type="text" placeholder="Search movy by title, year, actor ..." name="movies-search" />
        <span id="search-icon" className="d-inline-block h-100">
          <button
            className="h-100"
            type="button"
            onClick={search}><i class="fa fa-search search-form-icon " aria-hidden="true"></i>
          </button>
        </span>
      </form>
    </div>
  );
}

export default SearchForm;