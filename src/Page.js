import React, { Component } from 'react';
import './App.css';

class Page extends Component {
  render() {
    let rows = this.props.entries.map((entry, index) => {
      return (
        <tr key = {index}>
          <td>{entry.date.toString()}</td>
          <td className="double">{entry.particulars}</td>
          <td>{entry.chequeNumber}</td>
          <td>{entry.debit}</td>
          <td>{entry.credit}</td>
          <td>{entry.balance}</td>
        </tr>
      );
    });
    return (
      <div className="Page">
        <table>
          <tbody>
            <tr>
              <th>DATE</th>
              <th className="double">PARTICULARS</th>
              <th>Cheque No</th>
              <th>DEBIT</th>
              <th>CREDIT</th>
              <th>BALANCE</th>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Page;
