import React, { Component } from 'react';
import './attribute.css';
class Attribute extends Component {
  onClickAttribute(){
    console.log('onClickAttribute',this.props.id);
    this.props.deleteAttribute(this.props.id);
  }
  render(){
    return(
      <div onClick={this.onClickAttribute.bind(this)}>
        <button className="attribute" >{this.props.name}</button>
      <button className="attribute-button"> {this.props.tag} </button>
      </div>
    )
  }
}

export default Attribute;
