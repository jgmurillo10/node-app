import React, { Component } from 'react';
class Attribute extends Component {
  onClickAttribute(){
    console.log('onClickAttribute',this.props.id);
    this.props.deleteAttribute(this.props.id);
  }
  render(){
    return(
      <div onClick={this.onClickAttribute.bind(this)}>
        <button>{this.props.id  + " : "+this.props.name}</button>
        <button> X </button>
      </div>
    )
  }
}

export default Attribute;
