import React, {Component} from "react";

export default class SearchWindow extends Component{
  

  render(){
    return(
      <>
      <div className="search-container">
        <div className="txt-search form-floating">
          <input 
            type="text"
            className="form-control"
            id="searchloc"
          />
          <label
            for="searchloc"
          >
            Location
          </label>
        </div>
        <div className="txt-search form-floating">
          <input 
            type="text"
            className="form-control"
            id="searchloc"
          />
          <label
            for="searchloc"
          >
            Add guest
          </label>
        </div>
        <div className="btn_search_div">
          <button
            type="button"
            className="search-btn"
          >
            Search
          </button>
        </div>
      </div>
      </>
    )
  }
}