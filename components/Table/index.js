import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BasicTable() {
  
  function createData(icon, date, day, time, rest, lateness, changes) {
    return { icon, date, day, time, rest, lateness, changes };
  }
  
  const rows = [
    createData('', '2022-01-01', 'Понедельник', '8:00', '00:45', '-', '-'),
    createData('', '2022-01-02', 'Вторник', '8:00', '00:45', '-', '-'),
    createData('', '2022-01-03', 'Среда', '8:00', '00:45', '-', '-'),
    createData('', '2022-01-04', 'Четверг', '8:00', '00:45', '-', '-'),
    createData('', '2022-01-05', 'Пятница', '8:00', '00:45', '-', '-'),
    createData('', '2022-01-06', 'Суббота', '00:00', '00:00', '-', '-'),
    createData('', '2022-01-07', 'Воскресенье', '00:00', '00:00', '-', '-'),
    createData('Итого', '', '', '40:00', '00:00', '-', '-'),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">День недели</TableCell>
            <TableCell align="right">Затрекал</TableCell>
            <TableCell align="right">Перерыв</TableCell>
            <TableCell align="right">Опоздание</TableCell>
            <TableCell align="right">Количество изменений</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell align="right">{row.icon}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.rest}</TableCell>
              <TableCell align="right">{row.lateness}</TableCell>
              <TableCell align="right">{row.changes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
