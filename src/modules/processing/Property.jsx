import React, { Component } from 'react';
class Property extends Component {
  onClickProperty(){
    console.log('onClickProperty');
    this.props.setID(this.props.id)
  }
  render(){
    return(
      <div>
        <button onClick={this.onClickProperty.bind(this)} >{this.props.id  + " : "+this.props.name}</button>
      </div>
    )
  }
}

export default Property;
