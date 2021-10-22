import React from "react";
import LocIC from '../resources/icons/ic_location_on_2x.png';

export default function LocationItem(props){
  return(
    <>
    <div className="location-item"
      onClick={()=>{
        props.selectCity(props.city, props.country);
      }}
    >
      <img src={LocIC} alt="" className="icon_locat img-responsive"/>
      <p>{`${props.city}, ${props.country}`}</p>
    </div>
    </>

  )
}