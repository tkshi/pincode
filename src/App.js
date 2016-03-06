import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Firebase from 'firebase';
var Codemirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');

let ref = new Firebase('https://pincode.firebaseio.com/');

var Editor = React.createClass({
    getInitialState: function() {
        return {
            code: "// Code",
            mode:'javascript'
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
    },
    render: function() {
        var options = {
            lineNumbers: true
        };
        return <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
    }
});

export class App extends Component {
  constructor(props) {
    console.log(Codemirror)
    super(props);
    this.state = {count: 1};
  }
  componentWillMount() {
    ref.child('pins/1').on('value',(snap)=>{
      this.setState({title:snap.val().title})
    })
  }
  submitData() {
    ref.child('pins').push({
      title:"hi",
      mode:"markdown",
      code:this.refs.code.value
    })
  }
  render() {
    return (
      <div>
         <Button bsSize="large">Large button</Button>
        <h1>hello{this.state.count}</h1>
        <h1>{this.state.title}</h1>
        <input type='text' ref='code'></input>
        <button onClick={this.submitData.bind(this)}>submit</button>
        <Editor></Editor>
      </div>
    );
  }
}
