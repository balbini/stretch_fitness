import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-materialize';

class Nutrition extends Component {
  render(){
    return (
      <div className="nutrition left-align">
      <Table>
        <thead>
          <th>Nutrition</th>
        </thead>
        <tbody>
          <tr>
            <td>Adults</td>
          </tr>
          <tr>
            <td>Youth</td>
          </tr>
          <tr>
            <td>Special Needs</td>
          </tr>
        </tbody>

      </Table>
      </div>
    )
  }
}

export default Nutrition;
