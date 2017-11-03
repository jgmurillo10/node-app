import React, { Component } from "react";
import Button from 'material-ui/Button';
import './export.css';
class Export extends Component {
  exportData(){
    console.log('exporting csv data');
    console.log(this.props.data);
  }
  exportCode(){
    console.log('exporting code');
  }
  render(){
    return(
      <div className="export">
      <Button className="export-button" raised color="primary" onClick={this.exportData.bind(this)}>
        Export CSV
      </Button>
      <Button className="export-button" raised color="accent" onClick={this.exportCode.bind(this)} >
        Export Code
      </Button>
      </div>
    )
  }
}
export default Export;
