import React, { Component } from 'react';
import * as vega from 'vega';
class Load extends Component {
  constructor(props){
    super(props);
    this.state = {
      file: null
    }
    this.handleDataset = this.handleDataset.bind(this)
  }
  handleDataset(event){
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
        console.log(values);
      } catch (err) {
        window.alert(err.message);
      }

      // handleAction(datasetLoad(name, {values, format}));
    };

    reader.readAsText(file);
  }
  render() {
    return (
      <div>
        <div>
          <div>Add dataset</div>
        <p><strong>File</strong> <input accept=".csv,.json" onChange={this.handleDataset} type="file"/> </p>
        </div>
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
        <button onClick={this.props.hide}>
          Submit
        </button>
      </div>
    );
  }
}

export default Load;
