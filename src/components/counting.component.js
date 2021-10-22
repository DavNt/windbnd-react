import React from "react";

export default function CountingG(props){
  return(
    <div className="counting-btn-cont">
      <button
        className="count-btn"
        onClick={()=>{
          props.count(props.sign, props.type);
        }}
      >
        {props.sign}
      </button>
    </div>
  )
}