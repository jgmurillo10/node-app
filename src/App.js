import React, { Component } from 'react';
import Load from './modules/load/Load.jsx';
import Processing from './modules/processing/Processing.jsx';
import './modules/load/load.css';
import NodeNavigatorComponent from './modules/visualization/NodeNavigatorComponent.jsx';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      data: [],
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  show() {
    console.log('show');
    this.setState({ showModal: true });
  }
  hide(){
    console.log('hide');
    this.setState({ showModal: false });
  }
  setData(data){
    this.setState({ data: data})
  }

  render() {
    return (
      <div className="container">
        <div className="App-title">
          <h1 className="heading">NodeNavigator</h1>

        </div>
        <div className="App-content">
          <div>
          {
            this.state.showModal ?
              <Load hide={this.hide} setData={this.setData.bind(this)}/>
            :
              <button className="loadDataButton" onClick={this.show}>
                load data
              </button>
          }
          </div>
          <div>
          {
            this.state.data.length===0 ?
            ""
            :
            <div>
              <Processing
                data={this.state.data}
                >
              </Processing>
            </div>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
