import React from "react";
import stays from '../resources/database/stays.json';
import LocationItem from "./locitem.component";

export default function LocationList(props){
  // const style = {
  //   display: 'none'
  // }

  const cities = new Map();

  stays.forEach(stay=>{
    if(!cities.has(stay.city)){
      cities.set(stay.city,stay.country)
    }
  });

  return(
    <>
    <div className="location-item-contain"
      // style={props.hiddenLoct?style:{}}
    >
      {Array.from(cities.keys()).map(city=>{
        return(
          <LocationItem
            city={city}
            country={cities.get(city)}
            selectCity={props.selectCity}
          />
        )
      })}
    </div>
    </>
  )
}