import React, { Component } from 'react';
import Page from './Page';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(Date.now()).toLocaleDateString(),
      formDisplay: false,
      formParticulars: null,
      formCreditAmount: null
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
  displayCreditForm(boolValue) {
    if(boolValue) {
      return (
        <div className="form">
          <div className="row">
            {"Date : " + this.state.date.toString()}
          </div>
          <div className="row">
            <input type="text" name="particulars" placeholder="Enter Particulars here" value={this.state.formParticulars}/>
          </div>
          <div className="row">
            <input type="number" name="credit" placeholder="Enter Deposit Amount" value={this.state.formCreditAmount}/>
          </div>
          <div className="row">
            <input type="submit" value="Submit"/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  toggleFormDisplay = () => {
    this.setState({formDisplay: !this.state.formDisplay})
  }
  render() {
    return (
      <div className="App">
        <Page
          entries = {this.dummyEntries}
        />
      <Buttons toggleFormDisplay = {this.toggleFormDisplay}/>
      {this.displayCreditForm(this.state.formDisplay)}
      </div>
    );
  }
}

export default App;
