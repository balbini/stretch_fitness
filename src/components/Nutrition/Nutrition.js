import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class Nutrition extends Component {
  render(){

    function simpleTable(props) {
      const { classes } = props;
    }
    return (
      <div className="nutrition left-align">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nutrition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Adults</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Youth</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Special Needs</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    )
  }
}

export default Nutrition;
