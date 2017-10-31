import React, { Component } from 'react';
import * as vega from 'vega';
import { Link } from 'react-router-dom';
import Step from './../step/Step.jsx';
import Dropzone from 'react-dropzone';
class Load extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
      enable: false,
      files: [],
    };
    this.state.response = {};
    this.handleDataset = this.handleDataset.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
  };
  componentDidMount(){
    if(this.props.file){
      this.setState({enable:true});
    }else{
      this.setState({enable:false});
    }
  }
  handleDataset(file){
    const reader = new FileReader();
    // const file =  event.target.files[0];
    if(file == null){
      alert('No file selected.');
    }
    this.props.setFile(file)

    reader.onload = (lEvent: any) => {
      const name = file.name.replace(/\.\w+$/, '');
      const format = file.name.split('.').pop();

      let values;
      try {
        values = vega.read(lEvent.target.result, {type: format});
        this.props.setData(values);
        this.setState({enable:true})
      } catch (err) {
        window.alert(err.message);
      }
    };

    reader.readAsText(file);
  }
  renderResponse(){
    if (this.props.file){

      return (
          <div>
            <p><strong>Name:</strong> {this.props.file.name}</p>
            <p><strong>File type: </strong>{this.props.file.type}</p>
            <p><strong>File size: </strong>{this.props.file.size}</p>
          </div>
    );
  }
    else {
      return null
    }

  }
  onDrop(files) {
    console.log(files);
    if (files.length !== 0){
      this.handleDataset(files[0]);
    }else{
      console.log('Type file not supported.');
    }
    // this.setState({
    //   files
    // });
  }
  render() {
    let dropzoneRef;
    let accepted = {
      backgroundColor: 'black'
    }
    let rejected = {
      backgroundColor: 'red'
    }
    // const comp = (<input accept=".csv,.json" onChange={this.handleDataset} type="file"/>);
    const comp = (
      <div>
        <Dropzone
          multiple={false}

          acceptStyle={accepted}
          // rejectStyle={"dropzone-rejected"}
          ref={(node) => { dropzoneRef = node; }}
          accept=".json,.csv"
          onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, click to select files to upload or click on upload file.</p>
            <p>Only *.csv and *.json will be accepted</p>
        </Dropzone>
        <button type="button" onClick={() => { dropzoneRef.open() }}>
            Upload dataset
        </button>
        <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
        </ul>
      </div>
    );
    return (
      <div>
        <Step
          step={1}
          name={'Upload dataset'}
          text={'please select *.json or *.csv file'}
          component={comp}
          action={this.handleDataset}
          next={'/preprocessing/id'}
          back={'/'}
          enable={this.state.enable}
          msg={'You must upload a dataset before continue.'}
          response={this.renderResponse()}
          responseMsg={'Dataset selected'}>
        </Step>

      </div>
    );
  }
}

export default Load;
