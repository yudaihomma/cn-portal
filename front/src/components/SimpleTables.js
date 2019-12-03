import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    overflowX: 'auto',
    margin: 'auto',
    padding: theme.spacing(3)
  },
  table: {
    marginTop: theme.spacing(2),
    whiteSpace: 'pre-line'
  },
}));

function createData(day, branch, attendance_time) {
  return { day, branch, attendance_time};
}

const rows = [
  createData('2/1（土）', '関東', '9-12 \n 15-18'),
  createData('2/1（土）', '関西', ''),
  createData('2/1（土）', '東海', ''),
  createData('2/2（日）', '関東', '10-22'),
  createData('2/2（日）', '関西', ''),
  createData('2/2（日）', '東海', ''),
  createData('2/8（土）', '関東', '9-12 \n 15-18'),
  createData('2/8（土）', '関西', ''),
  createData('2/8（土）', '東海', ''),
  createData('2/9（日）', '関東', '10-22'),
  createData('2/9（日）', '関西', ''),
  createData('2/9（日）', '東海', ''),
  createData('2/11（火）', '関東', '9-12 \n 15-18'),
  createData('2/11（火）', '関西', ''),
  createData('2/11（火）', '東海', ''),
  createData('2/16（日）', '関東', '10-22'),
  createData('2/16（日）', '関西', ''),
  createData('2/16（日）', '東海', ''),
  
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">支部</TableCell>
            <TableCell align="right">出席時間</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.day}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.attendance_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}