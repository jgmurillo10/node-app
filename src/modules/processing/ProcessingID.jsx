import React, { Component } from 'react';
import Property from './Property.jsx';
import Step from './../step/Step.jsx';
class ProcessingID extends Component {
  constructor(props){
    super(props);
    this.renderProperties = this.renderProperties.bind(this);
  }
  renderProperties(){
    return this.props.properties.map((property, i) => {
      return (<Property name={property} key={i} id={i} setID={this.props.setID}></Property>);
    })
  }
  render(){
    return(
      <div>
        <Step
          step={2}
          name={'ID'}
          text={'please select the id'}
          component={this.renderProperties()}
          next={'/preprocessing/attributes'}
          back={'/preprocessing/load'}>
        </Step>
      </div>
    )
  }
}

export default ProcessingID;
