import React, { Component } from 'react';
import Property from './Property.jsx';
import Step from './../step/Step.jsx';
import Radio, { RadioGroup } from 'material-ui/Radio';
class ProcessingID extends Component {

  constructor(props){
    super(props);
    this.renderProperties = this.renderProperties.bind(this);
    this.state = {
      enable: false,
      value: '',
    }
  }

  setID(id){
    this.setState({ enable:true });
    this.props.setID(id);
  }
  componentDidMount(){
    if (this.props.selected){
      this.setState({enable:true});
    }
    else{
      this.setState({enable:false});
    }
  }
  renderProperties(){
    const styles = theme => ({
      root: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
    });

    return this.props.attributes.map((att, i) => {
      if (this.props.selected && this.props.selected === att.name){
            return (<Property name={att.name} key={i} id={i} setID={this.setID.bind(this)} selected={true}></Property>);
      } else{
          return (<Property name={att.name} key={i} id={i} setID={this.setID.bind(this)} selected={false}></Property>);
      }

    })
  }
  handleChange = (event, value) => {
    this.setID(value);
  };
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Step
          step={2}
          name={'Select ID'}
          text={'please select the id (just one) of your dataset'}
          component={this.renderProperties()}
          next={'/preprocessing/attributes'}
          back={'/preprocessing/load'}
          enable={this.state.enable}
          msg={'You must select an ID'}
          >
        </Step>
      </div>
    )
  }
}

export default ProcessingID;
