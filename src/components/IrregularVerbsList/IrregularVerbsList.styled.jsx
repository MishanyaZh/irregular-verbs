import styled from '@emotion/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const StyledTableHead = styled(TableHead)`
  background-color: grey;
  color: white;
`;
export const StyledTableCellHead = styled(TableCell)`
  padding: 8px;
  color: white;
`;
export const StyledTableCell = styled(TableCell)`
  padding: 8px;
`;

export const Box = styled.div`
  margin: 0 auto;
  /* min-width: 400px; */
  /* max-width: 300px; */
`;
export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  background-color: tomato;
`;
export const Li = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: grey;
`;
export const Word = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
`;
