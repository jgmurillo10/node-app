import React, { Component } from 'react';
class Attribute extends Component {
  onClickProperty(){
    console.log('onClickProperty');
    this.props.setID(this.props.id)
  }
  onClickAttribute(){
    console.log('onClickAttribute',this.props.id);
    this.props.deleteAttribute(this.props.id);
  }
  render(){
    return(
      <div>
        <button onClick={this.onClickProperty.bind(this)} >{this.props.id  + " : "+this.props.name}</button>
        <button onClick={this.onClickAttribute.bind(this)}> X </button>
      </div>
    )
  }
}

export default Attribute;
