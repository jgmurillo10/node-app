import React, { Component } from 'react';
import './attribute.css';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';
const styles = {
  bar: {},
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  },
};
class Attribute extends Component {
  onClickAttribute(){
    console.log('onClickAttribute',this.props.id);
    this.props.deleteAttribute(this.props.id);
  }
  handleChange = name => (event, checked) => {
    console.log('name',name,'event',event,'checked',checked);
    this.setState({ [name]: checked });
  };

  state = {
   checkedA: false
  };
  render(){
    return(
      <div className="cursor" onClick={this.onClickAttribute.bind(this)}>
        <button  className={this.props.sty + " attribute" }>{this.props.name}</button>
        <button  className={this.props.sty + " attribute-button"}> {this.props.tag} </button>
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          aria-label="checkedA"
        />

      </div>
    )
  }
}

export default Attribute;
