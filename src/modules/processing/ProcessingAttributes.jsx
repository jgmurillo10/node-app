import React, { Component } from 'react';
import Property from './Property.jsx';
import Attribute from './Attribute.jsx';
import Step from './../step/Step.jsx';
import { FormGroup } from 'material-ui/Form';
import NodeNavigatorComponent from './../visualization/NodeNavigatorComponent.jsx';
class ProcessingAttributes extends Component {
  constructor(props){
    super(props);
    this.renderAttributes = this.renderAttributes.bind(this);
  }
  renderAttributes(){
    return this.props.attributes.map((attribute, i) => {

      return (
        <Attribute
          name={attribute.name}
          checked={attribute.checked}
          key={i}
          id={i}
          changeAttribute={this.props.changeAttribute}
          >
        </Attribute>);
    })
  }
  render(){
    return(
      <div>
        <Step
          step={3}
          name={'Select Attributes'}
          text={'Attributes selected. Click the ones you do not want to display.'}
          component={
            <FormGroup className="row">
            {this.renderAttributes()}
            </FormGroup>
          }
          next={'/visualization'}
          back={'/preprocessing/id'}
          enable={true}>
        </Step>
      </div>
    )
  }
}

export default ProcessingAttributes;
