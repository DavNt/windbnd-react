import React, {Component} from "react";
import Staric from '../resources/icons/ic_star.png';

export default class Places extends Component{
  constructor(props){
    super(props);

    this.state = {
      
    };
  }
  render(){
    // const {data} = this.state;
    return(
      <>
      <div className="container">
        <div className="row my-5 justify-content-between">
          <div className="col">
            <h4>Stays in {this.props.country}</h4>
          </div>
          <div className="col-4">
            <p className="text-end">{`${this.props.countStay}+ stays`}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.props.stayArr.map((place, index) =>{
            return(
              <div className="col-lg-4 mb-5">
                <img 
                  className="img-responsive place_img"
                  src={place.photo}
                  alt=""
                />
                <div className="details-p">
                  {place.superHost ? (
                    <span className="is-host">
                      SuperHost
                    </span>
                  ) : (
                    <></>
                  )}
                  <span className="list_type">
                    {place.type} . {place.beds} beds
                  </span>
                  <span className="ratings">
                  <img
                    className="star"
                    src={Staric}
                    alt=""
                  />
                  {place.rating}
                  </span>
                </div>
                <h5>{place.title}</h5>
              </div>
            )
          })}
        </div>
      </div>
      </>
    )
  }
}