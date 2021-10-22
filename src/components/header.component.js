import React, {Component} from "react";
import Wbnblogo from '../resources/icons/logo.png';
import Searchic from '../resources/icons/ic_search.png';
// import SearchWindow from "./searchpop.component";
import Drawer from "./drawer.component/drawer";
import Backdrop from "./drawer.component/backdrop";

export default class Header extends Component{
  state = { 
    drawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  };

  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }

  render(){
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop close={this.backdropClickHandler}/>
    }

  
    return(
      <>
      <Drawer show={this.state.drawerOpen}
        closedrawer={this.backdropClickHandler}
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
      {backdrop}
      <nav className="container-fluid pt-2">
        <div className="head_contain">
          <a className="head_icon" href="/">
            <img 
              className="img-responsive" 
              src={Wbnblogo} alt="Logo"
            />
          </a>

          <div className="head_item">
            <div className="">
              <button
                className="search_area"
                onClick={this.drawerToggleClickHandler}
              >
                {`${this.props.city}, ${this.props.country}`}
                <span>|</span>
                {this.props.counter!==0 ?this.props.counter:"Add guest"}
                <span>|</span>
                <img 
                  className="img-responsive"
                  src={Searchic}
                  alt=""
                />
              </button>
            </div>
            
          </div>
        </div>
      </nav>
      </>
    )
  }
}