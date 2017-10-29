import React, { Component } from 'react'
import Load from './../load/Load.jsx';
import { Link } from 'react-router-dom';
class Home extends Component {
  goToLoad(){
    console.log('goToLoad');
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="pull-right" >
              <img width={160} src="https://raw.githubusercontent.com/john-guerra/NodeNavigator/master/src/example.png" alt="node navigator"></img>
            </div>
          </div>
          <div className="col-md-6">
            <strong>NodeNavigator</strong> is a d3.js visualization widget to help summarizing, browsing and navigating large network visualizations.

          </div>
        </div>
        <div className="pull-center">
            <Link className="btn loadDataButton" aria-label="load data" to={'/preprocessing/load/'}>Let's get started.</Link>
        </div>
      </div>
    )
  }
}


export default Home;
