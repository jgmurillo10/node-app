import React, { Component } from 'react';
import Property from './Property.jsx';
import Attribute from './Attribute.jsx';
class Processing extends Component {
  constructor(props){
    super(props);
    let propps = []
    for (let prop in this.props.data[0]){
      propps.push(prop);
    }
    let attributes = propps.slice();
    this.state = {
      properties: propps,
      attributes: attributes,
      selected: -1,
    }
    this.renderProperties = this.renderProperties.bind(this);
    this.renderAttributes = this.renderAttributes.bind(this);
    this.setID = this.setID.bind(this);
    this.deleteAttribute = this.deleteAttribute.bind(this)
  }
  setID(i){
    console.log('setid',i);
    this.setState({ selected: i });
  }
  deleteAttribute(i){
    let p = this.state.attributes;
    p.splice(i,1);
    this.setState({ attributes: p });

  }

  renderProperties(){
    return this.state.properties.map((property, i) => {
      return (<Property name={property} key={i} id={i} setID={this.setID}></Property>);
    })
  }
  renderAttributes(){
    return this.state.attributes.map((attribute, i) => {
      return (<Attribute name={attribute} key={i} id={i} deleteAttribute={this.deleteAttribute}></Attribute>);
    })
  }
  render(){
    return(
      <div>
        <div>Please select the id
        {
          this.renderProperties()
        }
        {
          this.state.selected !== -1 ? "Selected "+this.state.selected : "No id selected"
        }
        </div>
        <div>
        Select the attributes you want to display
        {
          this.renderAttributes()
        }
        </div>
      </div>
    )
  }
}

export default Processing;
