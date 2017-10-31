import React, { Component } from 'react';
import Home from './home/Home.jsx';
import Load from './load/Load.jsx';
import ProcessingID from './processing/ProcessingID.jsx';
import ProcessingAttributes from './processing/ProcessingAttributes.jsx';
import NodeNavigatorComponent from './visualization/NodeNavigatorComponent.jsx';
import './load/load.css';
import './../index.css';
import { Switch, Route } from 'react-router-dom';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      selected: "",
      properties: [],
      deleted: [],
      file: null,
      attributes: [],
    }

  }
  setData(data){
    let propps = []
    let atts = []
    for (let prop in data[0]){
      let i = {};
      i.name = prop;
      i.checked = true;
      atts.push(i);
      propps.push(prop);
    }
    this.setState({
      data: data,
      attributes: atts
   })

  }
  updateCallback(data){
    console.log('updateCallback');
    this.setState({ filteredData: data});
  }
  changeAttribute(i){
    console.log(this.state.attributes);
    let atts = this.state.attributes;

    atts[i].checked = !atts[i].checked;
    this.setState({
      attributes: atts,
    })
  }
  setID(id){
    this.setState({ selected: id });
  }
  setFile(file){
    this.setState({ file: file });
  }
  render(){
    const extraProps = { color: 'red' }
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/preprocessing/load' render={(props) => (
            <Load {...props}
              setData={this.setData.bind(this)}
              setFile={this.setFile.bind(this)}
              file={this.state.file}/>
          )}/>
          <Route path='/preprocessing/id' render={(props) => (
            <ProcessingID {...props}
              data={this.state.data}
              setID={this.setID.bind(this)}
              properties={this.state.properties}
              selected={this.state.selected}
              attributes={this.state.attributes}
              />
          )}/>
        <Route path='/preprocessing/attributes' render={(props) => (
            <ProcessingAttributes {...props}
              data={this.state.data}
              changeAttribute={this.changeAttribute.bind(this)}
              attributes={this.state.attributes}/>
          )}/>
        <Route path='/visualization' render={(props) => (
          <NodeNavigatorComponent
            attributes={this.state.attributes}
            data={this.state.data}
            id={this.state.selected}
            updateCallback={this.updateCallback.bind(this)}
            filteredData={this.state.filteredData}>
          </NodeNavigatorComponent>
            )}/>

        </Switch>
      </main>
    )
  }
}

export default Main;
