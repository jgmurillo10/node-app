import React, { Component } from 'react'
import Load from './../load/Load.jsx';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedE: true,
  };
  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };
  render() {

    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <div className="pull-right" >
              <img width={160} src="https://raw.githubusercontent.com/john-guerra/NodeNavigator/master/src/example.png" alt="node navigator"></img>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
            <strong>NodeNavigator</strong> is a d3.js visualization widget to help summarizing, browsing and navigating large network visualizations.


            <p>Steps: </p>
          <div className="">
            <ul>
              <li>
                <div>
                  1. Upload a dataset
                </div>
                <div>
                  <img width={300} src="https://media.giphy.com/media/l1LbW40AxOoKHMYDK/giphy.gif" alt="step one node navigator"></img>
                </div>
              </li>
              <li>
                <div>2. Select the dataset ID</div>
                <div>
                  <img  width={300} src="https://media.giphy.com/media/xT4App7YY0qQ0Y5Y1W/giphy.gif" alt="step one node navigator"></img>
                </div>
              </li>

              <li>3. Select the attributes to display
                <div>
                  {/* <img  width={300} src="https://media.giphy.com/media/l1LbW40AxOoKHMYDK/giphy.gif" alt="step one node navigator"></img> */}
                </div>
              </li>
              <li>4. Use the NodeNavigator
                <div>
                  {/* <img  width={300} src="https://media.giphy.com/media/l1LbW40AxOoKHMYDK/giphy.gif" alt="step one node navigator"></img> */}
                </div>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="pull-center">
            <Link className="btn loadDataButton card-1" aria-label="load data" to={'/preprocessing/load/'}>
              <div className="button-container">
                Let's get started.
              </div>
            </Link>
        </div>
      </div>
    )
  }
}


export default Home;
