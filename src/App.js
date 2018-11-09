import React, { Component } from 'react';
import API from './api/api'
import './App.css';

class App extends Component {
  state = {name: 'Huy', input: ''}

  componentDidMount(){
    API.getPosts()
      .then(response => {
        console.log('check this out', response)
      })

    // API.createNewUser({
    //   name: this.state.name
    // })
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1 className="name">{this.state.name}</h1>
        <input onChange={this.handleInputChange} value={this.state.input}/>
      </div>
    );
  }
}

export default App;
