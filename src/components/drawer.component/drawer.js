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
        <SearchWindow
          closedrawer={this.props.closedrawer}
          hiddenList={this.props.hiddenList}
          selectCity={this.props.selectCity}
          count={this.props.count}
          counter={this.props.counter}
          adultCount={this.props.adultCount}
          childCount={this.props.childCount}
          city={this.props.city}
          country={this.props.country}
          setHiddenList={this.props.setHiddenList}  
          filterStays={this.props.filterStays}
          countStay={this.props.countStay}
          stayArr={this.props.stayArr}
          />
      </div>
    )
  }
}