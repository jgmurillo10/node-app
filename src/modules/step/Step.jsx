import React, { Component } from 'react';
import './step.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Step extends Component {
  getBreadcrumb(){
    let i  = this.props.step;
    let dir = ['/','/preprocessing/load/','/preprocessing/id','/preprocessing/attributes','/visualization'];
    let names = ['home', 'load','id','attributes','visualization']
    return dir.map((path,it) => {
      if (it >= i || it === 0) {
        return;
      }
      return (<Link className="btn" to={path}>{'/ step '+ it + ': '  +names[it]}</Link>);
    });
  }
  render(){
    return (
      <div>
        <div className="breadcrumb">
          {this.getBreadcrumb()}
        </div>
        <div className="step-container">

          <div className="step-header row">
            <div className="step-number-container col-md-1">
              <div className="step-number">{this.props.step}</div>
            </div>
            <h1 className="step-title col-md-10">{this.props.name}</h1>
          </div>
          <hr></hr>
          <div className="step-content">
            <p>{this.props.text}</p>
            <div>
              {this.props.component}
            </div>
            <div>
              {
                this.props.enable
                ?
                <div>
                  <hr></hr>
                <h3 className="step-response-msg">
                    {this.props.responseMsg}
                  </h3>
                  <div>
                    {this.props.response}
                  </div>
                </div>
                : ""
              }
            </div>

          </div>
          <div className="step-footer">
            <Link className="btn step-button" to={this.props.back}> {'<< back'}</Link>
        {
          this.props.enable ? <Link className="btn step-button" to={this.props.next}>{'next >>'}</Link> : this.props.msg
        }

          </div>
        </div>
      </div>
    )
  }
}

export default Step;
