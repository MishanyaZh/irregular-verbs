import styled from '@emotion/styled';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const StyledEyeIcon = styled(RemoveRedEyeIcon)``;

export const StyledTableRow = styled(TableRow)`
  width: 100%;
  :nth-of-type(odd) {
    background-color: #dbd9d9;
  }
  :last-child td,
  :last-child th {
    border: 0;
  }
  :hover,
  :focus,
  :active {
    background-color: yellowgreen;
  }
`;

export const StyledTableHead = styled(TableHead)`
  background-color: grey;
  color: white;
`;

export const StyledTableCellHead = styled(TableCell)`
  text-align: center;
  padding: 15px 0px 15px 0px;
  color: white;
  cursor: pointer;
  line-height: normal;
  border-bottom: none;
`;

export const StyledTableCell = styled(TableCell)`
  width: 25%;
  text-align: center;
  height: 30px;
  padding: 10px 0px 10px 2px;
`;

export const Container = styled.div`
  margin: 0 auto;
`;
