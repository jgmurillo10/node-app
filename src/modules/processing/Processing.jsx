import React, { Component } from 'react';
import Property from './Property.jsx';
import Attribute from './Attribute.jsx';
import NodeNavigatorComponent from './../visualization/NodeNavigatorComponent.jsx';
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
      selected: "",
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
  updateCallback(filteredData) {
    console.log('updateCallback');

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
  show(){
    this.setState({show:true});
  }
  render(){
    return(
      <div>
        <div>Please select the id
        {
          this.renderProperties()
        }
        {
          this.state.selected !== "" ? "Selected "+this.state.selected : "No id selected"
        }
        </div>
        <div>
        Select the attributes you want to display
        {
          this.renderAttributes()
        }
        </div>
        <div>
          <button onClick={this.show.bind(this)}>show</button>
        </div>
        <div>
          { this.state.show ?
            <NodeNavigatorComponent
              attributes={this.state.attributes}
              data={this.props.data}
              updateCallback={this.updateCallback.bind(this)}>
            </NodeNavigatorComponent>
            : ""
          }
        </div>
      </div>
    )
  }
}

export default Processing;
