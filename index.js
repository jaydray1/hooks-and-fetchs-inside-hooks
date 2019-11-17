import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Buttonables from './Buttonables';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      request: 'https://swapi.co/api/people/'
    };
  }

  render() {
    return (
      <div>
        <Buttonables request={this.state.request} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
