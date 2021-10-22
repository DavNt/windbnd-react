import React from "react";
import CountingG from "./counting.component";

export default function GuestCount(props){
  const style = {
    style: 'none'
  }

  return(
    <>
    <div className="guest-count-cont"
      style={props.hiddenCounter?style:null}
    >
      <h6>{props.type}</h6>
      <p>{props.range}</p>
      <div className="guest-counting">
        <CountingG
          sign={'-'}
          count={props.count}
          counter={props.counter}
          type={props.type}
          city={props.city}
        />
        <p>{props.type==='Adults'?props.adultCount:props.childCount}</p>
        <CountingG
          sign={'+'}
          count={props.count}
          counter={props.counter}
          type={props.type}
          city={props.city}
        />
      </div>
    </div>
    </>
  )
}