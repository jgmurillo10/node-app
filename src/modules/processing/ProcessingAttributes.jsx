import React, { Component } from 'react';
import Property from './Property.jsx';
import Attribute from './Attribute.jsx';
import Step from './../step/Step.jsx';
import NodeNavigatorComponent from './../visualization/NodeNavigatorComponent.jsx';
class ProcessingAttributes extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
  }
  renderAttributes(){
    return this.props.attributes.map((attribute, i) => {
      return (<Attribute name={attribute} key={i} id={i} deleteAttribute={this.props.deleteAttribute}></Attribute>);
    })
  }
  renderDeleted(){
    return this.props.deleted.map((attribute, i) => {
      return (<Attribute name={attribute} key={i} id={i} deleteAttribute={this.props.addAttribute}></Attribute>);
    })
  }
  updateCallback(){
    console.log('updateCallback');
  }
  render(){
    return(
      <div>
        <Step
          step={3}
          name={'Attributes'}
          text={'please select the attributes to display'}
          component={this.renderAttributes()}
          next={'/visualization'}
          back={'/preprocessing/id'}
          enable={true}
          msg={null}
          response={this.renderDeleted()}
          responseMsg={'Attributes deleted. Click one to add'}>
        </Step>
      </div>
    )
  }
}

export default ProcessingAttributes;
