import React, { Component } from 'react';
import './step.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Step extends Component {
  getBreadcrumb(){
    let i  = this.props.step;
    let dir = ['/','/preprocessing/load/','/preprocessing/id','/preprocessing/attributes','/visualization'];
    let names = ['home', 'load','id','attributes','visualization']
    return dir.map((path,it) => {
      if (it >= i) {
        return;
      }
      return (<Link className="btn" to={path}>{'/ step '+ it + ': '  +names[it]}</Link>);
    });
  }
  render(){
    const { classes } = this.props;
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
            <h4 className="step-response-msg">{this.props.text}</h4>
            <div>
              {this.props.component}
            </div>
            <div>
              {
                this.props.enable
                ?
                <div>
                  <hr></hr>
                <h4 className="step-response-msg">
                    {this.props.responseMsg}
                  </h4>
                  <div>
                    {this.props.response}
                  </div>
                </div>
                : ""
              }
            </div>

          </div>
          <div className="step-footer">
            {
              this.props.enable ?
              "" :
              <div class="alert alert-warning">
                <strong>Warning!</strong> {this.props.msg}
              </div>

            }
            <div>
            <Link className="step-button"  to={this.props.back}>
              <Button fab color="primary" aria-label="add">
                <i class="fa fa-2x fa-angle-double-left" aria-hidden="true"></i>
              </Button>
            </Link>
            {
              this.props.enable ?
              <Link className="step-button" to={this.props.next}>
                <Button fab color="primary" aria-label="add">
                  <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                </Button>
              </Link> :
              // <Link className="step-button" to={'/'} disabled>
                <Button  fab color="primary" disabled aria-label="add" className="step-button">
                  <i class="fa fa-2x fa-angle-double-right" aria-hidden="true"></i>
                </Button>
              // </Link>
            }
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Step;
