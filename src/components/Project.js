import React, { Component } from 'react';

import Starbar from './Starbar/Starbar';

class Project extends Component {

handleButtonClick(){
  window.location.href = this.props.github
}

  render(){
     let cardMargin = {
      marginBottom: "60px",
    }

    return(
      <div className="col-sm-6">
        <div className="card" style={cardMargin}>
          <img className="card-img-top img-fluid" src={this.props.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text text-muted">{this.props.description}</p>
          </div>
          <div className="card-footer clearfix">
            <div className="float-left"><Starbar /></div>
            <button className="btn btn-success float-right" onClick={() => this.handleButtonClick()}>View Project</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;

