import React, { Component } from 'react';
import './attribute.css';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';
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

  handleChange = name => (event, checked) => {
    console.log('name',name,'event',event,'checked',checked);
    this.setState({ [name]: checked });
    this.props.changeAttribute(this.props.id);
  };

  state = {
   checkedA: true,
  };
  render(){
    return(
        <FormControlLabel
          className="cursor col-md-6"
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              aria-label="checkedA"
            />
          }
          label={this.props.name}
        />
    )
  }
}

export default Attribute;
