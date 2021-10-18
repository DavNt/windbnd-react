import React, {Component} from "react";
import './drawer.css';

import SearchWindow from "../searchpop.component";

export default class Drawer extends Component{
  render(){
    let drawerClasses = 'side-drawer'
    if(this.props.show) {
      drawerClasses = 'side-drawer open'
    }

    return(
      <div className={drawerClasses}>
        {/* <h1>Hello, I'm sliding!</h1> */}
        <SearchWindow/>
      </div>
    )
  }
}