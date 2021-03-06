import React, { Component } from 'react';
import Star from './Star';

class Starbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: 3,
    }
  }

  handleOnHover(num){
    this.setState({
      rating: num
    })
  }

  render(){
    return(
      <div className="starbar">
        <Star key='1' value='1' highlight={this.state.rating >= 1}
        onStarHover={event => this.handleOnHover(event)}/>
        <Star key='2'value='2' highlight={this.state.rating >= 2}
        onStarHover={event => this.handleOnHover(event)}/>
        <Star key='3' value='3' highlight={this.state.rating >= 3}
        onStarHover={event => this.handleOnHover(event)}/>
        <Star key='4'value='4' highlight={this.state.rating >= 4}
        onStarHover={event => this.handleOnHover(event)}/>
        <Star key='5'value='5' highlight={this.state.rating >= 5}
        onStarHover={event => this.handleOnHover(event)}/>
        <span> {this.state.rating} Stars </span>
      </div>
    );
  }
}

export default Starbar;