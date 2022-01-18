import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BasicTable() {
  function createData(task, task1, time, screenTime, planTime) {
    return { task, task1, time, screenTime, planTime };
  }
  
  const rows = [
    createData('Изучение', '8:00', '8:00', '0:00', '0:00'),
    createData('English lesson', '8:00', '8:00', '0:00', '0:00'),
    createData('Итого', '40:00', '40:00', '0:00', '0:00'),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Затрачено времени</TableCell>
            <TableCell align="right">Затрачено по скриншотам</TableCell>
            <TableCell align="right">Оплачено времени</TableCell>
            <TableCell align="right">Планируется времени</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell align="right">{row.task}</TableCell>
              <TableCell align="right">{row.task1}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.screenTime}</TableCell>
              <TableCell align="right">{row.planTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;