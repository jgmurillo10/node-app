import React, { Component } from 'react';
import * as vega from 'vega';
import { Link } from 'react-router-dom';
import Step from './../step/Step.jsx';
class Load extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
      enable: false,
    }
    this.handleDataset = this.handleDataset.bind(this)
  }
  handleDataset(event){
    console.log('handleDataset');
    const reader = new FileReader();
    const file =  event.target.files[0];
    if(file == null){
      alert('No file selected.');
    }
    this.setState({file: file})

    reader.onload = (lEvent: any) => {
      const name = file.name.replace(/\.\w+$/, '');
      const format = file.name.split('.').pop();

      let values;
      try {
        values = vega.read(lEvent.target.result, {type: format});
        this.props.setData(values);
        this.setState({enable:true})
        console.log(values);
      } catch (err) {
        window.alert(err.message);
      }

      // handleAction(datasetLoad(name, {values, format}));
    };

    reader.readAsText(file);
  }
  render() {
    const comp = (<input accept=".csv,.json" onChange={this.handleDataset} type="file"/>);
    return (
      <div>
      <Step
        step={1}
        name={'Add dataset'}
        text={'please select json or csv file'}
        component={comp}
        action={this.handleDataset}
        next={'/preprocessing/id'}
        back={'/'}
        enable={this.state.enable}
        msg={'You must upload a dataset.'}>
      </Step>
        <div>

          {
            this.state.file ?
            <div>
              <p>{this.state.file.name}</p>
              <p>{this.state.file.type}</p>
              <p>{this.state.file.size}</p>
            </div>
            :
            ""
          }
        </div>
      </div>
    );
  }
}

export default Load;
