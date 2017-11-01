import React, { Component } from 'react';
import * as vega from 'vega';
import { Link } from 'react-router-dom';
import Step from './../step/Step.jsx';
import Dropzone from 'react-dropzone';
import styles from './load.css';
import Error from './../Error.jsx';

class Load extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null,
      enable: false,
      accepted: [],
      rejected: [],
      open: false,
      finalSize: '',
      spinning: false,
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
    this.setState({
      spinning: true,
    })
    const reader = new FileReader();
    // const file =  event.target.files[0];
    if(file == null){
      alert('No file selected.');
      return;
    }
    this.props.setFile(file)
    let fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
    let fSize = file.size;
    let i=0;
    while(fSize>900){
      fSize/=1024;
      i++;
    }
    let finalSize = Math.round(fSize*100)/100 +' '+fSExt[i];
    this.setState({
      fileSize: finalSize
    })

    reader.onload = (lEvent: any) => {
      const name = file.name.replace(/\.\w+$/, '');
      const format = file.name.split('.').pop();

      let values;
      try {
        values = vega.read(lEvent.target.result, {type: format});
        this.props.setData(values);
        this.setState({enable:true})
        this.setState({
          spinning: false,
        })
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
          <p><strong>File size: </strong>{this.state.fileSize}</p>
          </div>
    );
  }
    else {
      return null
    }

  }
  onDrop(accepted,rejected) {
    console.log(accepted,rejected);
    if (accepted.length !== 0){
      this.handleDataset(accepted[0]);
    }else{
      this.props.setFile(null)
      this.setState({
        open: true,
      })
      console.log('Type file not supported.');
    }
  }
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  render() {
    let dropzoneRef;
    const divStyle = {
      padding: '1em',
      margin: '0.5em',
      border: '5px dashed lightblue',
      width: '100%'
    };
    const rejectStyle = {
      padding: '1em',
      margin: '0.5em',
      border: '5px solid red',
    };
    const acceptStyle = {
      padding: '1em',
      margin: '0.5em',
      border: '5px solid green'
    };

    // const comp = (<input accept=".csv,.json" onChange={this.handleDataset} type="file"/>);
    const comp = (
      <div>
        <Error
          title={'Error'}
          errorMessage={'File type not supported. Try uploading *.csv or *.json file.'}
          open={this.state.open}
          handleRequestClose={this.handleRequestClose.bind(this)}
          >

        </Error>
        <Dropzone
          accept=".csv"
          multiple={false}
          style={divStyle}
          rejectStyle={rejectStyle}
          acceptStyle={acceptStyle}
          ref={(node) => { dropzoneRef = node; }}
          onDrop={this.onDrop.bind(this)}>
          {
            this.state.spinning ?
            <div>
              <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
              <span class="sr-only">Loading...</span>
            </div>
            : ''
          }
            {
              this.props.file ?
              this.renderResponse() :
              <div>
                <p>Try dropping some files here, click to select files to upload or click on upload file.</p>
                <p>Only *.csv and *.json will be accepted</p>
              </div>
            }



        </Dropzone>
        <button type="button" onClick={() => { dropzoneRef.open() }}>
            Upload dataset
        </button>
      </div>
    );
    return (
      <div>
        <Step
          step={1}
          name={'Upload dataset'}
          component={comp}
          action={this.handleDataset}
          next={'/preprocessing/id'}
          back={'/'}
          enable={this.state.enable}
          msg={'You must upload a dataset before continue.'}
          >
        </Step>

      </div>
    );
  }
}

export default Load;
