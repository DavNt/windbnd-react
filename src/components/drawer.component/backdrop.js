import React, {Component} from "react";
import './backdrop.css';

export default class Backdrop extends Component{
  render(){
    return(
      <div 
        className="backdrop"
        onClick={this.props.close}
      ></div>
    )
  }
}