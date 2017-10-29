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
  show(){
    this.setState({show:true});
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
          back={'/preprocessing/id'}>
        </Step>

        <div>
          <button onClick={this.show.bind(this)}>show</button>
        </div>
        {/* <div>
          { this.state.show ?
            <NodeNavigatorComponent
              attributes={this.state.attributes}
              data={this.props.data}
              id={this.state.selected}
              updateCallback={this.updateCallback.bind(this)}>
            </NodeNavigatorComponent>
            : ""
          }
        </div> */}
      </div>
    )
  }
}

export default ProcessingAttributes;
