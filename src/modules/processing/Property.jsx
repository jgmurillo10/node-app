import React, { Component } from 'react';
import './attribute.css';
class Property extends Component {
  onClickProperty(){
    console.log('onClickProperty');
    this.props.setID(this.props.name)
  }
  render(){
    return(
      <div>
        <button
          className="attribute"
          onClick={this.onClickProperty.bind(this)}
        >
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Property;
