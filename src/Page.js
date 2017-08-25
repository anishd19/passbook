import React, { Component } from 'react';
import './App.css';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <table>
          <th>DATE</th>
        <th className="double">PARTICULARS</th>
          <th>Cheque No</th>
          <th>DEBIT</th>
          <th>CREDIT</th>
          <th>BALANCE</th>
        </table>
      </div>
    );
  }
}

export default Page;
