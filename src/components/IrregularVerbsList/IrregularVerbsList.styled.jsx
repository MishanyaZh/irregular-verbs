import styled from '@emotion/styled';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const StyledTableRow = styled(TableRow)`
  :nth-of-type(odd) {
    background-color: #dbd9d9;
  }
  :last-child td,
  :last-child th {
    border: 0;
  }
  :hover,
  :focus {
    background-color: yellowgreen;
  }
`;

export const StyledTableHead = styled(TableHead)`
  background-color: grey;
  color: white;
`;
export const StyledTableCellHead = styled(TableCell)`
  text-align: center;

  padding: 10px 0px 10px 5px;
  color: white;
  cursor: pointer;
`;
export const StyledTableCell = styled(TableCell)`
  text-align: center;
  padding: 5px 0px 5px 2px;
`;

export const StyledTableBody = styled(TableBody)`
  /* padding: 8px; */
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 5px;
`;

export const Actions = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #8a9599;
  border-radius: 5px;
`;
