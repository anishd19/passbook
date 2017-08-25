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
            <input
              type="text"
              name="particulars"
              placeholder="Enter Particulars here"
              value={this.state.formParticulars}
              ref="particulars"
            />
          </div>
          <div className="row">
            <input
              name="credit"
              placeholder="Enter Deposit Amount"
              value={this.state.formCreditAmount}
              ref="amount"
            />
          </div>
          <div className="row">
            <input
              type="submit"
              value="Submit"
              onClick={() => {
                this.dummyEntries.push(
                  {
                    date : this.state.date,
                    particulars : this.refs.particulars.value,
                    chequeNumber : null,
                    debit : null,
                    credit : Number(this.refs.amount.value),
                    balance : 50000
                  }
                );
                this.toggleFormDisplay();
              }}
            />
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
    console.log("state is : ", this.state);
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
