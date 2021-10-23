import React, {useState} from "react";
import LocationList from "./locationlst.component";
import GuestCount from "./gcount.component";

export default function SearchWindow(props) {
  const [hiddenList, setHiddenList] = useState(false);

  function toggle() {
    setHiddenList(wasOpened => !wasOpened);
  }

  return(
    <div className="drawer-contents">
      <div className="draw-things">
        <div className="search-container">
          <div className="txt-search form-floating m-2"
            onClick={()=>{
              setHiddenList(true);
              toggle();
            }}
          >
            <input 
              type="text"
              className="form-control"
              id="searchloc"
              value={`${props.city}, ${props.country}`}
            />
            <label
              for="searchloc"
            >
              Location
            </label>
          </div>
          <div className="txt-search form-floating m-2"
            onClick={()=>{
              setHiddenList(false);
              toggle();
            }}
          >
            <input 
              type="text"
              className="form-control"
              id="searchloc"
              value={props.counter!==0 ?props.counter:""}
            />
            <label
              for="searchloc"
            >
              Add guest
            </label>
          </div>
        </div>
        <div className="search-options-lst">
          {!hiddenList && (
            <div className="search-location">
              <LocationList 
                hiddenLoct={hiddenList}
                selectCity={props.selectCity}
              />
            </div>
          )}
          {hiddenList && (
            <div className="search-guest">
              <GuestCount
                type={'Adults'}
                range={'13 or Above'}
                hiddenCounter={!hiddenList}
                count={props.count}
                counter={props.counter}
                adultCount={props.adultCount}
                childCount={props.childCount}
                city={props.city}
              />
              <GuestCount
                type={'Children'}
                range={'2-12'}
                hiddenCounter={!hiddenList}
                count={props.count}
                counter={props.counter}
                adultCount={props.adultCount}
                childCount={props.childCount}
                city={props.city}
              />
            </div>
          )}
        </div>
      </div>
      <div className="btn_search_div m-2">
        <button
          type="button"
          className="search-btn"
          onClick={()=>{
            props.filterStays(props.city,props.counter);
            props.closedrawer();
          }}
        >
          Search
        </button>
      </div>

    </div>
  )
  
}