import React, {Component} from "react";
import Wbnblogo from '../resources/icons/logo.png';
import Searchic from '../resources/icons/ic_search.png';
// import SearchWindow from "./searchpop.component";
import Drawer from "./drawer.component/drawer";
import Backdrop from "./drawer.component/backdrop";

export default class Header extends Component{
  state = { drawerOpen: false };

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
      <Drawer show={this.state.drawerOpen}/>
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
                Location
                <span>|</span>
                Add guest
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