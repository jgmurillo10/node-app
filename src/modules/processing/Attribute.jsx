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
  onClickAttribute(){
    console.log('onClickAttribute',this.props.id);
    this.props.deleteAttribute(this.props.id);
  }
  handleChange = name => (event, checked) => {
    console.log('name',name,'event',event,'checked',checked);
    this.setState({ [name]: checked });
  };

  state = {
   checkedA: true,
  };
  render(){
    return(
        <FormControlLabel
          className="cursor col-md-6" onClick={this.onClickAttribute.bind(this)}
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
