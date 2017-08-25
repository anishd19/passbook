import React, { Component } from 'react';
import Page from './Page';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now()).toLocaleDateString()
    }
  }
  componentWillMount() {
    this.dummyEntries = [{
      date : this.state.date,
      particulars : "Cash Deposit Self",
      chequeNumber : 12345,
      debit : 15000,
      credit : null,
      balance : 50000
    },
    {
      date : this.state.date,
      particulars : "Cash Deposit Self",
      chequeNumber : 12345,
      debit : 15000,
      credit : null,
      balance : 50000
    },
    {
      date : this.state.date,
      particulars : "Cash Deposit Self",
      chequeNumber : 12345,
      debit : 15000,
      credit : null,
      balance : 50000
    }];
  }
  render() {
    return (
      <div className="App">
        <Page
          entries = {this.dummyEntries}
        />
        <Buttons/>
      </div>
    );
  }
}

export default App;
