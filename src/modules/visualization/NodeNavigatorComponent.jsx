import React, {Component} from "react";
import PropTypes from "prop-types";
import NodeNavigator from "./NodeNavigator.js";
let d3 = require("d3");
class NodeNavigatorComponent extends Component {
  constructor(props){
    super(props);
    console.log(this.props.data[0]);
    let propps = []
    for (let prop in this.props.data[0]){
      console.log(prop);
      propps.push(prop)
    }
    this.state = {
      properties: propps
    }
  }
  getTypeProperty(prop){

  }
  componentDidMount() {
    console.log("NodeNavigatorComponent did mount");
    this.nn = new NodeNavigator(this.target, 600)
      .id("car-id")
      .updateCallback(this.props.updateCallback);
    this.nn.addCategoricalAttrib("name")
      .addCategoricalAttrib("data");
      this.state.properties.map((d,i)=>{
        console.log(d,i);
        this.nn.addCategoricalAttrib(d);
      })

    if (this.props.data) {
      this.nn.data(this.props.data);
    }
  }
  componentWillUpdate(newProps) {
    console.log("NodeNavigatorComponent will update data.length=" + newProps.data.length);
    if (newProps.data.length !== this.props.data.length)
      this.nn.data(newProps.data);
  }
  render() {
    console.log("NodeNavigatorComponent render" );
    return (
      <div
        className="NodeNavigatorComponent"
        ref={(target) => this.target = target }></div>);
  }
}
NodeNavigatorComponent.propTypes = {
  data: PropTypes.array.isRequired,
  updateCallback: PropTypes.func.isRequired
};
export default NodeNavigatorComponent;
