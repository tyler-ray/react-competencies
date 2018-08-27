import React, { Component } from 'react';
// import FunctionalComp from './Components/two'
// import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
  }
  buttonClicK = () => {
    axios.get('/info').then((x) => {
      this.setState({
        info: x
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Link to='/stateful'>
          <button>
            Go To first page
          </button>
        </Link>
        <Link to="/funcitonal">
          <button>Go To Second page</button>
        </Link>
        {this.state.info}

        <button onClick={this.buttonClick}>Get Info</button>
      </div>
    );
  }
}

export default App;
