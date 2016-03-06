import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Firebase from 'firebase';

let ref = new Firebase('https://pincode.firebaseio.com/');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }
  render() {
    return (
      <div>
         <Button bsSize="large">Large button</Button>
        <h1>hello{this.state.count}</h1>
      </div>
    );
  }
}
